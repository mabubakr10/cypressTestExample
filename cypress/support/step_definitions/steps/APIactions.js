var access_token = null;
class APIactions{
    static getAuthAccessToken(email, pwd, redirect_uri, client_id, client_secret, instance){
        cy.readFile("cypress/fixtures/bearerToken.json").then(jsonObj => {
            access_token = jsonObj["token"].bearer;
            var url = "https://"+instance+".sendoso.com/api/v3/me"
            cy.request({
                method: 'GET',
                url: url,
                failOnStatusCode: false,
                auth: { bearer: access_token },
                body: {
                    grant_type: 'client_credentials',
                    scope: 'public write update',
                }
            }).then((resp)=>{
                console.log(resp.body["expired"]);
                if(resp.body["email"] == email){
                    return;
                }
                else if(resp.body["expired"] == true || resp.body["description"] == "The access token is invalid")
                {
                    let url = "https://" + instance + ".sendoso.com/oauth/authorize?client_id=" + client_id +
                        "&response_type=code&redirect_uri=" + redirect_uri;
                    cy.visit(url)
                    cy.get("#1-email").type(email);
                    cy.get('input[name="password"]').type(pwd);
                    cy.get('button[name="submit"]').click();
                    cy.waitUntil(function () {
                        return cy.get('code')
                    })
                    cy.get('code').then(($code) => {
                        const auth_code = $code.text();
                        //sending request to get access token
                        cy.request({
                            method: 'POST',
                            url: 'https://' + instance + '.sendoso.com/oauth/token', // baseUrl is prepended to url
                            body: {
                                client_id: client_id,
                                client_secret: client_secret,
                                code: auth_code.toString(),
                                redirect_uri: redirect_uri,
                                grant_type: "authorization_code"
                            }
                        }).then((resp) => {
                            access_token = resp.body["access_token"]
                            Cypress.log(resp.body);
                            cy.writeFile("cypress/fixtures/bearerToken.json", {token:
                                    {bearer: access_token,
                                     refreshed_token: resp.body["refreshed_token"]
                                    }
                            })
                        })
                        console.log(Cypress.env("auth_bearer_token"));
                    })
                    //logout of the app
                    cy.request("https://" + instance + ".sendoso.com/user_logout");
                }
            })
        })
    }

    static getTouches(instance){
        cy.request({
            method: 'GET',
            url: "https://"+instance+".sendoso.com/api/v3/touches.json", //get from cypress.env.json
            auth: { bearer: access_token },
            body: {
                grant_type: 'client_credentials',
                scope: 'public write update',
            }
        })
            .its('body')
    }

    static sendTouch(touchID, instance){
        cy.request({
            method: 'POST',
            url: "https://"+instance+".sendoso.com/api/v3/send.json", //get from cypress.env.json
            auth: { bearer: access_token },
            body: {
                "send": {
                    "touch_id": touchID,
                    "via": "single_email_address",
                    "amount": 10,
                    "email": "sibgha.ilyas@sendoso.com"
                }
            }
        })
            .its('body').should('include', {message: 'EGifts send Successfully', success: true})
        //logout of the app
        cy.request("https://"+instance+".sendoso.com/user_logout");
    }

    static sendPhysicalGift(touchID, instance){
        cy.request({
            method: 'POST',
            url: "https://"+instance+".sendoso.com/api/v3/send.json", //get from cypress.env.json
            auth: { bearer: access_token },
            body: {
                "send": {
                    "via": "single_person_or_company",
                    "touch_id": touchID,
                    "name": "John Smith",
                    "address": "639 Front St",
                    "address1": "Fl 3",
                    "city": "San Francisco",
                    "state": "USA",
                    "country": "USA",
                    "zip": "94111",
                    "via_from": "sending-qa.Sendoso.com",
                    "email": "sibgha.ilyas@sendoso.com",
                    "custom_message": "Hi Jeff, I wanted to personally invite you to..."
                }
            }
        })
            .its('body').should('include', {message: 'Gift send Successfully', success: true})
    }
}
export default APIactions;


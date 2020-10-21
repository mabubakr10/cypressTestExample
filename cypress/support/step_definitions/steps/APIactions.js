let access_token = null;
class APIactions{
    static getAuthAccessToken(email, pwd, redirect_uri, client_id, client_secret, instance){
        let url = "https://"+instance+".sendoso.com/oauth/authorize?client_id=" + client_id+
            "&response_type=code&redirect_uri="+redirect_uri;
        cy.visit(url)
        cy.get("#1-email").type(email);
        cy.get('input[name="password"]').type(pwd);
        cy.get('button[name="submit"]').click();
        cy.waitUntil(function() {
             return cy.get('code')
             })
        cy.get('code').then(($code) => {
            const auth_code = $code.text();
            //sending request to get access token
            cy.request({
                method: 'POST',
                url: 'https://'+instance+'.sendoso.com/oauth/token', // baseUrl is prepended to url
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
            })
        })
        //logout of the app
        cy.request("https://"+instance+".sendoso.com/user_logout");
    }

    static getTouches(instance){

        cy.request({
            method: 'POST',
            url: "http://"+instance+".sendoso.com/api/v3/touches.json", //get from cypress.env.json
            auth: { bearer: access_token },
            body: {
                grant_type: 'client_credentials',
                scope: 'public write update',
            }
        })
            .its('body');
    }
}
export default APIactions;


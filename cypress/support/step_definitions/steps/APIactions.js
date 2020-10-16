class APIactions{
    static getTouches(){
        // cy.request("http://core-qa.sendoso.com/api/v3/touches.json");
        cy.request({
            method: 'POST',
            url: Cypress.env('touches_endpoint'), //get from cypress.env.json
            auth: { bearer: Cypress.env('bearer_token') },
            body: {
                grant_type: 'client_credentials',
                scope: 'public write update',
            }
        })
            .its('body');
    }
}

export default APIactions
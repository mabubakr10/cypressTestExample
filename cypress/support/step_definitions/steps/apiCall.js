const url = "https://app.integry.io/bundle/";

class APIactions {
  static loadSdk() {
    cy.request(url);
  }
}
export default APIactions;

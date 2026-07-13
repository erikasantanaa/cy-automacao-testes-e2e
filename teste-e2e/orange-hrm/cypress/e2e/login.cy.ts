describe("Deve logar com sucesso", () => {

  beforeEach(() => {
    cy.startTest()
    cy.submitLoginForm('', '')

    cy.get()
      .should('be.visible')
      .and('have.text', '')

    cy.get()
      .should('be.visible')
      .and('have.text', '')
  });

  it("Deve realizar login com sucesso", () => {

    cy.fixture("user").then((user) => {
      cy.login(user.validUser.username, user.validUser.password);
    });

    cy.contains("Dashboard").should("be.visible");
  });

});
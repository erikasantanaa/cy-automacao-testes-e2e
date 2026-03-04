describe("OrangeHRM - Login", () => {

  beforeEach(() => {
    cy.visit("/web/index.php/auth/login");
  });

  it("Deve realizar login com sucesso", () => {

    cy.fixture("user").then((user) => {
      cy.login(user.validUser.username, user.validUser.password);
    });

    cy.contains("Dashboard").should("be.visible");
  });

});
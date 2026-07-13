describe('Deve logar com sucesso', () => {
  it('passes', () => {
    cy.startTest()
    cy.submitLoginForm('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text','Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

  })
})

describe('Não deve logar com senha inválida', () => {
  it('passes', () => {
    cy.startTest()
    cy.submitLoginForm('papito@webdojo.com', 'katana321')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })
})

describe('Não deve logar com email não cadastrado', () => {
  it('passes', () => {
    cy.startTest()
    cy.submitLoginForm('404@webdojo.com', 'katana123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })
})
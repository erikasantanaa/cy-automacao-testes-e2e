describe('Formulário', () => {
    it('Deve mostrar um texto ao passar o mouse em cima do link do instagram', () => {
        /**SIMULANDO MOUSEOVER COM REAL EVENTS*/
        //Recurso texto do HTML/Cypress não tem suporte.
        //Instalar biblioteca npm install cypress-real-events.
        //Importar no arquivo commands.ts: import'cypress-real-events' arquivo hover.cy.js
        cy.start()
        cy.submitLoginForm('teste@teste.com', 'teste123')
        cy.contains('Isso é Mouseouver!').should('not.exist')//validar não existe
        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é mouseover!').should('exist')
    })
}) 
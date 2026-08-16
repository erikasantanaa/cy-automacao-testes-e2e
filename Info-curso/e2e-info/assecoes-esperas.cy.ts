
describe('Formulário', () => {
    it('Deve verificar campos obrigatórios ', () => {
        /**TESTAR MENSAGENS DE ERRO E CORES CSS*/
        //text-red-400: validar a class cor
        //have.css', 'color', 'rgb(248,113,113): valida o valor dentro da classe
        cy.submitLoginForm('teste@teste.com', 'senha123')
        cy.goto('formulario','contultoria')
        cy.contains('button', 'enviar formulario').click()
        cy.contains('p', 'Digite nome e sobrenome')
            .should('be.visible')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248,113,113)')
    })

    it('Deve verificar os campos obrigatórios', () => {
        /**APRIMORANDO A VALIDAÇÃO COM IDENTIFICAÇÃO VISUAL*/
        //Para cada atualização do sistema, rodar o teste regressão.
        //Ajustar o teste e atualizar campos que mudaram na aplicação apos o ajuste.
        //Campos nome completo e email estão c/ a mesma validação, campo obrigatório, o cypress precisa identificar o campo que recebe validação (validação completa).
        //OBS: se repete para todos os campos com validados.
        cy.contains('button', 'Enviar formulário').click()
        cy.contains('label', 'Nome completo')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248,113,113)')
    })

    it('Deve solicitar consultoria individual', () => {
        //BUSCANDO ELEMENTOS POR CLASSES DE FORMA EFICIENTE
        //Boa prática de automação: inspensionar modal.
        //Quando se tem class com nomes coerentes, se pode usar-las.
        //verificar se a class e unica.
        //OBS timeout: Boa prática é utilizar timeout especifico - teste mais confiável.
        cy.get('.modal', {timeout: 7000}) 
            .should('be.visible')
            .find('.modal-content')
            .should('be.visible')
            .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso!')        
    })
}) 


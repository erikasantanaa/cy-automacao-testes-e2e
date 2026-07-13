

/**Exemplo de teste em formulário */

describe('Formulário de Consultoria', () => {

    it('Deve solicitar consultoria individual', ()=> {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.getCookie('Formulários', 'Consultoria')

        cy.get('input[placeholder="Digite seu nome completo"]').type('Fernando Papito')
        cy.get('#email').type('papito@teste.com.br')
        cy.get('#phone')
            .type('11 98865-1000')
            .should('have.value', '(11) 98865-1000')

        /**Estrategia com label - */
        cy.get('label', 'Tipo de consultoria')
            .parent()
            .find('select')
            .select('Individual')
        
        /**Click() para saber que é um botão de rádio*/
        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .click()
            .should('be.checked')

        /**be.to.checked - faz que o outro botão de rádio seja desmarcado*/
        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.to.checked')
        
        /**Busca CPF, Insere dados, e valida os dados inseridos*/
        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('65602530070')
            .should('have.value', '656.025.300.70')

          /**Montar um array dentro da variavel const para armazenar dados do campo selecionar
           * Usando o forEach para selecionar um de cada checkbox da lista*/  
        const discoveryChannels = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]

        discoveryChannels.forEach((channel) => {
            /**CheckBox  - check()*/
            cy.contains('label', channel)
              .find('input')
              .check()
              .should('be.checked')

        })

        /**upload de arquivo*/
        cy.get('input[type="file"]')
            .selectFile('./cypress/fixtures/document.pdf',  {force: true })

        /**caixa de texto: textarea. Inserir texto */
        cy.get('textarea[placeholder="Descreva mais detalhes dobre sua necessidade"]')
            .type('Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris. Sapien in monti palavris qui num significa nadis i pareci latim. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.')

        /**Inserir texto e apertar ENTER para confirmar na tela, e verificar se foi adcionado
         * A maneira certa de validar é acesando o contains do elemento.
        */
        const techs = [
            'Cypress',
            'Selenium',
            'WebDriverIO',
            'Playwright',
            'Robot Framework'
        ]

        techs.forEach((tech) => {
            cy.get('input[placeholder="Digite uam tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')
            /**validar no lugar certo*/
            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')
        })

        
        /**validar ckeckbox de termos e clicar em enviar. Validar mensagem de confirmação*/
        cy.contains('label', 'termos de uso')
            .find('input')
            .check()

        cy.contains('button', 'Enviar formulário')
            .click()

        cy.contains('Sua solivitação de consultoria foi enviada com sucesso!')
            .should('be.visible')
 

    })
})


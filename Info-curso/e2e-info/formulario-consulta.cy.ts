

/**Teste em formulário */

//Describe: Define uma suíte de testes. Agrupa casos de teste relacionados.
describe('Formulário de Consultoria', () => {
    //it: Define um caso de teste (test case) individual.
    //it.skip: Ignora/pula temporariamente aquele caso de teste específico durante a execução.
    //it.only: Executa apenas este teste, ignorando todos os outros do arquivo. Excelente para debug. 
    it('Deve solicitar consultoria individual', ()=> {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.getCookie('Formulários', 'Consultoria')

        //placeholder: caso nao tenha um ID ou outro localizador, utilizar o placeholder que é com mais segurança.
        //have.value: Validar o conteúdo, para verificar se o que foi digitado está correto
        cy.get('input[placeholder="Digite seu nome completo"]').type('Fernando Papito')
        cy.get('#email').type('papito@teste.com.br')
        cy.get('#phone')
            .type('11 98865-1000')
            .should('have.value', '(11) 98865-1000')

        /**Campo selecionar dados em lista: Estrategia com label - */
        //.select (para nativos do HTML): O cypress não consegue clicar no componente de selecionar, pois as informações são vindo do navegador. O que se pode fazer é usar o select
        //sem xpah - usa: contains + parent+ find+select
        /**Exemplo para angular material: quando o selecionar for material
         * cy.get('[data-testid="form-informar-tipo-filtro"]').click() // abre o dropdown
         * cy.get('md-option').contains('Nome').click() // seleciona a opção
        */
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
        //Botão de rádio
        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.to.checked')
        
        /**Busca CPF, Insere dados, e valida os dados inseridos*/
        //have.value: Validar o conteúdo, para verificar se o que foi digitado está correto
        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('65602530070')
            .should('have.value', '656.025.300.70')

        //CheckBox: Usando um variavel  e o forEach de js, podemos selecionar todos os checkbox de maneira mais sutil e organizado
        //Encontrado pelo label - seleciona um ou mais
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
        //selectFile: mesmo input escondido, verifica o elemento html para ser clicado
        //Arquivo pasta fixures - forçar interação force:true
        cy.get('input[type="file"]')
            .selectFile('./cypress/fixtures/document.pdf',  {force: true })

        /**caixa de texto: textarea. Inserir texto */
        //placeholder: caso nao tenha um ID ou outro localizador, utilizar o placeholder que é com mais segurança.
        cy.get('textarea[placeholder="Descreva mais detalhes dobre sua necessidade"]')
            .type('Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris. Sapien in monti palavris qui num significa nadis i pareci latim. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.')

        /**Inserir texto e apertar ENTER para confirmar na tela, e verificar se foi adcionado
         * A maneira certa de validar é acesando o contains do elemento.
         * Cria um variavel  e o forEach de js, pode adicionar todos,em seguida o localizador onde foi inlcuidos.
        */
        const techs = [
            'Cypress',
            'Selenium',
            'WebDriverIO',
            'Playwright',
            'Robot Framework'
        ]

        techs.forEach((tech) => {
            //placeholder: caso nao tenha um ID ou outro localizador, utilizar o placeholder que é com mais segurança.
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


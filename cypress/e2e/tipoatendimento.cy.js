/// <reference types="cypress"/>
describe('Tipo de atendimento', () => {
    beforeEach(()=>{
        cy.visit("https://front-cras.app.fslab.dev")
      })

    it('Deve cadastrar tipo de atendimento com todos os campos preenchidos', () => {
        cy.get('#email').type('adelson.moreira7293298820@gmail.com');
        cy.get('#senha').type('123');
        cy.get('.styles_button__dr0t2').click();

         cy.get('.styles_buttonMenu__mmyUS > img').click();
         cy.wait(1000)
         cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click();
         cy.get('.styles_buttonMenu__mmyUS > img').click();
         cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();
         cy.get('#nome').type('Está calor');
         cy.get('[type="submit"]').click();
    })

     it('Deve retornar msg de campos obrigatórios', () => {
        cy.get('#email').type('adelson.moreira7293298820@gmail.com');
        cy.get('#senha').type('123');
        cy.get('.styles_button__dr0t2').click();

        cy.get('.styles_buttonMenu__mmyUS > img').click();
        cy.wait(1000)
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click();
        cy.get('.styles_buttonMenu__mmyUS > img').click();
        cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();
        cy.get('[type="submit"]').click();
        cy.contains('Nome é obrigatório').should('be.visible')
        cy.get('.styles_warning__6QZnN').click();

    })

    it('Deve pesquisar um tipo de atendimento e alterar seu nome', ()=>{
        cy.get('#email').type('adelson.moreira7293298820@gmail.com');
        cy.get('#senha').type('123');
        cy.get('.styles_button__dr0t2').click();

        cy.get('.styles_buttonMenu__mmyUS > img').click();
        cy.wait(1000)
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click();
        cy.get('.styles_buttonMenu__mmyUS > img').click();
        cy.get('#tipo').type('Está calor');
        cy.get(':nth-child(2) > .styles_container__NSLBw > #buscar').click();
        cy.get('[alt="Editar tipo de atendimento"]').click();
        cy.get('#nome').clear();
        cy.get('#nome').type('Está muito calor')
        cy.get('[type="submit"]').click();

    })
  



   
    
    })

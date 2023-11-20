/// <reference types="cypress"/>
describe('Pessoas', () => {
    beforeEach(()=>{
        cy.visit("https://front-cras.app.fslab.dev")
      })

      it('Deve cadastrar pessoa com todos os campos preenchidos', () => {
        cy.get('#email').type('adelson.moreira7293298820@gmail.com');
        cy.get('#senha').type('123');
        cy.get('.styles_button__dr0t2').click();

        cy.get('.styles_buttonMenu__mmyUS > img').click();
        cy.wait(1000)
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
        cy.get('.styles_buttonMenu__mmyUS > img').click();
        cy.get(':nth-child(4) > .styles_container__NSLBw > #buscar').click();
        cy.get('#nome').type('Maria da Silva')
        cy.get('#cpf').type('123.256.756-00')
        cy.get('#nit').type('012.12345.00-1')
        cy.get('#dataNascimento').type('2023-11-18')
        cy.get('#estrangeiro').select('Não')
        cy.get('#pais')
        cy.get('#estado').select('Rondônia')
        cy.get('#cidade').select('Vilhena')
        cy.get('#bairro').type('Cidade Verde')
        cy.get('#logradouro').type('Casa')
        cy.get('#cep').type('76983-000')
        cy.get('#numero').type('1234')
        cy.get('#telefone').type('69 984841234')
        cy.get('#telefoneContato').type('69 84841234')
        cy.get('[type="submit"]').click();

        
      })

      it('Deve retornar msg de campos obrigatórios', () => {

        cy.get('#email').type('adelson.moreira7293298820@gmail.com');
        cy.get('#senha').type('123');
        cy.get('.styles_button__dr0t2').click();
        
        cy.get('.styles_buttonMenu__mmyUS > img').click();
        cy.wait(1000)
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
        cy.get('.styles_buttonMenu__mmyUS > img').click();
        cy.get(':nth-child(4) > .styles_container__NSLBw > #buscar').click();
        cy.get('[type="submit"]').click();
        cy.contains('Nome é obrigatório').should('be.visible');
        cy.contains('Data de nascimento é obrigatório').should('be.visible');
        cy.get('.styles_warning__6QZnN').click();
      })

      it('Deve buscar uma pessoa pelo nome e alterar seus dados', ()=>{
        cy.get('#email').type('adelson.moreira7293298820@gmail.com');
        cy.get('#senha').type('123');
        cy.get('.styles_button__dr0t2').click();

        cy.get('.styles_buttonMenu__mmyUS > img').click();
        cy.wait(1000)
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
        cy.get('.styles_buttonMenu__mmyUS > img').click();
        cy.get('#nome').type('Maria da Silva');
        cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();
        cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Maria da Silva');

        cy.get(':nth-child(5) > .styles_container__NSLBw > [alt="Editar pessoa"]').eq(0).click();
        cy.get('#nome').clear()
        cy.get('#nome').type('Maria da Silva Carvalho');
        cy.get('[type="submit"]').click()

    })
    
    it('Deve buscar uma pessoa pelo CPF e alterar seus dados', ()=>{
      cy.get('#email').type('adelson.moreira7293298820@gmail.com');
      cy.get('#senha').type('123');
      cy.get('.styles_button__dr0t2').click();

      cy.get('.styles_buttonMenu__mmyUS > img').click();
      cy.wait(1000)
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
      cy.get('.styles_buttonMenu__mmyUS > img').click();

      cy.get(':nth-child(2) > #nome').type('123.256.756-00');
      cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();
      cy.get('tbody > .styles_tr__2bCIW > :nth-child(2)').contains('123.256.756-00');
      cy.get(':nth-child(5) > .styles_container__NSLBw > [alt="Editar pessoa"]').eq(0).click();
      cy.get('#cpf').clear()
      cy.get('#cpf').type('123.256.756-20');
      cy.get('[type="submit"]').click()
    })

    it('Deve cadastrar atendimento para a pessoa', ()=>{
      cy.get('#email').type('adelson.moreira7293298820@gmail.com');
      cy.get('#senha').type('123');
      cy.get('.styles_button__dr0t2').click();

      cy.get('.styles_buttonMenu__mmyUS > img').click();
      cy.wait(1000)
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
      cy.get('.styles_buttonMenu__mmyUS > img').click();

      cy.get('#nome').type('Maria da Silva');
      cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();
      cy.get('tbody > .styles_tr__2bCIW > :nth-child(1)').contains('Maria da Silva');
      cy.get('[alt="Cadastrar atendimento"]').click();
      cy.get('#dataAtendimento').type('2023-11-19')
      cy.get('#tipo').select('Passe Livre Federal')
      cy.get('#observacao').type('Pessoa em tratamento médico')
      cy.get('[type="submit"]').click()


    })

    it('Deve visualizar os dados da pessoa', ()=>{
      cy.get('#email').type('adelson.moreira7293298820@gmail.com');
      cy.get('#senha').type('123');
      cy.get('.styles_button__dr0t2').click();

      cy.get('.styles_buttonMenu__mmyUS > img').click();
      cy.wait(1000)
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
      cy.get('.styles_buttonMenu__mmyUS > img').click();

      cy.get('#nome').type('Maria da Silva');
      cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();
      cy.get('tbody > .styles_tr__2bCIW > :nth-child(1)').contains('Maria da Silva');
      cy.get('[alt="Informações da pessoa"]').click()
      cy.get('.styles_btnClose__C5d6D').click()
 
    })

    it('Deve buscar pessoa listar os atendimentos recebidos e aterar os dados', ()=>{
      cy.get('#email').type('adelson.moreira7293298820@gmail.com')
      cy.get('#senha').type('123')
      cy.get('.styles_button__dr0t2').click()

      cy.get('.styles_buttonMenu__mmyUS > img').click();
      cy.wait(1000)
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
      cy.get('.styles_buttonMenu__mmyUS > img').click();

      cy.get('#nome').type('Maria da Silva');
      cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();
      cy.get('tbody > .styles_tr__2bCIW > :nth-child(1)').contains('Maria da Silva');
      cy.get('[alt="Ver atendimentos dessa pessoa"]').click();
      cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Informações do atendimento"]').click()
      cy.get('.styles_btnClose__C5d6D').click()
      cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar Atendimento"]').click()
      cy.get('#observacaoAtendimento').clear()
      cy.get('#observacaoAtendimento').type('Pessoa em tratamento médico, encostada pelo Inss.')
      cy.get('[type="submit"]').click()

    })
})

/// <reference types="cypress"/>

describe('Login', () => {
  beforeEach(()=>{
    cy.visit("https://front-cras.app.fslab.dev")
  })

  it('Deve realizar o login com sucesso- cenário de  sucesso', () => {
    cy.get('#email').type('adelson.moreira7293298820@gmail.com'); 
    cy.get('#senha').type('123'); 
    cy.get('[type="submit"]').click(); 
  })
  
  it('Deve retornar mensagem de erro devido usuário inválido  - cenário de insucesso', () => {  
    cy.get('#email').type('camila@gmail.com');
    cy.get('#senha').type('123');
    cy.get('[type="submit"]').click();
    cy.contains('Usuário ou Senha inválida!'); 

})
it('Deve retornar msg dos campos obrigatório para login - cenário de insucesso', () => {  
  cy.get('[type="submit"]').click();
  cy.contains('O email é obrigatório').should('be.visible')
  cy.contains('A senha é obrigatória').should('be.visible')
 
})


});


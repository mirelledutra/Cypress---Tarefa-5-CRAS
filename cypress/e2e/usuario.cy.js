/// <reference types="cypress"/>
describe('usuario', () => {
  it('Deve realizar cadastro de um usuário com status ativo - cenário de sucesso', () => {
    cy.visit('https://front-cras.app.fslab.dev/');
    cy.get('#email').type('adelson.moreira7293298820@gmail.com');
    cy.get('#senha').type('123');
    cy.get('.styles_button__dr0t2').click();
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click();
    cy.get(':nth-child(5) > .styles_button__dr0t2').click();
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > .styles_containerButtonHidden__TaoLq > img').click();
    cy.get('#nomeCadastrar').type('Maria Madalena');
    cy.get('#emailCadastrar').type('mada@gmail.com');
    cy.get('#senhaCadastrar').type('Ma@23456');
    cy.get('#unidadeCadastrar').select('CRAS - Vilhena');
    cy.get('#grupoCadastrar').select('Padrão');
    cy.get('span.styles_slider__0TNp_').click();   
    cy.get('[type="submit"]').click();
    
  })
  it('Deve retornar as mensagem de validação ao cadastrar usuário  - cenário de insucesso', () => {
    cy.visit('https://front-cras.app.fslab.dev/');
    cy.get('#email').type('adelson.moreira7293298820@gmail.com');
    cy.get('#senha').type('123');
    cy.get('.styles_button__dr0t2').click();
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click();
    cy.get(':nth-child(5) > .styles_button__dr0t2').click();
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > .styles_containerButtonHidden__TaoLq > img').click();
    cy.get('#nomeCadastrar').type('Maria Madalena');
    cy.get('#emailCadastrar').type('mada@gmail.com');
    cy.get('#senhaCadastrar').type('Ma@23456');
    cy.get('#unidadeCadastrar').select('CRAS - Vilhena');
    cy.get('#grupoCadastrar').select('Padrão');
    cy.get('span.styles_slider__0TNp_').click();   
    cy.get('[type="submit"]').click();
    cy.contains('E-mail já cadastrado!')
  })

  it('Deve retornar uma consulta do usuário cadastrado com status ativo - cenário de sucesso', () => {
    cy.visit('https://front-cras.app.fslab.dev/');
    cy.get('#email').type('adelson.moreira7293298820@gmail.com');
    cy.get('#senha').type('123');
    cy.get('.styles_button__dr0t2').click();
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click();
    cy.get('#email').type('mada0@gmail.com')
    cy.get('span.styles_slider__0TNp_').click(); 
    cy.get(':nth-child(4) > .styles_button__dr0t2').click();   
  })

  it('Deve atualizar os dados de um usuário - cenário de sucesso ', () => {
    cy.visit('https://front-cras.app.fslab.dev/');
    cy.get('#email').type('adelson.moreira7293298820@gmail.com');
    cy.get('#senha').type('123');
    cy.get('.styles_button__dr0t2').click();
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click();
    cy.get('#email').type('arturo.reis1886299860@gmail.com');
    cy.get('span.styles_slider__0TNp_').click();
    cy.get(':nth-child(4) > .styles_button__dr0t2').click();
    cy.get('[alt="Atualizar usuário"]').click();
   
    cy.get('#grupo').select('Padrão');
    cy.get(':nth-child(1) > .styles_container___TyDM > .styles_switch__i2V2v > span.styles_slider__0TNp_').click();
    cy.get('.styles_alignItemsCenter___8_CC > .styles_container___TyDM > .styles_switch__i2V2v > span.styles_slider__0TNp_').click();
    
    cy.get('[type="submit"]').click();
    cy.contains('Usuário atualizado com sucesso')
  })

  it('Deve visualizar as informações de um usuário - cenário de sucesso', () => {
    cy.visit('https://front-cras.app.fslab.dev/')
    cy.get('#email').type('adelson.moreira7293298820@gmail.com')
    cy.get('#senha').type('123')
    cy.get('.styles_button__dr0t2').click()
    cy.get('.styles_buttonMenu__mmyUS > img').click()
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click()
    cy.get('#email').type('arturo.reis1886299860@gmail.com')
    cy.get('span.styles_slider__0TNp_').click()
    cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Informação do usuário"]').click()
    cy.get('.styles_btnClose__C5d6D').click()
  })
})

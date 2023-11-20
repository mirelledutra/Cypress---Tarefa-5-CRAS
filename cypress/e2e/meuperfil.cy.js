/// <reference types="cypress"/>
describe('Meu Perfil', () => {
    beforeEach(()=>{
        cy.visit("https://front-cras.app.fslab.dev")
        cy.get('#email').type('mirelleteste@gmail.com');
        cy.get('#senha').type('Ab@12345');
        cy.get('.styles_button__dr0t2').click();
      })

      it('Deve alterar os campos e a senha', () => {
        cy.get('.styles_buttonMenu__mmyUS > img').click();
        cy.get('.styles_textButtonLogout__4V0gM')
        cy.wait(1000)

        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/perfil"]').click();
        cy.get('.styles_buttonMenu__mmyUS > img').click();
        cy.get('.styles_button__dr0t2').click()
        cy.get('#senha').type('12345678')
        cy.get('#confirmarSenha').type('12345678')
        cy.get('.styles_container__NSLBw > .styles_button__dr0t2').click()
        cy.get('.styles_btnClose__C5d6D').click()
        cy.contains('Senha é obrigatória e deve ter no mínimo 8 caracteres, letras maiúsculas, minúsculas, números e caracteres especiais!')
        cy.get('.styles_button__dr0t2').click()
        cy.get('#senha').type('Ab@12345678')
        cy.get('#confirmarSenha').type('Ab@12345678')
        cy.get('.styles_container__NSLBw > .styles_button__dr0t2').click()
        //após alterar a senha, clico em sair e tento logar com a nova senha, retorna a mensagem que
        //usuario ou senha estão incorretos sendo que informo a mesma senha cadastrada, isso é uma falha

   })


    })


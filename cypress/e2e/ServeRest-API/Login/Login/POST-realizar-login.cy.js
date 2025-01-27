/// <reference types="cypress" />

describe('Login', () => {

    it('Realizar Login', () => {
        cy.criarUsuario().then((response) => {
            cy.realizarLogin().then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('message', 'Login realizado com sucesso')
                expect(response.body).to.have.property('authorization')
            })
        })
    
    })

    it('Realizar Login com credenciais erradas', () => {
        cy.realizarLoginIncorreto().then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body).to.have.property('message', 'Email e/ou senha inválidos')
        })
    })
})

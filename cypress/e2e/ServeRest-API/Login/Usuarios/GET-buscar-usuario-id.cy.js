/// <reference types="cypress" />

describe('Login', () => {

    it('Buscar usuário por Id', () => {
        cy.criarUsuario().then((resUser) => {
            const userId = resUser.body._id;
            cy.listById(userId).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('nome')
                expect(response.body).to.have.property('email')
                expect(response.body).to.have.property('password')
                expect(response.body).to.have.property('administrador')
                expect(response.body).to.have.property('_id', userId)
            })
        })
    })
})    

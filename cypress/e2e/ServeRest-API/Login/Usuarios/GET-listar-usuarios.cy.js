/// <reference types="cypress" />

describe('Login', () => {

    it('Listar usuários', () => {
        cy.listarUsuario().then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('quantidade').to.be.greaterThan(0)
            expect(response.body.usuarios).to.be.an('array')
        })    
    })

    it('Validar usuários pelo index', () => {
        cy.listarUsuario().then((response) => {
            const firstUser = response.body.usuarios [0]

            expect(firstUser).to.have.property('nome')
            expect(firstUser).to.have.property('email')
            expect(firstUser).to.have.property('password')
            expect(firstUser).to.have.property('administrador')
        
        })
    })
})    

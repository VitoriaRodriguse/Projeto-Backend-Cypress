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

    it('Usuário não encontrado', () => {
        cy.request({
            method:'GET',
            url: 'https://serverest.dev/usuarios/0uxuPY0cbmQhpE22',
            headers: {
                accept: 'application/json',
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('message', 'Usuário não encontrado')
        })
    })
})    

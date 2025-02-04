/// <reference types="cypress" />
import { faker } from '@faker-js/faker/locale/pt_BR'

describe('Login', () => {

    it('Cadastrar um novo usuário', () => {
       cy.criarUsuario().then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
        expect(response.body).to.have.property('_id')
        cy.wrap(response).as('userId')
       })
    })

    it('Cadastrar usuário com email já usado', () => {
        cy.emailUsado().then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('message', 'Este email já está sendo usado')
        })
    })
})
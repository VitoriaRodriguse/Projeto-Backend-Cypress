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
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                nome: faker.person.fullName(),
                email: 'Caua7@bol.com.br',
                password: faker.internet.password(),
                administrador: faker.datatype.boolean().toString()
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('message', 'Este email já está sendo usado')
        })
    })
})
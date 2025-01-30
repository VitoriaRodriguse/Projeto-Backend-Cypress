/// <reference types="cypress" />
import { faker } from '@faker-js/faker/locale/pt_BR'

describe('Editar Usuário', () => {
    let userId

    beforeEach(() => {
        cy.criarUsuario().then((response) => {
           userId = response.body._id
        })
    })    

    it('Editar um usuário existente', () => {
        
        cy.updateUser(userId).then ((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('message', 'Registro alterado com sucesso')
        })
    })

    it('Cadastrar usuário', () => {
        cy.criarUsuario().then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
            expect(response.body).to.have.property('_id')
        })
    })

    it('Usuário com email já cadastrado', () => {
        cy.request({
            method: 'PUT',
            url: 'https://serverest.dev/usuarios/8Y0eloYL6yOlOJpQ',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                nome: 'Lara Santos',
                email: 'Raul.Pereira@hotmail.com',
                password: 'LMQmV9ORnFTVKCu',
                administrador: 'true'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body).to.have.property('message', 'Este email já está sendo usado')
        })
        
    })
})    

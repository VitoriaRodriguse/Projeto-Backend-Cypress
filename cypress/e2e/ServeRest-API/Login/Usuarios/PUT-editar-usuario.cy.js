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
        cy.emailUsado().then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('message', 'Este email já está sendo usado')
        })
    })
})    

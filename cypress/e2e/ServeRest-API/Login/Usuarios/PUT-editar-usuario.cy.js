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
})    

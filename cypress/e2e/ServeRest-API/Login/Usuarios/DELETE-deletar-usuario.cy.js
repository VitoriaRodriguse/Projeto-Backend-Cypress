/// <reference types="cypress" />

describe('Deletar usuário', () => {

    it('Deletar um usuário existente', () => {
        cy.criarUsuario().then((response) => {
            const apagarId = response.body._id;
            cy.listByIdDelete(apagarId).then((response) => {
               expect(response.status).to.eq(200)
               expect(response.body).to.have.property('message', 'Registro excluído com sucesso')
            })
        })   
    })
})   
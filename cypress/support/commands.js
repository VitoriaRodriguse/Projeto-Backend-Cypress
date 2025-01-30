import { faker } from '@faker-js/faker/locale/pt_BR'

Cypress.Commands.add('realizarLogin', (userData = null) => {
    const data = userData || {
        email: 'Kleber.Xavier@bol.com.br',
        password: 'Ik33bdzjvwf09EY',
    }

    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: data,
        failOnStatusCode: false
    })
})


Cypress.Commands.add('realizarLoginIncorreto', (userData = null) => {
    const data = userData || {
        email: 'Nataniel57@hotmail.com',
        password: 'zqsl1jr',
    }

    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: data,
        failOnStatusCode: false
    })
})



Cypress.Commands.add('criarUsuario', (userData = null) => {
    const data = userData || {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: faker.datatype.boolean().toString()
    }

    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: data,
        failOnStatusCode: false
    })
})   


Cypress.Commands.add('listarUsuario', () => {
     cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios',
        headers: {
            accept: 'application/json',
        },
        failOnStatusCode: false
    })
})


Cypress.Commands.add('listById', (userId) => {
     cy.request({
        method: 'GET',
        url: `https://serverest.dev/usuarios/${userId}`,
        headers: {
            accept: 'application/json',
        },
        failOnStatusCode: false
    })
})


Cypress.Commands.add('updateUser', (userId, userData = null) => {
    const data = userData || {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: faker.datatype.boolean().toString()
    }

    return cy.request({
        method: 'PUT',
        url: `https://serverest.dev/usuarios/${userId}`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: data,
        failOnStatusCode: false
    })
})   


Cypress.Commands.add('listByIdDelete', (userId) => {
    cy.request({
       method: 'DELETE',
       url: `https://serverest.dev/usuarios/${userId}`,
       headers: {
           accept: 'application/json',
           'Content-Type': 'application/json'
       },
       failOnStatusCode: false
   })
})
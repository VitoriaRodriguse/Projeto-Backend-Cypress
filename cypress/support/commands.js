import { faker } from '@faker-js/faker/locale/pt_BR'

Cypress.Commands.add('realizarLogin', (userData = null) => {
    const data = userData || {
        email: 'fulano@qa.com',
        password: 'teste',
    }

    return cy.request({
        method: 'POST',
        url: '/login',
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
        url: '/login',
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
        url: '/usuarios',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: data,
        failOnStatusCode: false
    })
})   


Cypress.Commands.add('emailUsado', (userData = null) => {
    const data = userData || {
        nome: faker.person.fullName(),
        email: 'Fabricio.Martins@gmail.com',
        password: faker.internet.password(),
        administrador: faker.datatype.boolean().toString()
    }

    return cy.request({
        method: 'POST',
        url: '/usuarios',
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
        url: '/usuarios',
        headers: {
            accept: 'application/json',
        },
        failOnStatusCode: false
    })
})


Cypress.Commands.add('listById', (userId) => {
     cy.request({
        method: 'GET',
        url: `/usuarios/${userId}`,
        headers: {
            accept: 'application/json',
        },
        failOnStatusCode: false
    })
})


Cypress.Commands.add('idIncorreto', () => {
    cy.request({
       method: 'GET',
       url: '/usuarios/asdfgg',
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
        url: `/usuarios/${userId}`,
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
       url: `/usuarios/${userId}`,
       headers: {
           accept: 'application/json',
           'Content-Type': 'application/json'
       },
       failOnStatusCode: false
   })
})
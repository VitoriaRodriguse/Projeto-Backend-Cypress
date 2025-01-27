import { faker } from '@faker-js/faker/locale/pt_BR'

//Realizar login POST

Cypress.Commands.add('realizarLogin', (userData = null) => {
    const data = userData || {
        email: 'Nataniel57@hotmail.com',
        password: 'zqsl1jrZwqUYA4x',
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

//Realizar login com credenciais erradas POST

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


//Cadastrar usuário POST

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

//Cadastrar usuário com email já utilizado POST

Cypress.Commands.add('novoUsuario', (userData = null) => {
    const data = userData || {
        nome: faker.person.fullName(),
        email: 'Pedro.Martins@gmail.com',
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


//Listar usuários GET

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


//Pegar usuário pelo Id GET

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


//Editar usuário PUT

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

//Deletar usuário

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
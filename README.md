# Automação de Backend com o Cypress 🪄

Nesse projeto realizei testes de API com o Cypress, onde testei 6 endpoints da API [**ServeRest**](https://serverest.dev/#/). O objetivo desses testes foi garantir se o funcionamento dessa API está correto, validando respostas e o comportamento esperado.

Esses endpoints nos permitem realizar a criação de usuários, login de usuários, consulta, atualização e deleção de usuários.

## Detalhes sobre os testes 🪲

### Realizar login:
- Realiza um login;
- Realiza um login com credenciais erradas;
- O primeiro teste possui dois comandos customizados, e no segundo apenas um.

### Cadastro de usuário:
- Cadastra um novo usuário;
- Cadastra um usuário com email já usado;
- Dados dinâmicos gerados pelo Faker;
- Ambos os testes possuem um comando customizado.

### Listar usuários:
- Lista todos os usuários;
- Verifica se a resposta contém a quantidade de usuários e se eles retornam em formato de array;
- Valida usuários pelo index;
- Verifica se os usuários na lista possuem os campos corretos;
- Ambos os testes possuem um comando customizado.

### Listar usuário por ID:
- Busca um usuário através do ID dele;
- Verifica se o usuário possui os campos corretos;
- Buscar um usuário com ID incorreto;
- Dois comandos customizados foram utilizados nesse teste.

### Editar usuário:
- Testa a atualização de um usuário e verifica se a alteração foi realizada com sucesso;
- Dados dinâmicos gerados pelo Faker;
- Cadastro de um usuário;
- Verifica um usuário com email já cadastrado;
- Dois comandos customizados foram utilizados nesse teste.

### Deletar usuário:
- Testa a exclusão de um usuário criado previamente;
- Verifica se a mensagem de sucesso é retornada;
- Dois comandos customizados foram utilizados nesse teste.


## Instalação do Cypress ⚙

### **Pré-requisitos**

1-Certifique-se de que o [Node.js](https://nodejs.org/) está instalado na sua máquina, com o gerenciador de pacotes npm junto.

2-Inicialize um projeto Node.js
Caso ainda não tenha um arquivo `package.json` no seu projeto, inicie-o com o comando:

```bash
npm init -y
```
### **Instalação**
Execute o comando abaixo para instalar o Cypress como uma dependência de desenvolvimento:
```bash
npm install cypress --save-dev
```
### **Abrindo o Cypress**
Após a instalação, você pode abrir o Cypress com o seguinte comando:
```bash
npx cypress open
```
Esse comando abrirá a interface gráfica do Cypress, onde podemos criar, editar e executar os testes. Na primeira execução, o Cypress criará automaticamente uma estrutura de diretórios no projeto.

## Instalação do Faker 🎭
Caso deseje utilizar o Faker no seu projeto, basta instalá-lo com o seguinte comando:  

```bash
npm install --save-dev @faker-js/faker
```

## Documentações 📃
- [Cypress](https://docs.cypress.io/app/get-started/why-cypress)
- [Faker](https://www.npmjs.com/package/@faker-js/faker)
- [ServeRest](https://serverest.dev/#/)

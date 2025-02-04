# Automação de Backend com o Cypress 🪄

Nesse projeto realizei testes de API com o Cypress, onde testei 6 endpoints da API [**ServeRest**](https://serverest.dev/#/). O objetivo desses testes foi garantir se o funcionamento dessa API está correto, validando respostas e o comportamento esperado.

Esses endpoints nos permitem realizar a criação de usuários, login de usuários, consulta, atualização e deleção de usuários.

## Detalhes sobre os testes 🪲

### Realizar login:
- Realiza um login;
- Realiza um login com credenciais erradas;
- Ambos os testes possuem um comando customizado.

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
- Dois comandos customizados foram utilizados no primeiro teste, e um no segundo.

### Editar usuário:
- Testa a atualização de um usuário e verifica se a alteração foi realizada com sucesso;
- Dados dinâmicos gerados pelo Faker;
- Cadastro de um usuário;
- Verifica um usuário com email já cadastrado;
- Um comando customizado foi usado para cada teste, e um no beforeEach.

### Deletar usuário:
- Testa a exclusão de um usuário criado previamente;
- Verifica se a mensagem de sucesso é retornada;
- Dois comandos customizados foram utilizados nesse teste

## Como rodar esses testes 🛼

### 1. Clonar o repositório
Primeiro, clone o repositório para o seu computador usando o seguinte comando:
```bash
git clone https://github.com/VitoriaRodriguse/Projeto-Backend-Cypress.git
```

### 2. Navegue até o diretório do projeto
```bash
cd Projeto-Backend-Cypress
```
### 3. Instale as dependências
```bash
npm install
```

### 4. Rodar os testes
Para abrir a interface gráfica:
```bash
npx cypress open
```
Sem a interface gráfica:
```bash
npx cypress run
```

## Documentações 📃
- [Cypress](https://docs.cypress.io/app/get-started/why-cypress)
- [Faker](https://www.npmjs.com/package/@faker-js/faker)
- [ServeRest](https://serverest.dev/#/)


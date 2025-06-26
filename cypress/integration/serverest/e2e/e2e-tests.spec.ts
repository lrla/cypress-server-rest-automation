/**************************** AUTOMAÇÃO ***********************************************************************************************
 **********************************************************************************************
 Descrição: Essa classe realiza os testes no frontend
 Autor(a):  Letícia Andrade
***********************************************************************************************
**********************************************************************************************/

import { faker } from '@faker-js/faker';
import { ServerRestPage } from 'actions/tests-frontend/e2e-actions.page';

/*********************** COMANDO DE EXECUÇÃO **************************************************
 * npm run test-open-chrome
 * npm run test-open-firefox
 *********************************************************************************************/

const url = 'https://front.serverest.dev/';
const email = Cypress.env('usuarioEmailAdmin');
const senha = Cypress.env('usuarioSenhaAdmin');

describe('/cadastrarusuarios page', () => {
    it('Realizar o cadastro de um usuário novo', () => {
        const email = faker.internet.email();
        const password = faker.internet.password();
        const page = new ServerRestPage();
        // Visita a página 
        cy.intercept('POST', '/usuarios').as('inicioLoginLoad');

        page.visit(url);

        // Clique no botão de cadastre-se
        page.registerButton.click();

        // Preencher dados do formulário
        page.firstName.type('Desafio QA Mouts');

        page.email.type(email);

        page.senha.type(password);

        page.registerButton.click();

        // Validar confirmação de cadastro
        cy.wait('@inicioLoginLoad');

        page.successMessage.should('contain', 'Cadastro realizado com sucesso');

        cy.intercept('GET', '/usuarios').as('users');

        cy.wait('@users');
        Cypress.env('usuarioEmail', email);
        Cypress.env('usuarioSenha', password);
    });

    it('Realizar o cadastro de um usuário novo administrador', () => {
        const firstName = faker.name.firstName();
        const email = faker.internet.email();
        const password = faker.internet.password();
        const page = new ServerRestPage();
        // Visita a página 
        cy.intercept('POST', '/usuarios').as('inicioLoginLoad');

        page.visit(url);

        // Clique no botão de cadastre-se
        page.registerButton.click();

        // Preencher dados do formulário
        page.firstName.type(firstName);

        page.email.type(email);

        page.senha.type(password);

        page.checkbox.click();

        page.registerButton.click();

        // Validar confirmação de cadastro
        cy.wait('@inicioLoginLoad');

        page.successMessage.should('contain', 'Cadastro realizado com sucesso');

        cy.intercept('GET', '/usuarios').as('users');

        cy.wait('@users');

        Cypress.env('usuarioEmailAdmin', email);
        Cypress.env('usuarioSenhaAdmin', password);

    });

    it('Listar usuários - Excluir usuário', () => {
        const page = new ServerRestPage();

        // Visita a página 
        cy.intercept('POST', '/login').as('inicioLoginLoad');

        page.visit(url);

        // Preencher dados do formulário
        page.email.type(email);

        page.senha.type(senha);

        page.entrar.click();

        // Validar login
        cy.wait('@inicioLoginLoad');

        // Clicar no botão Listar
        page.listar.click();

        // Excluir o registro e validar que não está presente na tabela
        cy.deleteTable();

    });

    it('Realizar o cadastro de um novo produto', () => {
        const page = new ServerRestPage();
        const email = Cypress.env('usuarioEmailAdmin');
        const senha = Cypress.env('usuarioSenhaAdmin');

        // Visita a página 
        cy.intercept('POST', '/login').as('inicioLoginLoad');

        page.visit(url);

        // Preencher dados do formulário
        page.email.type(email);

        page.senha.type(senha);

        page.entrar.click();

        // Validar login
        cy.wait('@inicioLoginLoad');

        // Clicar em Cadastrar produto
        page.cadastrar_produto.click();

        cy.intercept('POST', '/produtos').as('newProduct');

        // Preencher o formulário com os dados do novo produto
        cy.fillFormNewProduct();

        // Clicar em Cadastrar produto
        page.salvar_produto.click();

        cy.wait('@newProduct');

    });

    it('Listar um novo produto', () => {
        const page = new ServerRestPage();

        // Visita a página 
        cy.intercept('POST', '/login').as('inicioLoginLoad');

        page.visit(url);

        // Preencher dados do formulário
        page.email.type(email);

        page.senha.type(senha);

        page.entrar.click();

        // Validar login
        cy.wait('@inicioLoginLoad');

        // Clicar em Listar produtos
        page.listar_produto.click();

        // cy.intercept('POST', '/produtos').as('newProduct');

        // Deleta o produto
        cy.deleteProduct();

    });

});


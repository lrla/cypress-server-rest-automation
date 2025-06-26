/**************************** AUTOMAÇÃO *********************************************************************
 ************************************************************************************************************ 
 Descrição: Essa classe representa as actions referentes aos testes 
 Autor(a):  Letícia Andrade
************************************************************************************************************ 
*************************************************************************************************************/

import { AbstractPage } from 'actions/common/abstract.page';
import { TestElements } from 'pages/e2e-page';

export class ServerRestPage extends AbstractPage {

    /**
     * Captura o botão de Cadastro
     */
     public get registerButton(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.buttonRegister);
    }

    /**
     * Captura a mensagem de sucesso
     */
    public get successMessage(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.successMessage);
    }

    /**
     * Captura o input de primeiro nome
     */
    public get firstName(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.inputNome);
    }

    /**
     * Captura o input email
     */
    public get email(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.inputEmail);
    }

    /**
     * Captura o input senha
     */
    public get senha(): Cypress.Chainable<JQuery> {
        return cy.xpath(TestElements.inputSenha);
    }

    /**
     * Captura o checkbox administrador
     */
    public get checkbox(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.checkboxAdmin);
    }

    /**
     * Captura o botão Editar na tela de Listar usuários
     */
    public get editar(): Cypress.Chainable<JQuery> {
        return cy.xpath(TestElements.buttonEditar);
    }
    
    /**
     * Captura o botão Listar usuários
     */
    public get listar(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.buttonUsersList);
    }

    /**
     * Captura o botão entrar na tela de Login
     */
    public get entrar(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.buttonEntrar);
    }

    /**
     * Captura o botão Excluir na tela de Listar usuários
     */
    public get excluir(): Cypress.Chainable<JQuery> {
        return cy.xpath(TestElements.buttonExcluir);
    }

    /**
     * Captura o botão cadastrar produtos
     */
    public get cadastrar_produto(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.buttonCadastrarProduto);
    }

    /**
     * Captura o botão salvar produtos
     */
    public get salvar_produto(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.buttonSalvarProduto);
    }

    /**
     * Captura o botão listar produtos
     */
    public get listar_produto(): Cypress.Chainable<JQuery> {
        return cy.get(TestElements.buttonListarProdutos);
    }
}
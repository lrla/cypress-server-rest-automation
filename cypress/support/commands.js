// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Adicionar este código dentro de support/index.js
// Importante: aplicável para projetos que usam o mochawesome como relatório

// No cypress.json, setar as seguintes configs:
//   "screenshotsFolder": "mochawesome-report/assets",
//   "videosFolder": "mochawesome-report/videos"

import './commands'
import addContext from 'mochawesome/addContext'
import 'cypress-get-by-label/commands'
import { faker } from '@faker-js/faker';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.on("test:after:run", (test, runnable) => {

  // Se o teste falhar, adiciona a imagem da falha ao relatório
  if(test.state === 'failed') {
      // Adiciona a imagem gerada durante a execução final ao relatório
 
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, `${Cypress.spec.name}/${screenshotFileName}`);
}

let videoName = Cypress.spec.name
videoName = `${videoName.replace('/.ts.*', 'ts')}.mp4`
addContext({ test }, `${videoName}`);

Cypress.Commands.add('deleteTable', () => {
  cy.intercept('DELETE', '/usuarios/*').as('deleteUsers');

  // Verifica qual coluna da tabela contém um registro com o nome Desafio QA Mouts
  cy.contains('td', 'Desafio QA Mouts')
    .parents('tr')
    .within(() => {
      cy.contains('button', 'Excluir').click();
    });

    // Adicionando condição de interceptação
    cy.wait('@deleteUsers').its('response.statusCode').should('eq', 200);

    cy.wait(1000);

    // Validar que o registro excluído não é visível (Mesmo após exclusão o elemento ainda está presente no DOM)
    // cy.contains('td', 'Desafio QA Mouts').should('not.exist');


  });


  Cypress.Commands.add('fillFormNewProduct', () => {
    const nome = faker.commerce.productName();
    const preco = faker.commerce.price(10, 1000, 2); 
    const descricao = faker.commerce.productDescription();
    const quantidade = faker.datatype.number({ min: 1, max: 20 });
    const imagem = 'produto.jpg';
  
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="preco"]').type(preco.toString());
    cy.get('[data-testid="descricao"]').type(descricao);
    cy.get('[data-testid="quantity"]').type(quantidade.toString());
  
    // Upload da imagem
    cy.get('[data-testid="imagem"]').selectFile(`cypress/fixtures/${imagem}`, { force: true });
  
    // Armazena o nome do produto em uma variável para verificação posterior
    Cypress.env('produtoNome', nome);

  });

  Cypress.Commands.add('deleteProduct', () => {
    cy.then(() => {
      const nome = Cypress.env('produtoNome');
  
      cy.intercept('DELETE', '/produtos/*').as('deleteProducts');
  
      cy.contains('td', nome)
        .parents('tr')
        .within(() => {
          cy.contains('button', 'Excluir').click();
        });
  
      cy.wait('@deleteProducts').its('response.statusCode').should('eq', 200);

      // Validar que o registro excluído não é visível
      cy.contains('td', nome).should('not.exist');
    });
  });
  

})


/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      deleteTable(): Chainable<void>;
      fillFormNewProduct(): Chainable<void>;
      deleteProduct(): Chainable<void>;
    }
  }
  
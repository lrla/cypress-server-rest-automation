import { startsWith } from 'lodash';

export interface AbstractPageOptions {
    app?: string;
    relativeUrl?: string;
}

/**
 * Representação da página
 */
export abstract class AbstractPage {
    public app!: string; // deve ser substituído pela classe filha ou fornecido no construtor
    public relativeUrl = ''; // deve ser substituído pela classe filha ou fornecido no construtor

    /**
     * Visite esta página diretamente
     */
    public visit(
            url: string,
    ): Cypress.Chainable {
        return cy.visit(url)
            .then(() => cy.url())
            .then(url => {
                // se fomos redirecionados para a página verifique se a logo é exibida
                if (startsWith(url, 'https://front.serverest.dev/')) {
                    cy.get('#root > div > div > form > img').should('be.visible');
                }
            })
    }
}

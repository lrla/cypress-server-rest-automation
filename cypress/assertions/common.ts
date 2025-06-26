/**
 * Common assertions that can be used in api as well as e2e test cases for any application
 */

// TODO: this isn't a sufficiently general function. Remove it.
export function checkURL(redirectUrl: string = '/'): Cypress.Chainable {
    return cy.url().should('include', redirectUrl);
}

export function expect400<T extends Cypress.Response>(res: T): T {
    expect(res.status).to.equal(400);
    return res;
}

export function expect403<T extends Cypress.Response>(res: T): T {
    expect(res.status).to.equal(403);
    return res;
}

export function expect401<T extends Cypress.Response>(res: T): T {
    expect(res.status).to.equal(401);
    return res;
}

export function expect500<T extends Cypress.Response>(res: T): T {
    expect(res.status).to.equal(500);
    return res;
}

export function expect422<T extends Cypress.Response>(res: T): T {
    expect(res.status).to.equal(422);
    return res;
}

export function expect404<T extends Cypress.Response>(res: T): T {
    expect(res.status).to.equal(404);
    return res;
}

export function expect409<T extends Cypress.Response>(res: T): T {
    expect(res.status).to.equal(409);
    return res;
}

export function expectSuccess<T extends Cypress.Response>(res: T): T {
    expect(res.status).to.be.oneOf([201, 200, 300, 204]);
    return res;
}

export type ExpectResFn = (typeof expect400) | (typeof expect404) | (typeof expectSuccess) | (typeof expect422);
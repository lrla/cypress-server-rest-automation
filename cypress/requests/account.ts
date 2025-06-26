import { ExpectResFn, expectSuccess } from 'assertions/common';

const baseUrl = 'https://serverest.dev';
const baseUrlLogin = `${baseUrl}/login`;
const baseUrlUsers = `${baseUrl}/usuarios`;

export interface NewUser {
    nome?: string;
    email?: string;
    password?: string;
    administrador?: string;
    _id?: string;
    authorization?: string;
}

/**
 * Criar um novo usuário
 * POST /usuarios
 */
export function createUser(
    userData: Partial<NewUser>,
    expectFn: ExpectResFn = expectSuccess,
): Cypress.Chainable<NewUser> {
    return cy
        .request({
            method: 'POST',
            url: baseUrlUsers,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: userData,
            failOnStatusCode: false,
        })
        .then(expectFn)
        .then(res => res.body as NewUser);
}


/**
 * Realizar login
 * POST /login
 */
export function login(
    loginData: Partial<NewUser>,
    expectFn: ExpectResFn = expectSuccess,
): Cypress.Chainable<NewUser> {
    return cy
        .request({
            method: 'POST',
            url: baseUrlLogin,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: loginData,
            failOnStatusCode: false,
        })
        .then(expectFn)
        .then(res => {
            Cypress.env('token', res.body.authorization);
            return res.body as NewUser;
        });
}

/**
 * Buscar usuário
 * GET usuarios/:id
 */
export function getUserById(
    userId: string,
    expectFn: ExpectResFn = expectSuccess,
): Cypress.Chainable<NewUser> {
    return cy
        .request({
            method: 'GET',
            url: `${baseUrlUsers}/${userId}`,
            headers: {
                'Accept': 'application/json',
            },
            failOnStatusCode: false,
        })
        .then(expectFn)
        .then(res => res.body as NewUser);
}

/**
 * Deletar usuário 
 * DELETE usuarios/:id
 */
export function deleteUser(
    userId: string,
    expectFn: ExpectResFn = expectSuccess,
): Cypress.Chainable {
    return cy
        .request({
            method: 'DELETE',
            url: `${baseUrlUsers}/${userId}`,
            headers: {
                'Accept': 'application/json',
            },
            failOnStatusCode: false,
        })
        .then(expectFn);
}

/**************************** AUTOMAÇÃO ***********************************************************************************************
 **********************************************************************************************
 Descrição: Essa classe realiza os testes de API
 Autor(a):  Letícia Andrade
***********************************************************************************************
**********************************************************************************************/

import { expectSuccess, expect400, expect401 } from "assertions/common";
import { createUser, deleteUser, login,  NewUser } from "requests/account";
import { NewProduct, createProduct } from "requests/products";
import { faker } from '@faker-js/faker';
import {  getRandomPrice } from '../../../../utils/random';

/*********************** COMANDO DE EXECUÇÃO **************************************************
 * npm run test-open-chrome
 * npm run test-open-firefox
 *********************************************************************************************/

const user: NewUser = {
    nome: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: "true",
};

const product: NewProduct = {
    nome: faker.commerce.product(),
    preco: getRandomPrice(),
    descricao: faker.commerce.productDescription(),
    quantidade: 150
}

describe('POST /usuarios', () => {
    it('deve ser possível criar um novo usuário', () => {
        cy.log('Dados enviados no request body', JSON.stringify(user));
        createUser(user, expectSuccess)
            .then(response => {
                expect(response).to.have.property('_id');
                expect(response).to.have.property('message').that.contains('Cadastro realizado com sucesso');
                Cypress.env('email', user.email);
                Cypress.env('senha', user.password);
                Cypress.env('userId', response._id);
            });
    });

    it('não deve ser possível criar um usuário com o nome vazio', () => {
        user.nome = "";
        createUser(user, expect400);
    });

    it('não deve ser possível criar um usuário com senha inválida', () => {
        user.password = "a";
        createUser(user, expect400);
    });

    it('não deve ser possível criar um usuário com e-mail já cadastrado', () => {
        user.email = Cypress.env('email');
        createUser(user, expect400);
    });
});

describe('POST /login', () => {
    it('deve ser possível realizar o login com usuário criado', () => {
        const userCreated: NewUser = {
            email: Cypress.env('email'),
            password: Cypress.env('senha'),
        };
        cy.log('Dados de login', JSON.stringify(userCreated));
        login(userCreated, expectSuccess).then(response => {
            expect(response).to.have.property('authorization'); 
            expect(response).to.have.property('message').that.contains('Login realizado com sucesso');
            Cypress.env('token', `Bearer ${response.authorization?.replace(/^Bearer\s?/, '')}`);
        });
    });

});

describe('DELETE usuarios/:id', () => {
    it('deve ser possível excluir usuário cadastrado', () => {
        user._id = Cypress.env('userId'),
        deleteUser(user._id!, expectSuccess).then((res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.have.property('message').that.includes('Registro excluído com sucesso');
        });
      });

      it('validar mensagem de exclusão inválida', () => {
        deleteUser(user._id!, expectSuccess).then((res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.have.property('message').that.includes('Nenhum registro excluído');
        });
      });

});

describe('POST /produtos', () => {
    it('deve ser possível criar um novo produto', () => {
        const apiKey = Cypress.env('token');
        createProduct(product, apiKey, expectSuccess).then((res) => {
            expect(res).to.have.property('message').that.contains('Cadastro realizado com sucesso');
            expect(res.nome).to.be.not.null;
            expect(res._id).to.be.not.null;
            expect(res.descricao).to.be.not.null;
            expect(res.preco).to.be.not.null;
            expect(res.quantidade).to.be.not.null;
          });
    });
    
    it('não deverá ser possível criar um produto com token de autenticação inválido', () => {
        const apiKey = 'abc';
        createProduct(product, apiKey, expect401).then((res) => {
            expect(res._id).to.be.not.null;
            expect(res).to.have.property('message').that.contains('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais');
          });
    });
      
});

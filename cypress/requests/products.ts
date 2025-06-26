import { ExpectResFn, expectSuccess } from 'assertions/common';

const baseUrl = 'https://serverest.dev';
const baseUrlProdutos = `${baseUrl}/produtos`;

export interface NewProduct {
  nome: string;
  preco: number;
  descricao: string;
  quantidade: number;
  _id?: string;
  apiKey?: string;
}

/**
 * Criar novo produto
 * POST /produtos
 */
export function createProduct(
    productData: NewProduct,
    apiKey: string,
    expectFn: ExpectResFn = expectSuccess
  ): Cypress.Chainable<NewProduct> {
    return cy
      .request({
        method: 'POST',
        url: baseUrlProdutos,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: productData,
        failOnStatusCode: false,
      })
      .then(expectFn)
      .then(res => res.body as NewProduct);
  }


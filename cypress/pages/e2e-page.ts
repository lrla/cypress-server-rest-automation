/**************************** AUTOMAÇÃO *********************************************************************
 ************************************************************************************************************ 
 Descrição: Elementos dos testes e2e do desafio
 Autor(a):  Letícia Andrade
************************************************************************************************************ 
*************************************************************************************************************/

const TestElements = {
    buttonRegister: '[data-testid="cadastrar"]',
    inputNome: '[data-testid="nome"]',
    inputEmail: '[data-testid="email"]',
    checkboxAdmin: '[data-testid="checkbox"]',
    successMessage: 'a.alert-link',
    buttonUsersList: '[data-testid="listarUsuarios"]',
    buttonEditar: "//tr[1]/td/div/button[contains(text(), 'Editar')]",
    buttonExcluir: "//tr[1]/td/div/button[contains(text(), 'Excluir')]",
    buttonEntrar: '[data-testid="entrar"]',
    buttonCadastrarProduto: '[data-testid="cadastrarProdutos"]',
    buttonSalvarProduto: '[data-testid="cadastarProdutos"]',
    inputSenha: '//*[@data-testid="senha" or @data-testid="password"]',
    buttonListarProdutos: '[data-testid="listarProdutos"]',
    buttonVerRelatorios: '[data-testid="relatorios"]',

  };
  
  export { TestElements };
  
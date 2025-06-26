# SeverRest QA Cypress - Desafio de Automação

Para realizar a configuração e executar os testes automatizados, siga os seguintes passos:

##### Baixando o Node.js

Instale o Node.js em sua máquina, clicando no link abaixo:

[Baixar Node.js](https://nodejs.org/en/).


Para confirmar que a instalação obteve êxito, abra o seu terminal e digite:

    - node --version

##### Clonando o projeto e abrindo na IDE

    - git clone <link-do-projeto-no-gitlab>

Após clonar o projeto, abra-o na IDE e vamos realizar as configurações das dependências,

    - npm install

Para executar os testes em modo headless digite:

    - npm run test

# Demo QA Cypress - Desafio de Automação
Este projeto tem como objetivo demonstrar habilidades em automação de testes utilizando o framework Cypress. Ele contempla:

- Testes de API baseados no backend do Serverest

- Testes End-to-End (E2E) na interface web do Front Serverest

##### Tecnologias utilizadas
- Node.js

- Cypress

- Typescript

- Serverest (API fake para automação)

⚙️ Pré-requisitos
Antes de executar os testes, verifique se você possui as ferramentas abaixo instaladas:

Node.js (v14 ou superior)

npm (gerenciador de pacotes)

# Como configurar o projeto
1. Clonar o repositório

git clone <link-do-projeto-no-gitlab>
cd nome-do-projeto

2. Instalar as dependências

npm install

# Executando os testes
- Testes em modo headless (linha de comando)
npm run test
- Testes com interface interativa (modo visual)

npx cypress open

##### Estrutura dos testes
##### Testes de API:
Os testes de API estão organizados para validar endpoints fornecidos pelo Serverest, incluindo:

Criação e Listagem de usuários (admin x não admin)

Login

Cadastro de produtos

Erros esperados (status 400/401/403 etc.)

##### Testes End-to-End (E2E)
Os testes E2E interagem com a interface web do Front Serverest, simulando ações como:

Cadastro e login de usuários

Listagem e Exclusão de usuários não Administradores

Navegação e fluxo de usuário de ponta a ponta, desde o cadastro até login e armazenamento
de credenciais de acesso em environments.

Cadastro de produtos 

Verificações visuais e funcionais da aplicação

# Estrutura do projeto

├── cypress
│   ├── actions             # Ações reutilizáveis de testes E2E
│   ├── assertions          # Asserções reutilizáveis para validações de API
│   ├── downloads           # Armazena arquivos baixados ou gerados durante os testes
│   ├── fixtures            # Dados mockados em JSON usados nos testes
│   ├── integration         # Arquivos de testes E2E e de API 
│   ├── pages               # Page Objects com mapeamento e ações por página
│   ├── plugins             # Configurações de plugins e extensões do Cypress
│   ├── requests            # Funções de requisições HTTP encapsuladas (testes de API)
│   ├── support             # Comandos customizados e configurações globais do Cypress
│   ├── utils               # Funções auxiliares e utilitárias usadas nos testes
│   └── ...             
├── package.json
├── package-lock.json
├── cypress.json
├── tsconfig.json
└── README.md



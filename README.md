# Projeto de Testes Automatizados com Cypress

Este projeto contém a automação de testes do fluxo de login e logout da aplicação **OrangeHRM Demo**, utilizando o framework **Cypress**.

## 📚 Tecnologias Utilizadas

- Cypress
- Mochawesome Reporter (para geração de relatórios)
- Node.js / NPM

## 📂 Estrutura do Projeto

```
projeto-teste-cypress/
├── .vscode/
│   └── settings.json
├── cypress/
│   ├── e2e/
│   │   └── login/
│   │       ├── 01_login_com_sucesso.cy.js
│   │       ├── 02_login_falha.cy.js
│   │       ├── 03_login_cenarios_extras.cy.js
│   │       └── 04_login_logout.cy.js
│   ├── fixtures/
│   │   └── usuarios.json
│   ├── support/
│       ├── commands.js
│       └── e2e.js
├── node_modules/
├── relatorios/
│   ├── relatorio_testes_cypress.docx
│   └── mochawesome.html
├── cypress.config.js
├── package.json
└── README.md
```

## 🚀 Como Rodar o Projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar testes com interface gráfica (Cypress aberto)

```bash
npm run cypress:open
```

### 3. Rodar testes headless e gerar relatório automático

```bash
npm run cypress:run
```

O relatório será salvo automaticamente na pasta `relatorios/`.

## 📄 Relatórios Gerados

- **Relatório HTML (automático)**: `relatorios/mochawesome.html`
- **Relatório Manual (Word)**: `relatorios/relatorio_testes_cypress.docx`
- **Screenshots**: geradas automaticamente em `cypress/screenshots/` para cada teste.

## 👤 Autor

- Nome: Matheus Alves Araujo

---

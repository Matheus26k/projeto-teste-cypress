🚀 Projeto de Testes Automatizados com Cypress

Automatização do fluxo de login/logout da aplicação OrangeHRM Demo, utilizando o framework Cypress. O projeto também inclui a geração de relatórios, screenshots automáticas e integração com o VSCode via launch.json.

📊 Tecnologias Utilizadas

✅ Cypress

✅ Mochawesome Reporter (relatórios HTML)

✅ Node.js + NPM

✅ Prettier / ESLint (qualidade de código)

✅ VSCode (launch.json / tasks.json)

📂 Estrutura do Projeto

projeto-teste-cypress/
├── .vscode/
│ ├── launch.json
│ └── settings.json
├── cypress/
│ ├── e2e/login/
│ │ ├── 01_login_com_sucesso.cy.js
│ │ ├── 02_login_falha.cy.js
│ │ ├── 03_login_cenarios_extras.cy.js
│ │ └── 04_login_logout.cy.js
│ ├── fixtures/usuarios.json
│ └── support/
│ ├── commands.js
│ └── e2e.js
├── relatorios/
│ ├── relatorio_testes_cypress.docx
│ ├── mochawesome.html
│ └── screenshots/
├── cypress.config.js
├── package.json
└── README.md

🚀 Como Rodar o Projeto

1. Instalar dependências:

npm install

2. Rodar com interface gráfica:

npm run cypress:open

Ou via VSCode:

Ctrl + Shift + D > "Executar e Depurar"

Selecione Abrir Cypress (Interface Gráfica) > ▶

3. Rodar em modo headless:

npm run cypress:run

4. Gerar relatório com Mochawesome:

npm run test:report

O arquivo HTML será salvo em relatorios/mochawesome.html

📅 Testes Automatizados

✅ Login com sucesso

❌ Login com senha incorreta

⚠️ Cenários extras (sem preencher, apenas senha, apenas login)

📦 Logout e validação de retorno à página inicial

📄 Relatórios Gerados

relatorios/mochawesome.html → Relatório automático HTML

relatorios/relatorio_testes_cypress.docx → Documento Word descritivo

cypress/screenshots/ → Evidências visuais automáticas

👤 Autor

Matheus Alves Araujo

✨ Este projeto foi criado para fins de aprendizado, automação de testes e melhoria da prática em QA.

describe('Login - Sucesso', () => {
    it('Deve realizar login com sucesso', () => {
      cy.fixture('usuarios').then((usuarios) => {
        // Realiza login usando o comando customizado
        cy.login(usuarios.usuario_sucesso.username, usuarios.usuario_sucesso.password);
  
        // Validação 1: Conferir se a URL contém "/dashboard" (indicando que o login deu certo)
        cy.url().should('include', '/dashboard');
  
        // Validação 2: Verificar se o título da página contém o texto "Dashboard"
        cy.get('h6').should('contain', 'Dashboard');
  
        // Validação 3: Verificar se a imagem do perfil do usuário (foto) está visível
        cy.get('img[alt="profile picture"]').should('be.visible');
  
        // Validação 4: Verificar se o nome do usuário (menu de usuário) está visível
        cy.get('.oxd-userdropdown-name').should('exist');
      });
    });
  });  
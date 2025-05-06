describe('Login e Logout - Fluxo Completo', () => {
  it('Deve realizar login e logout com sucesso', () => {
    cy.fixture('usuarios').then((usuarios) => {
      // Realiza login usando o comando customizado
      cy.login(usuarios.usuario_sucesso.username, usuarios.usuario_sucesso.password);

      // Validação 1: Conferir se a URL contém "/dashboard"
      cy.url().should('include', '/dashboard');

      // Validação 2: Verificar se a imagem do perfil do usuário está visível
      cy.get('img[alt="profile picture"]').should('be.visible');

      // Clique na imagem do perfil para abrir o menu
      cy.get('img[alt="profile picture"]').click();

      // Aguarda o menu de usuário aparecer
      cy.get('.oxd-userdropdown-link').contains('Logout').should('be.visible').click();

      // Validação 3: Verificar se voltou para a página de login
      cy.url().should('include', '/auth/login');

      // Validação 4: Confirmar que o campo de usuário está visível novamente
      cy.get('input[name="username"]').should('be.visible');
    });
  });
});
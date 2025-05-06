describe('Login - Falha', () => {
  it('Deve exibir mensagem de erro com senha inválida', () => {
    cy.fixture('usuarios').then((usuarios) => {
      cy.login(
        usuarios.usuario_invalido.username,
        usuarios.usuario_invalido.password
      );
      cy.get('.oxd-alert-content-text').should(
        'contain',
        'Invalid credentials'
      );
    });
  });
});

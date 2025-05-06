describe('Login - Cenários Extras', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve exibir erro ao tentar logar sem preencher nada', () => {
    cy.get('button[type="submit"]').click();

    // Validar erro de campo obrigatório para usuário
    cy.get('.oxd-input-group > .oxd-text').eq(0).should('contain', 'Required');

    // Validar erro de campo obrigatório para senha
    cy.get('.oxd-input-group > .oxd-text').eq(1).should('contain', 'Required');
  });

  it('Deve exibir erro ao tentar logar apenas com usuário', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('button[type="submit"]').click();

    // Validar erro apenas para senha (não existe erro de usuário porque foi preenchido)
    cy.get('.oxd-input-group > .oxd-text')
      .should('contain', 'Required');
  });

  it('Deve exibir erro ao tentar logar apenas com senha', () => {
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Validar erro apenas para usuário (não existe erro de senha porque foi preenchida)
    cy.get('.oxd-input-group > .oxd-text')
      .should('contain', 'Required');
  });

});
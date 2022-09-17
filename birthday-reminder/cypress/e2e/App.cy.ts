const sizes: Array<Cypress.ViewportPreset | Array<number>> = [[1920, 1080], 'iphone-6'];

describe('App (e2e)', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it('visits home page successfully', () => {
    cy.visit('/');
  });

  it('clear people list when clicks on clear button', () => {
    sizes.forEach(size => {
      if (Array.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit('/');

      cy.get('button')
        .contains(/clear all/i)
        .should('exist')
        .click();

      cy.get('h3')
        .contains(/birthdays today/i)
        .should('exist')
        .should('contain', '0');

      cy.get('article').should('not.exist');
    });
  });
});

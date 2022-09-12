describe('example', () => {
  it('should pass', () => {
    cy.visit('http://localhost:8080/index.html');

    cy.getByTestId<HTMLLIElement>('menu-item-', '^')
      .each<HTMLLIElement>(menu => {
        cy.wrap(menu)
          .click();
      })
      .then(elements => {
        for (const element of elements) {
          cy.wrap(element)
            .invoke('attr', 'data-clicked')
            .should('eq', 'true');
        }
      });
  });
});

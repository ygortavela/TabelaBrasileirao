context('Teams Management', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/management/teams');
    });

    it('should open create a new team', () => {
        cy.get('#button__create-team').click();

        cy.get('form').within(() => {
            cy.get('input[name="name"]').type('Teste');
            cy.get('input[name="initials"]').type('tst');
            cy.root().submit();
        });

        cy.get('ul > li:last-child').should('have.text', 'Teste (TST)');
    });

    it('should replace the team that has been created', () => {
        cy.get('ul > li:last-child > button').click();

        cy.get('form').within(($form) => {
            cy.get('input[name="name"]').type('{selectall}Bacana');
            cy.get('input[name="initials"]').type('{selectall}bcn');
            cy.root().submit();
        });

        cy.get('ul > li:last-child').should('have.text', 'Bacana (BCN)');
    });

    it('should delete the team which has been created', () => {
        cy.get('li')
            .its('length')
            .then(($value) => {
                cy.get('ul > li:last-child > button').click();

                cy.get('form').within(($form) => {
                    cy.get('input[name="name"]').should('have.value', 'Bacana');
                    cy.get('input[name="initials"]').should('have.value', 'BCN');
                });

                cy.get('#button__delete-team').click();

                cy.get('li')
                    .its('length')
                    .should('eq', $value - 1);
            });
    });
});

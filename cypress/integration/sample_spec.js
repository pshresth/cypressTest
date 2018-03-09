describe("My First test", function (){

  var dash = require('../utilities/common.util.js');

  it('Logs into the site', function () {
    cy.visit('http://paccar-portal-qa.connectedfleet.io');
    cy.get('[name="email"]')
      .type('paccaradmin@test.com');
    cy.get('[name="password"]')
      .type('Password1');
    cy.get('[type=submit]').click();
    cy.url()
      .should('include', '#/nav/dashboard');
    cy.get('[href="#/nav/dealerOwnerGroup/list/"]').click();
    cy.get('[href="#/nav/customers/list/"]').click();
  });
});

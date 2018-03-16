/// <reference types="Cypress" />
describe("My First test", function (){

    var dash = require('../utilities/commonUtility.js');
    var emails = require('../utilities/params.js');
    var loginUserArray = emails.userLoginArray;

    for (var i = 1; i <= 50; i++) {
        it('Logs into the site', function () {
            cy.visit('http://paccar-portal-qa.connectedfleet.io');
            cy.get('[name="email"]')
              .type(loginUserArray[Math.floor(Math.random() * loginUserArray.length)]);
            cy.get('[name="password"]')
              .type('Password1');
            cy.get('[type=submit]')
                .click();
            cy.url()
              .should('include', '#/nav/dashboard');
            cy.get('[id="user-profile-menu-name"]', {timeout: 6000})
              .should('be.visible');
            cy.get('[id="user-profile-menu-name"]').click();
            cy.get('[href="#/logout"]', {timeout: 6000})
              .should('be.visible');
            cy.get('[href="#/logout"]').click();
            cy.clearLocalStorage();
        });
    }
});

var commonUtility = function () {

  var dashboardLink = cy.get('#fleetHealthMap\.common\.menu\.section\.id > .ng-binding');
  var dogLink = cy.get('#dealerOwnerGroup\.common\.menu\.section\.id > .ng-binding');
  var dealersLink = cy.get('#common\.dealers\.section\.id > .ng-binding');
};

module.exports = new commonUtility();

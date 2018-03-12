var commonUtility = function () {

    this.dashboardLink = '[href="#/nav/dashboard"]';
    this.dogLink = '[href="#/nav/dealerOwnerGroup/list/"]';
    this.customersLink = '[href="#/nav/customer/list/"]';
    this.dealersLink = '[href="#/nav/dealer/list/"]';
    this.vehiclesLink = '[href="#/nav/vehicle/list/"]';
    this.remoteDiagLink = '[href="#/nav/remoteDiagnostics/deactivate/"]';
    this.analyticsLink = '[href="#/nav/analytics"]';
    this.exportLink = '[href="#/nav/export/jobs"]';
    this.devicesLink = '[href="#/nav/device/list/"]';
    this.deviceCollectionsLink = '[href="#/nav/deviceCollection/list/"]';
    this.manufacturersLink = '[href="#/nav/manufacturer/list/"]';
    this.notificationsLink = '[href="#/nav/notification/list/"]';
    this.oemsLink = '[href="#/nav/oem/list/"]';
    this.permissionsLink = '[ng-href="#/nav/permission/list/"]';
    this.rolesLink = '[href="#/nav/role/list/"]';
    this.topTenFaultsLink = '[href="#/nav/topten"]';
    this.usersLink = '[href="#/nav/user/list/"]'; // the cancel button when editing the user also has the href link
    this.wifiUsersLink = '[href="#/nav/wifiuser/list/"]'; // the cancel button when editing the user also has the href link

    this.clickCustomerLink = function () {
        cy.get(dash.customersLink).click();
        cy.url()
            .should('include', '#/nav/customer');
    }

};

module.exports = new commonUtility();

/// <reference types="cypress" />

import Constants from '../constants/actions.constants';
import WijzigConstant from '../constants/wijzig.constants';
import ActionsLocator from '../locators/actions.locators';

var ActionsPage = {

    navigateToMainPage: function(passCookies = true) {

        cy.visit(Constants.main_Page)
        cy.log('Went to main page')
        if (passCookies) {
            this.acceptCookies();
        }
    },

    enterPostalCode: function(postalCode, Number, addition = null) {
        cy.get(ActionsLocator.Id_postalCode()).scrollIntoView({ offset: { top: -50, left: 0 } }).should('be.visible');
        cy.get(ActionsLocator.Id_postalCode()).type("{backspace}" + postalCode);
        cy.get(ActionsLocator.Id_houseNumber()).type(Number);
        if (addition != null) {
            cy.get(ActionsLocator.Id_houseAddition()).type(Number);
        }
        cy.get('button span[name=arrow-right]').click();
    },

    // houseTypeLocator - can be the name or the id of the object.
    // set isSelectedByName to select object by ID
    selectHouseType: function(houseTypeLocator, isSelectByName = true) {
        if (isSelectByName) {
            cy.contains(houseTypeLocator).parent().parent().should('be.visible').click();

        } else {
            //selection by Id
            cy.get(houseTypeLocator).parent().parent().should('be.visible').click();
        }
        cy.contains(Constants.nextButtonText).should('be.visible').click(); //next button
    },

    //Selects number of persons
    selectPersonsCount: function(personsIdLocator) {

        //selection by Id
        cy.get(personsIdLocator).parent().parent().should('be.visible').click();
        cy.contains(Constants.nextButtonText).should('be.visible').click(); //next button
    },

    selectPowerOptions: function(powerOptionIdLocator) {

        //selection by Id
        cy.get(powerOptionIdLocator).parent().parent().should('be.visible').click();
        cy.contains(Constants.seeOfferText).should('be.visible').click(); //next button
    },

    selectEnergyProductionOptions: function(energyGenerationIdLocator) {

        //selection by Id
        cy.get(energyGenerationIdLocator).parent().parent().should('be.visible').click();
        cy.get('button').contains(Constants.nextButtonText).should('be.visible').click(); //next button
    },

    acceptCookies: function() {
        cy.contains(Constants.acceptButtonText).should('be.visible').click()
    },
};

export default ActionsPage;
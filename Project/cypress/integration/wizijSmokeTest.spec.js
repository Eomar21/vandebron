import ActionsConstant from '../constants/actions.constants';
import WijzigConstant from '../constants/wijzig.constants';
import ActionsPages from '../pages/actions.pages';
const timeToRefresh = 2000;



describe('Test Wijzij options', () => {
    beforeEach(() => {
        // Navigate to the view with one combination of settings
        ActionsPages.navigateToMainPage();
        ActionsPages.enterPostalCode(WijzigConstant.ValidAddress.postalCode, WijzigConstant.ValidAddress.houseNumber)
        ActionsPages.selectHouseType(WijzigConstant.woning.TwoOnderOneKap, false);
        ActionsPages.selectPersonsCount(WijzigConstant.persons.Person_5Plus);
        ActionsPages.selectPowerOptions(WijzigConstant.GasAndElectricityOptions.GasAndElectricity)
        ActionsPages.selectEnergyProductionOptions(WijzigConstant.GenerateEnergyOptions.None)


    });
    context('validate options in wijsig view', () => {
        it('Should check that the values of the offer changes on selecting all persons value', () => {

            // Validate all person buttons
            const personsList = Object.values(WijzigConstant.persons);
            for (let i = 0; i < personsList.length; i++) {
                getOfferValue();
                prepareForWijzin();
                cy.get(personsList[i]).parent().parent().should('be.visible').click();
                cy.contains(ActionsConstant.oK).click();
                cy.wait(timeToRefresh)
                cy.get('@initialValue').then(text => {
                    cy.log(text)
                    validateOfferChangeValue(text)
                });
            }
        });
        it('Should check that the values of the offer changes on selecting all HouseHolds value', () => {

            //Validate all HouseHolds buttons
            const woningList = Object.values(WijzigConstant.woning);
            for (let i = 0; i < woningList.length; i++) {
                getOfferValue();
                prepareForWijzin();
                cy.get(woningList[i]).parent().parent().should('be.visible').click()
                cy.contains(ActionsConstant.oK).click();
                cy.wait(timeToRefresh)
                cy.get('@initialValue').then(text => {
                    cy.log(text)
                    validateOfferChangeValue(text)
                });
            }
        });
        it('Should check that the values of the offer changes on selecting all Energy Types value ', () => {

            //Validate all Energy type buttons
            const gasAndElectricityOptionsList = Object.values(WijzigConstant.GasAndElectricityOptions);
            for (let i = 0; i < gasAndElectricityOptionsList.length; i++) {
                getOfferValue();
                prepareForWijzin();
                cy.get(gasAndElectricityOptionsList[i]).parent().parent().should('be.visible').click()
                cy.contains(ActionsConstant.oK).click();
                cy.wait(timeToRefresh)
                cy.get('@initialValue').then(text => {
                    cy.log(text)
                    validateOfferChangeValue(text)
                });
            }
        });
    });
});


function prepareForWijzin() {
    cy.get(WijzigConstant.wijzig_Id).scrollIntoView().click();
    // Doe een schatting
    var makeAChangeHeading = cy.get('a').contains(ActionsConstant.makeAChange);
    makeAChangeHeading.scrollIntoView().should('be.visible');
    makeAChangeHeading.click();
}

function getOfferValue() {
    cy.get('label[for="radio-undefined-36Fixed"]').find('.Text-module__text-default.Text-module__u-font-body').scrollIntoView().invoke('text').then((text) => {
        expect(text.trim()).to.include('€')
        cy.wrap(text.trim()).as('initialValue')
    });
}


function validateOfferChangeValue() {
    cy.get('label[for="radio-undefined-36Fixed"]').find('.Text-module__text-default.Text-module__u-font-body').scrollIntoView().invoke('text').then((newText) => {
        cy.get('@initialValue').then(text => {
            cy.log(text)
            expect(newText.trim()).to.not.equal(text);
        });
    });
}
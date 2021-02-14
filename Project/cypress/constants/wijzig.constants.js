//ids for inputs before best deal page
var WijzigConstant = {

    // //used after adding the postal code
    // //House type id
    // // page - In welk type woning woon je?
    woning: Object.freeze({
        Apartment: 'input[id=\"priceParameters.houseTypeIdx_0\"]', // hooking to the name now
        Tussenwoning: 'input[id=\"priceParameters.houseTypeIdx_1\"]',
        Hoekwoning: 'input[id=\"priceParameters.houseTypeIdx_2\"]',
        TwoOnderOneKap: 'input[id=\"priceParameters.houseTypeIdx_3\"]',
        Vrijstaand: 'input[id=\"priceParameters.houseTypeIdx_4\"]'
    }),

    // // page - Met hoeveel mensen woon je hier?
    // // Number of Persons id
    persons: Object.freeze({
        Person_1: 'input[id=\"priceParameters.residentTypeIdx_0\"]',
        Person_2: 'input[id=\"priceParameters.residentTypeIdx_1\"]',
        Person_3: 'input[id=\"priceParameters.residentTypeIdx_2\"]',
        Person_4: 'input[id=\"priceParameters.residentTypeIdx_3\"]',
        Person_5Plus: 'input[id=\"priceParameters.residentTypeIdx_4\"]'
    }),

    //Wat heb je nodig?
    GasAndElectricityOptions: Object.freeze({

        ElectricityOnly: 'input[id=\"priceParameters.includeGas_0\"]',
        GasAndElectricity: 'input[id=\"priceParameters.includeGas_1\"]'
    }),

    // Wek je zelf energie op? - solar energy option
    GenerateEnergyOptions: Object.freeze({
        SolarEnergy: 'input[id=\"priceParameters.solarPanelYield_1700\"]',
        None: 'input[id=\"priceParameters.solarPanelYield_0\"]'
    }),

    ValidAddress: { postalCode: "1019BW", houseNumber: "25", addition: "a" },
    wijzig_Id: 'a[title="wijzig"]'
}

export default WijzigConstant
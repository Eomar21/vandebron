var ActionsLocator = {


    // Main Inputs on 2nd page - postal code, number and addition

    //postal code
    Id_postalCode: function() {
        return 'input[id="submitData.shippingAddress.zipCode"]';
    },
    //house number
    Id_houseNumber: function() {
        return 'input[id="submitData.shippingAddress.number"]';
    },

    //addition
    Id_houseAddition: function() {
        return 'input[id="submitData.shippingAddress.addition"]';
    }
};

export default ActionsLocator;
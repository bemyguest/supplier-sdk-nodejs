
/**
 * BeMyGuestSuppliersAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 ( https://apimatic.io ) on 07/25/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateTicketsStatusResponse
 *
 * @constructor
 */
UpdateTicketsStatusResponse = function (obj) {
    if(!obj) {
        this.data = null;     
    } else {
        this.data = obj.data.map(function(model){
            return new Ticket(model);
        });
    }
};

UpdateTicketsStatusResponse.prototype = new BaseModel();
UpdateTicketsStatusResponse.prototype.constructor = UpdateTicketsStatusResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
UpdateTicketsStatusResponse.prototype.getData = function() {
    return this.data;
};

/**
 * Setter for Data
 * 
 * @param {array} value 
 */
UpdateTicketsStatusResponse.prototype.setData = function(value) {
    this.data = value;
};


module.exports = UpdateTicketsStatusResponse;
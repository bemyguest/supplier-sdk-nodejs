
/**
 * BeMyGuestSuppliersAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 ( https://apimatic.io ) on 07/25/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateTicketsStatusRequest
 *
 * @constructor
 */
UpdateTicketsStatusRequest = function (obj) {
    if(!obj) {
        this.data = null;     
    } else {
        this.data = obj.data.map(function(model){
            return new Ticket(model);
        });
    }
};

UpdateTicketsStatusRequest.prototype = new BaseModel();
UpdateTicketsStatusRequest.prototype.constructor = UpdateTicketsStatusRequest;

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
UpdateTicketsStatusRequest.prototype.getData = function() {
    return this.data;
};

/**
 * Setter for Data
 * 
 * @param {array} value 
 */
UpdateTicketsStatusRequest.prototype.setData = function(value) {
    this.data = value;
};


module.exports = UpdateTicketsStatusRequest;
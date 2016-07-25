
/**
 * BeMyGuestSuppliersAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 ( https://apimatic.io ) on 07/25/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of AddTicketsBatchResponse
 *
 * @constructor
 */
AddTicketsBatchResponse = function (obj) {
    if(!obj) {
        this.data = null;     
    } else {
        this.data = obj.data.map(function(model){
            return new TicketsBatch(model);
        });
    }
};

AddTicketsBatchResponse.prototype = new BaseModel();
AddTicketsBatchResponse.prototype.constructor = AddTicketsBatchResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
AddTicketsBatchResponse.prototype.getData = function() {
    return this.data;
};

/**
 * Setter for Data
 * 
 * @param {array} value 
 */
AddTicketsBatchResponse.prototype.setData = function(value) {
    this.data = value;
};


module.exports = AddTicketsBatchResponse;
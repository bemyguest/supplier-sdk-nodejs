
/**
 * BeMyGuestSuppliersAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 ( https://apimatic.io ) on 07/25/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of AddTicketsBatchRequest
 *
 * @constructor
 */
AddTicketsBatchRequest = function (obj) {
    if(!obj) {
        this.data = null;     
    } else {
        this.data = obj.data.map(function(model){
            return new TicketsBatch(model);
        });
    }
};

AddTicketsBatchRequest.prototype = new BaseModel();
AddTicketsBatchRequest.prototype.constructor = AddTicketsBatchRequest;

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
AddTicketsBatchRequest.prototype.getData = function() {
    return this.data;
};

/**
 * Setter for Data
 * 
 * @param {array} value 
 */
AddTicketsBatchRequest.prototype.setData = function(value) {
    this.data = value;
};


module.exports = AddTicketsBatchRequest;

/**
 * BeMyGuestSuppliersAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 ( https://apimatic.io ) on 07/25/2016
 */
var BaseResponse = require("./BaseResponse");
/**
 * Creates a instance of GetTicketStatusResponse
 *
 * @constructor
 */
GetTicketStatusResponse = function (obj) {
    if(!obj) {
        BaseResponse.call(this, null);
        this.date = null;     
    } else {
        BaseResponse.call(this, obj);
        this.date = obj.date.map(function(model){
            return new Ticket(model);
        });
    }
};

GetTicketStatusResponse.prototype = new BaseResponse();
GetTicketStatusResponse.prototype.constructor = GetTicketStatusResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
GetTicketStatusResponse.prototype.getDate = function() {
    return this.date;
};

/**
 * Setter for Date
 * 
 * @param {array} value 
 */
GetTicketStatusResponse.prototype.setDate = function(value) {
    this.date = value;
};


module.exports = GetTicketStatusResponse;

/**
 * BeMyGuestSuppliersAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 ( https://apimatic.io ) on 07/25/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Ticket
 *
 * @constructor
 */
Ticket = function (obj) {
    if(!obj) {
        this.status = null;     
        this.value = null;     
        this.updatedAt = null;     
    } else {
        this.status = obj.status;
        this.value = obj.value;
        this.updatedAt = new Date(obj.updatedAt);
    }
};

Ticket.prototype = new BaseModel();
Ticket.prototype.constructor = Ticket;

/**
 * Status of the ticket - unused | used | invalid
 *
 * @return {string}
 */
Ticket.prototype.getStatus = function() {
    return this.status;
};

/**
 * Setter for Status
 * 
 * @param {string} value 
 */
Ticket.prototype.setStatus = function(value) {
    this.status = value;
};

/**
 * Value of the ticket number
 *
 * @return {string}
 */
Ticket.prototype.getValue = function() {
    return this.value;
};

/**
 * Setter for Value
 * 
 * @param {string} value 
 */
Ticket.prototype.setValue = function(value) {
    this.value = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {dateTime|null}
 */
Ticket.prototype.getUpdatedAt = function() {
    return this.updatedAt;
};

/**
 * Setter for UpdatedAt
 * 
 * @param {dateTime|null} value 
 */
Ticket.prototype.setUpdatedAt = function(value) {
    this.updatedAt = value;
};


module.exports = Ticket;
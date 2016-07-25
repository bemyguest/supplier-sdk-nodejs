
/**
 * BeMyGuestSuppliersAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 ( https://apimatic.io ) on 07/25/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of TicketsBatch
 *
 * @constructor
 */
TicketsBatch = function (obj) {
    if(!obj) {
        this.adultsAllowed = null;     
        this.barcodeTypeUuid = null;     
        this.childrenAllowed = null;     
        this.currencyUuid = null;     
        this.pricePerTicket = null;     
        this.productTypesUuid = null;     
        this.tickets = null;     
        this.ticketsBatchName = null;     
        this.ticketsBatchReference = null;     
        this.ticketsOrderDate = null;     
        this.ticketsPerPerson = null;     
        this.validFrom = null;     
        this.validTo = null;     
        this.ticketsOrderReference = null;     
    } else {
        this.adultsAllowed = obj.adultsAllowed;
        this.barcodeTypeUuid = obj.barcodeTypeUuid;
        this.childrenAllowed = obj.childrenAllowed;
        this.currencyUuid = obj.currencyUuid;
        this.pricePerTicket = obj.pricePerTicket;
        this.productTypesUuid = obj.productTypesUuid;
        this.tickets = obj.tickets.map(function(model){
            return new Ticket(model);
        });
        this.ticketsBatchName = obj.ticketsBatchName;
        this.ticketsBatchReference = obj.ticketsBatchReference;
        this.ticketsOrderDate = obj.ticketsOrderDate;
        this.ticketsPerPerson = obj.ticketsPerPerson;
        this.validFrom = obj.validFrom;
        this.validTo = obj.validTo;
        this.ticketsOrderReference = obj.ticketsOrderReference;
    }
};

TicketsBatch.prototype = new BaseModel();
TicketsBatch.prototype.constructor = TicketsBatch;

/**
 * TODO: Write general description for this method
 *
 * @return {bool}
 */
TicketsBatch.prototype.getAdultsAllowed = function() {
    return this.adultsAllowed;
};

/**
 * Setter for AdultsAllowed
 * 
 * @param {bool} value 
 */
TicketsBatch.prototype.setAdultsAllowed = function(value) {
    this.adultsAllowed = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {uuid|string}
 */
TicketsBatch.prototype.getBarcodeTypeUuid = function() {
    return this.barcodeTypeUuid;
};

/**
 * Setter for BarcodeTypeUuid
 * 
 * @param {uuid|string} value 
 */
TicketsBatch.prototype.setBarcodeTypeUuid = function(value) {
    this.barcodeTypeUuid = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {bool}
 */
TicketsBatch.prototype.getChildrenAllowed = function() {
    return this.childrenAllowed;
};

/**
 * Setter for ChildrenAllowed
 * 
 * @param {bool} value 
 */
TicketsBatch.prototype.setChildrenAllowed = function(value) {
    this.childrenAllowed = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {uuid|string}
 */
TicketsBatch.prototype.getCurrencyUuid = function() {
    return this.currencyUuid;
};

/**
 * Setter for CurrencyUuid
 * 
 * @param {uuid|string} value 
 */
TicketsBatch.prototype.setCurrencyUuid = function(value) {
    this.currencyUuid = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
TicketsBatch.prototype.getPricePerTicket = function() {
    return this.pricePerTicket;
};

/**
 * Setter for PricePerTicket
 * 
 * @param {int} value 
 */
TicketsBatch.prototype.setPricePerTicket = function(value) {
    this.pricePerTicket = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {uuid|string}
 */
TicketsBatch.prototype.getProductTypesUuid = function() {
    return this.productTypesUuid;
};

/**
 * Setter for ProductTypesUuid
 * 
 * @param {uuid|string} value 
 */
TicketsBatch.prototype.setProductTypesUuid = function(value) {
    this.productTypesUuid = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
TicketsBatch.prototype.getTickets = function() {
    return this.tickets;
};

/**
 * Setter for Tickets
 * 
 * @param {array} value 
 */
TicketsBatch.prototype.setTickets = function(value) {
    this.tickets = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
TicketsBatch.prototype.getTicketsBatchName = function() {
    return this.ticketsBatchName;
};

/**
 * Setter for TicketsBatchName
 * 
 * @param {string} value 
 */
TicketsBatch.prototype.setTicketsBatchName = function(value) {
    this.ticketsBatchName = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
TicketsBatch.prototype.getTicketsBatchReference = function() {
    return this.ticketsBatchReference;
};

/**
 * Setter for TicketsBatchReference
 * 
 * @param {string} value 
 */
TicketsBatch.prototype.setTicketsBatchReference = function(value) {
    this.ticketsBatchReference = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
TicketsBatch.prototype.getTicketsOrderDate = function() {
    return this.ticketsOrderDate;
};

/**
 * Setter for TicketsOrderDate
 * 
 * @param {string} value 
 */
TicketsBatch.prototype.setTicketsOrderDate = function(value) {
    this.ticketsOrderDate = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
TicketsBatch.prototype.getTicketsPerPerson = function() {
    return this.ticketsPerPerson;
};

/**
 * Setter for TicketsPerPerson
 * 
 * @param {int} value 
 */
TicketsBatch.prototype.setTicketsPerPerson = function(value) {
    this.ticketsPerPerson = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
TicketsBatch.prototype.getValidFrom = function() {
    return this.validFrom;
};

/**
 * Setter for ValidFrom
 * 
 * @param {string} value 
 */
TicketsBatch.prototype.setValidFrom = function(value) {
    this.validFrom = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
TicketsBatch.prototype.getValidTo = function() {
    return this.validTo;
};

/**
 * Setter for ValidTo
 * 
 * @param {string} value 
 */
TicketsBatch.prototype.setValidTo = function(value) {
    this.validTo = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
TicketsBatch.prototype.getTicketsOrderReference = function() {
    return this.ticketsOrderReference;
};

/**
 * Setter for TicketsOrderReference
 * 
 * @param {string|null} value 
 */
TicketsBatch.prototype.setTicketsOrderReference = function(value) {
    this.ticketsOrderReference = value;
};


module.exports = TicketsBatch;
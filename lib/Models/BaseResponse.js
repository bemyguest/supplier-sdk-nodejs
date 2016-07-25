
/**
 * BeMyGuestSuppliersAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 ( https://apimatic.io ) on 07/25/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of BaseResponse
 *
 * @constructor
 */
BaseResponse = function (obj) {
    if(!obj) {
        this.data = null;     
    } else {
        this.data = obj.data;
    }
};

BaseResponse.prototype = new BaseModel();
BaseResponse.prototype.constructor = BaseResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
BaseResponse.prototype.getData = function() {
    return this.data;
};

/**
 * Setter for Data
 * 
 * @param {array} value 
 */
BaseResponse.prototype.setData = function(value) {
    this.data = value;
};


module.exports = BaseResponse;
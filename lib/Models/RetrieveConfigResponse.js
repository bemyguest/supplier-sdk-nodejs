
/**
 * BeMyGuestSuppliersAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 ( https://apimatic.io ) on 07/25/2016
 */
var BaseResponse = require("./BaseResponse");
/**
 * Creates a instance of RetrieveConfigResponse
 *
 * @constructor
 */
RetrieveConfigResponse = function (obj) {
    if(!obj) {
        BaseResponse.call(this, null);
        this.data = null;     
    } else {
        BaseResponse.call(this, obj);
        this.data = obj.data;
    }
};

RetrieveConfigResponse.prototype = new BaseResponse();
RetrieveConfigResponse.prototype.constructor = RetrieveConfigResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
RetrieveConfigResponse.prototype.getData = function() {
    return this.data;
};

/**
 * Setter for Data
 * 
 * @param {array} value 
 */
RetrieveConfigResponse.prototype.setData = function(value) {
    this.data = value;
};


module.exports = RetrieveConfigResponse;
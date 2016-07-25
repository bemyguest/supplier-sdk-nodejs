/**
 * BeMyGuestSuppliersAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 ( https://apimatic.io ) on 07/25/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var APIController = {

    /**
     * A Config object has the following attributes:
     * + `timezone` - Our sever timezone
     * + `now` - Our server timestamp
     * + `version` - Current version is "1.0"
     * + `serverUrl` - Main API URL
     * + user - All important userdata for provided API key
     *     + `name` - Name / Company / Organization
     *     + `email` - E-Mail Address
     *     + `uuid` - Unique ID
     *     + `defaultPagination` - Default Pagination value (per page), between 1-100
     *     + `defaultCurrencyUuid` - Default currency UUID for /products (if not specified)
     *     + `defaultCurrencyCode` - Default currency code for /products (if not specified)
     *     + `defaultLanguageUuid` - Default language UUID  /products (if not specified)
     *     + `defaultLanguageCode` - Default language code  /products (if not specified)
     * + `products` - A list of supplier products
     *     + `productTypes` - A list of prodcut types bellonging to this product
     * + `languages` - A list of supported languages.
     * + `currencies` - An array of supported currencies.
     * + `barcodeTypes` - An array of supported barcode types.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {RetrieveConfigResponse}
     */
    retrieveConfig : function(callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/suppliers/config";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "X-Authorization" : _configuration.xAuthorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new RetrieveConfigResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Wrong Arguments", errorCode: 400, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 401) {
                callback({errorMessage: "Unauthorized", errorCode: 401, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 403) {
                callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "Resource Not Found", errorCode: 404, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 405) {
                callback({errorMessage: "Method Not Allowed", errorCode: 405, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 410) {
                callback({errorMessage: "Resource No Longer Available", errorCode: 410, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * ## Add Tickets BatchPlease remember that with all update tickets status requests you need to providea proper Content-Type header.`Content-Type: application/json`Example JSON request:        {          "ticketsBatchName" : "1 DAY ADULT TAB 6M (PEAK)",          "ticketsBatchReference" : "USS1DADTAB6MA0210004",          "ticketsOrderReference" : "1609871",          "ticketsOrderDate" : "2016-01-12",          "ticketsPerPerson" : 1,          "productTypesUuid": [            "3016c3cf-d483-5e81-ad55-ba362670e2e2"          ],          "currencyUuid": "0a1f8d35-3b6f-54ac-8421-131f340b6334",          "barcodeTypeUuid": "a87e1e6f-c4f0-5655-b0b6-05e066bdb51b",          "adultsAllowed" : true,          "childrenAllowed" : true,          "seniorsAllowed" : true,          "validFrom" : "2016-01-15",          "validTo" : "2016-06-15",          "pricePerTicket" : 67.00,          "tickets": [            {              "value" : "100040100100005022",              "status" : "unused"            },            {              "value" : "100040100100005023",              "status" : "unused"            },            {              "value" : "100040100100005024",              "status" : "unused"            }          ]        }A response object has the following attributes:+ `ticketsBatchName` - name of the inserted ticket batch+ `ticketsBatchReference` - reference of the inserted ticket batch+ `ticketsOrderReference` - tickets order reference+ `ticketsOrderDate` - date - tickets order date+ `ticketsPerPerson` - integer+ `productTypesUuid` - array - all attached product types to this batch+ `currencyUuid` - string+ `barcodeTypeUuid` - string+ `adultsAllowed` - bool - batch validity for adults bookings - true|false+ `childrenAllowed` - bool - batch validity for children bookings - true|false+ `validFrom` - string - valid from date for the batch+ `validTo` - string - valid to date for the batch+ `pricePerTicket` - number - price per ticket+ `tickets` - array - list of all tickets that have been added to the batch with their number and statusesExample JSON response:        {          "data": {            "ticketsBatchName": "1 DAY ADULT TAB 6M (PEAK)",            "ticketsBatchReference": "USS1DADTAB6MA0210004",            "ticketsOrderReference": "1609871",            "ticketsOrderDate": "2016-01-12",            "ticketsPerPerson": 1,            "productTypesUuid": [              "3016c3cf-d483-5e81-ad55-ba362670e2e2"            ],            "currencyUuid": "0a1f8d35-3b6f-54ac-8421-131f340b6334",            "barcodeTypeUuid": "a87e1e6f-c4f0-5655-b0b6-05e066bdb51b",            "adultsAllowed": true,            "childrenAllowed": true,            "validFrom": "2016-01-15",            "validTo": "2016-06-15",            "pricePerTicket": 67,            "tickets": {              "data": [                {                  "value": "100040100100005022",                  "status": "unused",                  "usedAt": null                },                {                  "value": "100040100100005023",                  "status": "unused",                  "usedAt": null                },                {                  "value": "100040100100005024",                  "status": "unused",                  "usedAt": null                }              ]            }          }        }## Update Tickets StatusPlease remember that with all update tickets status requests you need to providea proper Content-Type header.`Content-Type: application/json`Example JSON request:        {          "data": [            {              "value" : "100040100100005022",              "status" : "used"            },           {              "value" : "0041018110401587837",                "status" : "unused"            }          ]        }A response object has the following attributes:+ `value` - value of ticket number+ `status` - unused / used / invalid - status of the ticket after the update+ `usedAt` - null / dateExample JSON response:        {          "data": [            {              "value": "100040100100005022",              "status": "used",              "usedAt": "2016-07-25 11:47:23"            },            {              "value": "0041018110401587837",              "status": "unused",              "usedAt": null            }          ]        }
     * @param {AddTicketsBatchRequest} data    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {AddTicketsBatchResponse}
     */
    addTicketsBatch : function(data, callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/suppliers/tickets";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "X-Authorization" : _configuration.xAuthorization
        };

        //Remove null values
        _APIHelper.cleanObject(data);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(data),
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new AddTicketsBatchResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Wrong Arguments", errorCode: 400, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 401) {
                callback({errorMessage: "Unauthorized", errorCode: 401, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 403) {
                callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "Resource Not Found", errorCode: 404, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 405) {
                callback({errorMessage: "Method Not Allowed", errorCode: 405, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 410) {
                callback({errorMessage: "Resource No Longer Available", errorCode: 410, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Update statuses for all the provided tickets
     * @param {UpdateTicketsStatusRequest} data    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {UpdateTicketsStatusResponse}
     */
    updateTicketsStatus : function(data, callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/suppliers/tickets";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "X-Authorization" : _configuration.xAuthorization
        };

        //Remove null values
        _APIHelper.cleanObject(data);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "PUT",
            headers: _headers,
            body : _APIHelper.jsonSerialize(data),
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new UpdateTicketsStatusResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Wrong Arguments", errorCode: 400, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 401) {
                callback({errorMessage: "Unauthorized", errorCode: 401, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 403) {
                callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "Resource Not Found", errorCode: 404, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 405) {
                callback({errorMessage: "Method Not Allowed", errorCode: 405, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 410) {
                callback({errorMessage: "Resource No Longer Available", errorCode: 410, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Get status for specific ticket number.##ResponseA response object has the following attributes:+ `value` - value of ticket number+ `status` - unused / used / invalid - current status of the ticket+ `usedAt` - null / date
     * @param {string} ticketNumber    Required parameter: Example: 
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetTicketStatusResponse}
     */
    getTicketStatus : function(ticketNumber, callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/suppliers/tickets/{ticket_number}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ticket_number" : ticketNumber
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "X-Authorization" : _configuration.xAuthorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new GetTicketStatusResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Wrong Arguments", errorCode: 400, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 401) {
                callback({errorMessage: "Unauthorized", errorCode: 401, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 403) {
                callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "Resource Not Found", errorCode: 404, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 405) {
                callback({errorMessage: "Method Not Allowed", errorCode: 405, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 410) {
                callback({errorMessage: "Resource No Longer Available", errorCode: 410, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    }

};

module.exports = APIController;
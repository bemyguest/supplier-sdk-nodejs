/**
  * @module BeMyGuestSuppliersAPIV1Lib
  *  
  * Please refer to
http://docs.bemyguestsuppliersapiv1.apiary.io/
  */

var configuration = require('./configuration'),
    APIController = require('./Controllers/APIController'),
    RetrieveConfigResponse = require('./Models/RetrieveConfigResponse'),
    AddTicketsBatchRequest = require('./Models/AddTicketsBatchRequest'),
    AddTicketsBatchResponse = require('./Models/AddTicketsBatchResponse'),
    UpdateTicketsStatusRequest = require('./Models/UpdateTicketsStatusRequest'),
    UpdateTicketsStatusResponse = require('./Models/UpdateTicketsStatusResponse'),
    GetTicketStatusResponse = require('./Models/GetTicketStatusResponse'),
    Ticket = require('./Models/Ticket'),
    TicketsBatch = require('./Models/TicketsBatch'),
    BaseResponse = require('./Models/BaseResponse');


function initializer(){}

//Main functional components of BeMyGuestSuppliersAPIV1Lib
initializer.configuration = configuration;
initializer.APIController = APIController;

//Main Models of BeMyGuestSuppliersAPIV1Lib
initializer.RetrieveConfigResponse = RetrieveConfigResponse;
initializer.AddTicketsBatchRequest = AddTicketsBatchRequest;
initializer.AddTicketsBatchResponse = AddTicketsBatchResponse;
initializer.UpdateTicketsStatusRequest = UpdateTicketsStatusRequest;
initializer.UpdateTicketsStatusResponse = UpdateTicketsStatusResponse;
initializer.GetTicketStatusResponse = GetTicketStatusResponse;
initializer.Ticket = Ticket;
initializer.TicketsBatch = TicketsBatch;
initializer.BaseResponse = BaseResponse;

module.exports = initializer;
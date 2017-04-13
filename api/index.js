var ContactModel = require("../model/contacts");
var api = {};

api.createContact = function(req,res){
    var contact = req.body;
    console.log(contact);
    var contactModel = new ContactModel(contact);
    contactModel.save(function(error, contactPersisted){
        if(error ) console.log(error);
        console.log(contactPersisted);
    });
    console.log(ContactModel);
}

api.getContact = function(req,res){
    
res.json({ success : "DEU CERTO"});
    res.end();
}

module.exports = api;
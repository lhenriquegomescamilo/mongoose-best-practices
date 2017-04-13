var ContactModel = require("../model/contacts");
var _ = require("lodash");
var api = {};

api.createContact = function(req,res){
    var contact = req.body;
    console.log(contact);
    var contactModel = new ContactModel(contact);
    contactModel.save(function(error, contactPersisted){
        if(error ) console.log(error);
        console.log(contactPersisted);
        res.status(200);
        res.end();
    });
    console.log(ContactModel);
};

api.getContact = function(req,res){
    ContactModel.find({},function(err, docs){
        res.json(docs);
        res.end();
    });
};

api.getByEmail = function(req,res){
    ContactModel.find({email : req.params.email}, function(error, docs){
       console.log("here");
        res.json(_.head(docs));
        res.end();
    });
};


module.exports = api;
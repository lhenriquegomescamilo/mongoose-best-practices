var api = require("../api");

module.exports = function(app){
    app.route("/v1/contacts")
    .post(api.createContact)
    .get(api.getContact)



    app.route("/v1/conctacts/:conctactId")
    .delete(function(req,res){
        console.log(req.params.contactId);
    });
}
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactsSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  //phone: { type: Phone}
});

var Contact = module.exports = mongoose.model('Contact', ContactsSchema);
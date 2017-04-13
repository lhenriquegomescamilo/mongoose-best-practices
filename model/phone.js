var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhoneSchema = new Schema({
  phoneNumber: { type: String}
});

var Phone = module.exports = mongoose.model('Phone', PhoneSchema);
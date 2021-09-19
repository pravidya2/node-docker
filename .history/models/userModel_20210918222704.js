
var mongoose = require('mongoose');
//Set up default mongoose connection

var Schema = mongoose.Schema;

var userSchema = new Schema({
mongoose.connect(mongoDB, { useNewUrlParser: true });
        a_string: String,
         a_date: Date
});
// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );
var mongoose = require("mongoose");
//Set up default mongoose connection

var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    require: [true, "User must specify email"],
  },
  password: {
    type: String,
    require: [true, "User has to enter a password"],
  },
});
// Compile model from schema
var SomeModel = mongoose.model("SomeModel", SomeModelSchema);

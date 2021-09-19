var mongoose = require("mongoose");
//Set up default mongoose connection

var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    require: [true, "User must specify email"],
    // unique: true,
  },
  password: {
    type: String,
    require: [true, "User must have a password"],
  },
});
// Compile model from schema
var User = mongoose.model("User", userSchema);

module.exports = User;

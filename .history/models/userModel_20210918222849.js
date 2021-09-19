var mongoose = require("mongoose");
//Set up default mongoose connection

var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    require: [true, "User must have title"],
  },
  password: {
    type: String,
    require: [true, "Post must have body"],
  },
});
// Compile model from schema
var SomeModel = mongoose.model("SomeModel", SomeModelSchema);

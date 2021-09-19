var mongoose = require("mongoose");
//Set up default mongoose connection

var Schema = mongoose.Schema;

var userSchema = new Schema({
  title: {
    type: String,
    require: [true, "Post must have title"],
  },
  body: {
    type: String,
    require: [true, "Post must have body"],
  },
});
// Compile model from schema
var SomeModel = mongoose.model("SomeModel", SomeModelSchema);

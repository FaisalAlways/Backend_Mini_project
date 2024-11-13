const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://dev3helpoperation:jLinh8tRSkkY9oAf@cluster0.jqsfv.mongodb.net/miniProject?retryWrites=true&w=majority&appName=Cluster0"
);

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});

module.exports = mongoose.model("user", userSchema);

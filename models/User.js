const { model, schema, Schema, Mongoose } = require("mongoose");

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: new Date(),
});

module.exports = model("User", userSchema);
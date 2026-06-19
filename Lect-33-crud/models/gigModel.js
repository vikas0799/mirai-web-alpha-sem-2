const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    email: String
});

module.exports = mongoose.model("GigModel", gigSchema);

//exporting Student modelk and export in studentController.js, agar controller ko lagega to karenge nahi to nahi

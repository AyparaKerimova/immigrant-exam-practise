const mongoose  = require("mongoose");
const immigrantSchema = require("../schemas/immigrantSchema");

const Immigrant = mongoose.model('immigrants',immigrantSchema);

module.exports = Immigrant;
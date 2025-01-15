const mongoose = require("mongoose");

const immigrantSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    }
});

module.exports = immigrantSchema
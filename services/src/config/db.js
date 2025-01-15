const mongoose = require("mongoose");
require("dotenv").config();
const CONNECT_URI = process.env.MONGO_URI;

function connectToDb() {
    mongoose.connect(CONNECT_URI).then(() => console.log('connected to db')
    ).catch(err => console.log('mongo connect err', err)
    )
}

module.exports= connectToDb;
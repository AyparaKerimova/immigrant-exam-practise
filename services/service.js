require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./src/routes/immigrantRouter");
const connectToDb = require("./src/config/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 5050;
connectToDb();
app.use("/api/immigrants",router)

app.listen(PORT,()=>{
    console.log(`runned in ${PORT}`);
});


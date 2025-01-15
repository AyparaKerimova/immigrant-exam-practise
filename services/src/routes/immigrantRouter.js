const express = require("express");
const router = express.Router();
const {getAll,getOne,deleteOne,post}= require("../controllers/immigrantControllers");

router.get("/",getAll);
router.get("/:id",getOne);
router.delete("/:id",deleteOne);
router.post("/",post);

module.exports=router
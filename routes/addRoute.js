const express=require("express");
const router=express.Router();
const {addCrime} =require("../controllers/addCrime")
router.route("/").put(addCrime);
module.exports=router;
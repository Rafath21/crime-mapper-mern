const express=require("express");
const router=express.Router();
const {getCrime} =require("../controllers/getCrime")
router.route("/").post(getCrime);
module.exports=router;
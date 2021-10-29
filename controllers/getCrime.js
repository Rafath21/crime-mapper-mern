const Crime=require("../models/crimeModel")
exports.getCrime=async(req,res)=>{
    try{
       const crime = await Crime.findOne({district:req.body.dist});
       res.status(200).send(crime)
    }catch(err){
        res.status(400).json({
            Error: err.message
        });
    }
}
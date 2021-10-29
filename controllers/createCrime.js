const Crime=require("../models/crimeModel")
const createCrime=async()=>{
    try{
   await Crime.create({
        district:"RP Secunderabad",
        location:{
             coordinates:[78.7936,17.7480]
        },
    })
    console.log("crime added!")
    }
    catch(err){
        console.log(err);
    }
}

module.exports=createCrime;

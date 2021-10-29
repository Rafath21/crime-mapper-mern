const mongoose=require("mongoose");
const crimeObj={
            Day: Date,
            addedBy:String,
            place:String,
            Details:String
}
const crimeModel=new mongoose.Schema({
    district:{
        type:String,
        required:[true, "District name is required!"]
    },
    location: {
      type:{
          type: String,
           enum: ['Point']
        },
      coordinates: {
      type: Array,
    },
      },
    murders:[crimeObj],
    thefts:[crimeObj],
    burglary:[crimeObj],
    domesticAbuse:[crimeObj],
    kidnapping:[crimeObj],
    assault:[crimeObj],
    riotings:[crimeObj],
})

const Crime=mongoose.model('Crime',crimeModel)
module.exports=Crime;



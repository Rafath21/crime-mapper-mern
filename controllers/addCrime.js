const Crime=require("../models/crimeModel")
exports.addCrime=async(req,res)=>{
    try{
        let {dist,category}=req.body;
function getRandomDate(from, to) {
    const fromTime = from.getTime();
    const toTime = to.getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime));
}
const generateRandomDay = () => {
    const random = getRandomDate(new Date('2020-10-01T01:57:45.271Z'), new Date('2021-10-25T01:57:45.271Z'))
    return random.toISOString();
}
    let day=generateRandomDay()
        if(category=="murders"){
              await Crime.findOneAndUpdate({district:dist},
            {'$addToSet':{
                murders: {
                    'Day':day,
                }
            }},
    )
        }else if(category=="thefts"){
                    await Crime.findOneAndUpdate({district:dist},
            {'$addToSet':{
                thefts: {
                    'Day':day,
                }
            }},
    )

        }else if(category=="riotings"){
                    await Crime.findOneAndUpdate({district:dist},
            {'$addToSet':{
                riotings: {
                    'Day':day,
                }
            }},
    )

        }else if(category=="burglary"){
                    await Crime.findOneAndUpdate({district:dist},
            {'$addToSet':{
                burglary: {
                    'Day':day,
                }
            }},
    )

        }else if(category=="domesticAbuse"){
                    await Crime.findOneAndUpdate({district:dist},
            {'$addToSet':{
                domesticAbuse: {
                    'Day':day,
                }
            }},
    )

        }else if(category=="kidnapping"){
                    await Crime.findOneAndUpdate({district:dist},
            {'$addToSet':{
                kidnapping: {
                    'Day':day,
                }
            }},
    )

        }else{
                    await Crime.findOneAndUpdate({district:dist},
            {'$addToSet':{
                assault: {
                    'Day':day,
                }
            }},
    )

        }
        console.log("Data sent!");
      return  res.status(200).json({response:"data sent!"});
    }catch(err){
        console.log(err);
    }
}


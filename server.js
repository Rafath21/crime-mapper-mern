const express=require("express");
const app=express();
const cors=require("cors");
const PORT=process.env.PORT
const connectDB=require("./config/db");
app.use(express.json())

if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({ path: "./config.env" });
    app.use(cors());

}
connectDB();
//app.use(express.static('public'));
app.use("/api/v1/addCrime",require("./routes/addRoute"));
app.use("/api/v1/getCrime",require("./routes/getRoute"));

app.listen(PORT,()=>{
    console.log("server is listening")
})


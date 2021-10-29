const express=require("express");
const app=express();
require("dotenv").config({ path: "./config.env" });
const cors=require("cors");
const connectDB=require("./config/db");
app.use(express.json())
app.use(cors());
connectDB();
app.use(express.static('public'));
app.use("/addCrime",require("./routes/addRoute"));
app.use("/getCrime",require("./routes/getRoute"));

app.listen(process.env.PORT,()=>{
    console.log("server is listening")
})


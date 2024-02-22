const express=require("express");
const mongoose=require("mongoose");
const cors=require('cors');

const app=express();
app.use(cors())
app.use(express.json())
const model=require("./Movies.js")
mongoose.connect("mongodb://127.0.0.1:27017/Movies_App").then(()=>{
console.log("db connected");
}).catch(()=>{
    console.log("error db not connected");
})


app.post("/signup",(req,res)=>{
    model.create(req.body).then(()=>console.log("data stored"));
    
})

app.listen(8800,()=>{
    console.log("Server is running");
})

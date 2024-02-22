const mongoose=require('mongoose');

const MoviesSchema=new mongoose.Schema({
    name: {
        type:String,
        unique:true,
        
    },
    email: {
        type:String,
        unique:true,
    },
    password: {
        type:String,
        
        
    },
    confirm_password: {
        type:String,
        
    }
})

const MoviesModel=mongoose.model("movies",MoviesSchema)
module.exports=MoviesModel
const mongoose=require('mongoose')


const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
})

const contactUser=mongoose.model("contactUser",contactSchema)

module.exports=contactUser
const {Schema,model}=require("mongoose")



const serviceSchema=new Schema({
    service:{
        type:String,
require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    provider:{
        type:String,
        require:true
    },
})


const serviceModel=new model("Service",serviceSchema)


module.exports=serviceModel
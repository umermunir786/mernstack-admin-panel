const services=require("../models/service-model")

const Service=async(req,res)=>{
    try {
        const service=await services.find()
        console.log("service from model",service)
        if(!service){
            res.status(401).json("services not available")
        }

        res.status(200).json(service)
    } catch (error) {
         res.status(400).json({msg:error})
    }

}





module.exports=Service
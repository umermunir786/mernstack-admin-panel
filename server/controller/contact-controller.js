const contact=require("../models/contact-model")

const contactController = async (req,res)=>{
    try {
   
        const response=req.body
      await contact.create(response)
     return   res.status(200).json({message:req.body,succcess:true})
     console.log(response)
    } catch (error) {
      console.log(error)
      return  res.status(400).json({message:error})
    }

}

module.exports=contactController
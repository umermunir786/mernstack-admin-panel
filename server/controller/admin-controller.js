const user=require("../models/user-model")
const service=require("../models/service-model")
const cont=require("../models/contact-model")


  const Users =async(req,res)=>{
try {

    const users=await user.find().select({password:0})
    res.status(200).json(users)
    
} catch (error) {
    res.status(401).json(error)
}
}
 const Services =async(req,res)=>{
    try {
        const services=await service.find()
        res.status(200).json(services)
    } catch (error) {
        res.status(401).json(error)
    }
    }
     const Contacts =async(req,res)=>{
        try {
            const contacts=await cont.find()
    res.status(200).json(contacts) 
        } catch (error) {
            res.status(401).json(error)
        }
        }

        const GetUserById =async(req,res)=>{
            try {
             const id=req.params.id
             console.log(id)
             const signleUser=   await user.findOne({_id:id}).select({password:0})
                console.log("id user",signleUser)
         res.status(200).json(signleUser) 
            } catch (error) {
                res.status(401).json(error)
                console.log(error)
            }
            }
            const GetServicesById =async(req,res)=>{
                try {
                    const id=req.params.id
                    console.log(id)
                    const services=await service.findOne({_id:id})
                    console.log("signleService",services)
                    res.status(200).json(services)
                } catch (error) {
                    res.status(401).json(error)
                }
               
                }
        const DeleteUserById =async(req,res)=>{
            try {
             const id=req.params.id
                await user.deleteOne({_id:id})
                console.log("all users",user)
         res.status(200).json({msg:id +` deleted successfully`}) 
            } catch (error) {
                res.status(401).json(error)
            }
            }

            const UpdateUserById =async(req,res)=>{
                try {
                 const id=req.params.id
                 const updateBody=req.body
                    await user.updateOne({_id:id},{$set:updateBody})
                    console.log("all users",user)
         return    res.status(200).json({msg:updateBody}) 
                } catch (error) {
                    res.status(401).json(error)
                    console.log("patch error",error)
                }
                }
                const UpdateServicesById =async(req,res)=>{
                    try {
                     const id=req.params.id
                     const updateBody=req.body
                        await service.updateOne({_id:id},{$set:updateBody})
                        console.log("services by id",service)
             return    res.status(200).json({msg:updateBody}) 
                    } catch (error) {
                        res.status(401).json(error)
                        console.log("patch error",error)
                    }
                    }
    
                



        module.exports={Users,Contacts,Services,DeleteUserById,UpdateUserById,GetUserById,GetServicesById,UpdateServicesById}
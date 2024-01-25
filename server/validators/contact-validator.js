const {z, string}=require("zod")


const contactSchema=z.object({
    name:string({required_error:"name must be required"}).trim().min(3,{message:"name must be min 3 characters"}).max(15),
    message:string({required_error:"message must be require"}).min(8,{message:"message must be min 8 characters"}).max(150),
    email:string({required_error:"Email must be required field"}).email().max(255,{message:"email must not be more than 255 characters"}),
   
})

module.exports=contactSchema
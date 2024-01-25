const {z, string}=require("zod")


const signupSchema=z.object({
    name:string({required_error:"name must be required"}).trim().min(3,{message:"name must be min 3 characters"}).max(15),
    password:string({required_error:"password must be require"}).min(8,{message:"password must be min 8 characters"}).max(15),
    email:string({required_error:"Email must be required field"}).email().max(255,{message:"email must not be more than 255 characters"}),
    phone:string({required_error:"phone must be a required field"}).trim().min(11,{message:"phone must be min 11 characters"}).max(13,{message:"phone must be max 13 characters"})
})

const loginSchema=z.object({
    email:string({required_error:"Email must be required field"}).email().max(255,{message:"email must not be more than 255 characters"}),
    password:string({required_error:"password must be require"}).min(8,{message:"password must be min 8 characters"}).max(15),  
})



module.exports={signupSchema,loginSchema}
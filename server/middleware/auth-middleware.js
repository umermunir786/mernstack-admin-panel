const jwt=require("jsonwebtoken")
const user=require("../models/user-model")


const authMiddleware=async(req,res,next)=>{
  const token=req.header("Authorization")
  if(!token){
    return res.status(401).json({msg:"unauthorized http,token not provided"})
 }

 const jwToken=token.replace("Bearer","").trim()
 try {
    const isverified=jwt.verify(jwToken,process.env.JWT_SECRET_KEY)
    
    const userData=await user.findOne({email:isverified.email}).select({password:0})
   req.user=userData
   req.token=jwToken
   req.id=userData.id
    next()
 } catch (error) {
    return res.status(401).json({msg:"unauthorized or invalid token "})
 }
}


module.exports=authMiddleware
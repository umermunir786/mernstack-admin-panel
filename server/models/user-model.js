const mongoose=require("mongoose")
const jwt=require('jsonwebtoken')
const bycrpt=require('bcryptjs')


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
     isAdmin:{
        type:Boolean,
default:false
    },
})

 userSchema.methods.generatedToken=async function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
        },process.env.JWT_SECRET_KEY,
        {expiresIn:"30d"})
      
    } catch (error) {
        console.log(error)
    }
    

}
userSchema.methods.comparePassword=async function(passwords){
    try {
        const match = await bycrpt.compare(passwords, this.password);
    if(match){
return true
    }
    else {
        return false
    } 
    } catch (error) {
        console.log(error)
    }
   

}


const User=new mongoose.model("User",userSchema)


module.exports=User
const User=require('../models/user-model')
const bcrypt=require('bcryptjs')
const home= async (req,res)=>{
    try {
        res.status(200).send("hello welcome to my home page from controler") 
    } catch (error) {
        console.log(error)
    }
}

const register = async (req, res) => {
    try {
     
        const { name, email, password, phone } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }
        const saltRounds=10
        const salt = await bcrypt.genSalt(saltRounds);
        // res.set('Access-Control-Allow-Origin', 'http://localhost:5173');
        // res.send({ "msg": "This has CORS enabled 🎈" })
const hashpassword= await bcrypt.hash(password,salt)
        const userCreated = await User.create({ name, email, password:hashpassword, phone });
        res.status(200).json({ msg: userCreated ,token:await userCreated.generatedToken(),userId:userCreated._id});
     
    } catch (error) {
        console.error(error);
        res.status(400).json({ msg: "Internal Server Error" });
    }
};


const login= async (req,res)=>{
    try {
        const {email,password}=req.body
       const isExist=await User.findOne({email})
       if (!isExist) {
        return res.status(400).json({ message: "User not registered " });
    }
    
    const isValidPassword =await isExist.comparePassword(password)

    if(isValidPassword){
        res.status(200).send({

            message:'Login Successfully',
            token:await isExist.generatedToken(),
            id:isExist._id
        }) 
    }
    else
    {
        res.status(400).send({
           message:'Invalid Passsword or email',
           })  
    }
      
    } catch (error) {
        console.log(error)
    }
}

const user =async(req,res)=>{
   
    // console.log(userData)
    try {
      
            const userData= await req.user
            const token=req.token
         
    return    res.status(401).json({userData,token})
    } catch (error) {
        console.log(`error from the user ${error}`)
    }

}




module.exports={home,register,login,user}
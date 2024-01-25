const express =require('express')
const validate =require('../middleware/validate-middleware')
const authMiddleware =require('../middleware/auth-middleware')
const {signupSchema,loginSchema} =require('../validators/auth-validators')

const router=express.Router()
const {home,register,login,user}=require('../controller/auth-controller')


router.route("/").get(home)
router.route("/user").get(authMiddleware,user)
router.route("/register").post(validate(signupSchema),register)
router.route("/login").post(validate(loginSchema) ,login)





module.exports=router
const express=require('express')
const router=express.Router()
const serviceController=require("../controller/service-controller")



router.route('/').get(serviceController)





module.exports=router









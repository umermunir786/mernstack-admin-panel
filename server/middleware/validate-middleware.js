

const validate=(schema)=>async (req,res,next)=>{
    try {
        const parseBody=await schema.parseAsync(req.body)
        req.body=parseBody
        next()
    } catch (error) {
        console.log(error)
      
        const message=error?.issues[0]?.message
const status=401

const errors={status,message}
      
        next(errors)
    }
}


module.exports=validate
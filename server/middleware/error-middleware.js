const errorMiddleware=(err,req,res,next)=>{
  const status=err.status || 410
  const message=err.message || "Something went wrong"
  const extraDetals=err.extraDetails || "Error from backend"

  return res.status(status).json({message,extraDetals})
}


module.exports=errorMiddleware
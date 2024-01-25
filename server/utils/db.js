const mongoose=require("mongoose")


const URI=process.env.MONGO_URI

// "mongodb+srv://umer:hlBYFRytYuiZ4RVl@cluster0.yc0ejwv.mongodb.net/?retryWrites=true&w=majority"
const  mongoconnect = async ()=>{
try {
   await mongoose.connect(URI)
   console.log("connection successfull")
} catch (error) {
    console.log("database connection fail")
     process.exit(0)
}
}




module.exports=mongoconnect
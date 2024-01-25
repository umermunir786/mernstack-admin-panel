require('dotenv').config()
const express=require('express')
const cors=require('cors')
const app=express()
const authRoute=require('./router/auth-route')
const contactRoute=require('./router/contact-router')
const serviceRoute=require('./router/service-route')
const adminRoute=require('./router/admin-router')
const serviceController=require('./controller/service-controller')
const connectdb=require('./utils/db')
const errorMiddleware = require('./middleware/error-middleware')

var corsOptions = {
    origin: ' http://localhost:5173',
  methods:"GET, POST ,PUT, DELETE, PATCH ,HEAD",
  credentials:true
  }
  app.use(cors(corsOptions))
app.use(express.json())

// Authentication routes
app.use("/api/auth",authRoute)
app.use("/api/auth/login",authRoute)
app.use("/api/auth/register",authRoute)
app.use("/api/auth/user",authRoute)

// Contact routes
 app.use("/api/contact",contactRoute)  

 // Service routes
 app.use("/api/service",serviceRoute)  

//  Admin routes
app.use("/api/admin", adminRoute);



 



app.use(errorMiddleware)
const PORT=5000;
connectdb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is running on port ${PORT}`)
    })
})

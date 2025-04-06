import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


//app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// const cors = require('cors');

  const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, origin);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  }));

  // app.use(cors({
  //   origin: '*',
  //   credentials: true,
  // }));

// db connection  
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API Working succesfully")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
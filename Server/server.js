import express from 'express'
import mongoose from 'mongoose'
import route from './Route/index.js'
import cors from 'cors'
import dotenv from 'dotenv';
import paytm from 'paytmchecksum'
import {v4 as uuid} from 'uuid';
import paymentRoute from './Route/paymentroute.js'


dotenv.config()
const app = express()
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const corsOptions={
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors(corsOptions));
app.use('/',route)
app.use("/api", paymentRoute);
app.get("/api/getkey", (req, res) =>
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
  );
const port = process.env.port||5600;
const URL = process.env.DATABASE 
mongoose.connect(URL)
.then(()=>{
    app.listen(port, ()=>{
        console.log("server running at PORT No", port)
    })}

)
.catch(err=>console.log("Error while connecting with DB", err))

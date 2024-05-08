import mongoose from "mongoose";
const Schema = mongoose.Schema;
const signupSchema = new Schema({
    Firstname:{
        type:String,
        required: true,
        trim: true,
        min:5,
        max:20
    },
    Lastname:{
      type  :String,
      required: true,
      trim: true,
      min:5,
      max:20
    },
    Username:{
        type  :String,
        required: true,    
        trim: true,
        unique:true,
        index:true,
        lowercase:true,
    },
    Email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase: true
    },
    Password:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required: true
    } ,
    razorpay_order_id: {
        type: String,
        required: true,
      },
      razorpay_payment_id: {
        type: String,
        required: true,
      },
      razorpay_signature: {
        type: String,
        required: true,
      },
      products:{
        type: Object
      }  
})
const User = mongoose.model('user',signupSchema)
export default User
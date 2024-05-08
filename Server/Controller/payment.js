// import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../Modal/paymetModel.js";
import User from "../Modal/SignupModel.js";
import dotenv from 'dotenv';
import Razorpay from "razorpay";
dotenv.config()
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
    notes:req.body.notes
  };
  const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature   } = req.body;
  
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    // await Payment.create({
    //   razorpay_order_id,
    //   razorpay_payment_id,
    //   razorpay_signature,
    //   products
    // });

    const updatedValues = {
      razorpay_order_id ,
      razorpay_payment_id ,
      razorpay_signature ,
      
    };
    await User.findOneAndUpdate({"Username":"vikramsingh"}, updatedValues, { new: true });

    res.redirect(
      `http://localhost:3000/payment?razorpay_payment_id=${razorpay_payment_id}`
    );
      
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
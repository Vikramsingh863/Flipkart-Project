import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    url:{
        type:String,
        required: true
    }
})
const ProductModel = mongoose.model('ProductData',ProductSchema,'Products')
export default ProductModel
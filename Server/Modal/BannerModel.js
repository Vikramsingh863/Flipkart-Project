import mongoose from "mongoose";
const Schema = mongoose.Schema;
const BannerSchema = new Schema({
    url:{
        type:String,
        required: true
    }
})
const BannerModel = mongoose.model('BannerData',BannerSchema,'Banner')
export default BannerModel
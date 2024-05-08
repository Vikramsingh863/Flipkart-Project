import mongoose from "mongoose";
const Schema = mongoose.Schema;
const navBar = new Schema({
    url:{
        type:String,
        required: true
    }
})
const navBarModel = mongoose.model('navBarData',navBar,'navigation')
export default navBarModel

import BannerModel from "../Modal/BannerModel.js"
export default function getBanner(req,res){
BannerModel.find()
.then(response => {
    res.status(200).json({
        message: "Location Fetched Successfully",
        Banner: response
    })
})
.catch(err => {
    res.status(500).json({ error: err })
})
}
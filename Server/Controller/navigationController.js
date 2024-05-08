
import navBarModel from "../Modal/NavBarModel.js";
export default function getNavigation(req,res){
navBarModel.find()
.then(response => {
    res.status(200).json({
        message: "Location Fetched Successfully",
        navigation: response
    })
})
.catch(err => {
    res.status(500).json({ error: err })
})
}
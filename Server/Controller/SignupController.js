

import User from "../Modal/SignupModel.js";
export async function getSignup(req, res) {
    try {
        const exist = await User.findOne({ Username: req.body.Username })
        if (exist) {
            return res.status(401).json({ message: 'username already exist' })
        }
        else {
            const user = req.body;
            const newUser = new User(user);
            await newUser.save();
            
            res.status(200).json({ message: req.body});
        }
    }
    catch (error) {
        res.status(500).json({ message: "error 500" })

    }

}

export async function getLogin(req, res) {
    try {
        const Object = await User.findOne({ Username: req.body.Username,Password:req.body.Password })
        if(Object)
            res.status(200).json({ message: "matched",
        data: Object});
        else{
            res.status(200).json({ err: "username invalid"});
        }
    }
    catch (error) {
        res.status(500).json({ message: "error 500" })

    }

}
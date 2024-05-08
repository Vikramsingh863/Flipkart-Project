import axios from "axios";
const URL = "https://flipkart-project-f1l9.onrender.com"

export const authenticateSignup = async (data) => {
    try {
       return await axios.post(`${URL}/signup`, data);


    } catch (err) {
        console.log('error while callling signup api', err)

    }

}

export const authenticateLogin = async (data) => {
    try {
       return await axios.post(`${URL}/login`, data);


    } catch (err) {
        console.log('error while callling signup api', err)

    }

}

export const payUsingPaytm=async (data)=>{
    try {
        await axios.post(`${URL}/payment`, data)
        return Response.data;
    } catch (error) {
        console.log('Error while calling apyment api',error)
    }
}
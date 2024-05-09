import axios from "axios";

export const authenticateSignup = async (data) => {
    try {
       return await axios.post("https://flipkart-project-f1l9.onrender.com/signup", data);


    } catch (err) {
        console.log('error while callling signup api', err)

    }

}

export const authenticateLogin = async (data) => {
    try {
       return await axios.post("https://flipkart-project-f1l9.onrender.com/login", data);


    } catch (err) {
        console.log('error while callling signup api', err)

    }

}

export const payUsingPaytm=async (data)=>{
    try {
        await axios.post('https://flipkart-project-f1l9.onrender.com/navigation/payment', data)
        return Response.data;
    } catch (error) {
        console.log('Error while calling apyment api',error)
    }
}
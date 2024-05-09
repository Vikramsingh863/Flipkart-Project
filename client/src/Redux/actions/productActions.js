import axios from "axios"
import * as actionTypes from "../constants/productConstant";

export const getProducts=()=>async(dispatch)=>{  const URL = "https://flipkart-project-f1l9.onrender.com";
    try {
        const {data} = await axios.get(`${URL}/products`)
        
        dispatch({type:actionTypes.GET_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
      dispatch({type:actionTypes.GET_PRODUCT_Fail, payload: error.message})  
    }
}

export const getProductsDetails=(id)=>async(dispatch)=>{  
  const URL = "https://flipkart-project-f1l9.onrender.com";
    try {
      dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST});
        const {data} = await axios.get(`${URL}/product/${id}`)
        
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS,payload:data})
    } 
    catch (error) {
      dispatch({type:actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message})  
    }
}
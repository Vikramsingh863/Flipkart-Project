// import axios from 'axios'
// import * as actionType from '../constants/cardConstant'


// export const AddToCart=(id, quantity)=>async(dispatch)=>{
//     const URL = "http://localhost:5600"
//     try { 
//       const {data} = await axios.get(`${URL}/product/${id}`)
//       dispatch({type:actionType.ADD_TO_CART, payload: {...data, quantity}})
//     } catch (error) {
//         dispatch({type:actionType.ADD_TO_CART_ERROR, payload: error.message})
//     }
// }

// export const  removeFromCart =(id)=>(dispatch)=>{
//     dispatch({type:actionType.REMOVE_FROM_CART, payload:id});
    
// }


import * as actionTypes from '../constants/cardConstant';
import axios from 'axios';

export const AddToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`https://flipkart-project-f1l9.onrender.com/product/${id}`);
        
        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data[0], quantity } });

    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

};
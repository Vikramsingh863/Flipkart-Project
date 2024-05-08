

import * as actionTypes from '../constants/cardConstant';
import axios from 'axios';
const URL ='https://flipkart-project-f1l9.onrender.com'
export const AddToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`${URL}/product/${id}`);
        
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
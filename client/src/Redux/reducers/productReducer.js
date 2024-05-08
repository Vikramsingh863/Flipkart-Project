
import * as actionTypes from "../constants/productConstant";


export const getProductsReducer=(state={products:[]}, action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCT_SUCCESS:
            return {products: action.payload}
        case actionTypes.GET_PRODUCT_Fail:
        return {error: action.payload}
        default: return state
    }
}

export const getProductsDetailsReducer=(state={product:{}}, action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {loading: true}
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
        return {loading:false, product:action.payload}
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {loading:false, err:action.payload}
            case actionTypes.GET_PRODUCT_DETAILS_RESET  :
                return {product:{}}
            default:
                return state
    }
}
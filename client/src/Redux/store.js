import {createStore , combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { getProductsDetailsReducer } from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';

import {thunk} from 'redux-thunk';
import { getProductsReducer } from './reducers/productReducer';
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductsDetailsReducer,
    cart:cartReducer
})
const middleware =[thunk];

const store = createStore(
    reducer,composeWithDevTools(applyMiddleware(...middleware))
)

export default store
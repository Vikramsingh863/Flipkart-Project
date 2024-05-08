import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import { Box } from '@mui/material'
import DataProvider from "./context/DataProvider";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DetailView from "./Component/Details/DetailView";
import Cart from "./Component/cart/cart";
import Payment from './Component/payment/payment.jsx'
function Apps() {
    return (
        
        <DataProvider>
            <BrowserRouter>
            <Header/>
            <Box style={{marginTop:54}}>
            <Routes>
                <Route path= "/" element={<Home/>}/>
                <Route path= "/product/:id" element={<DetailView/>}/>
                <Route path= "/cart" element={<Cart/>}/>  
                <Route path= "/payment" element={<Payment/>}/>  
            </Routes>
            </Box>
            </BrowserRouter>
        </DataProvider>
        
    )
}
export default Apps
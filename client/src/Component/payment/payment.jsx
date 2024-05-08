import { Box, Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const razorpay_payment_id = params.get("razorpay_payment_id");

const Payment=()=>{
    return(
        <>
        <Link to="/">Go to home</Link>
        <div> payment success your order ID is : <b>{razorpay_payment_id}</b> </div>



        </>
    )
}
export default Payment
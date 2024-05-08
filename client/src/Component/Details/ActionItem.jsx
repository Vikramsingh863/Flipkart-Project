import { Button, Box, styled } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import { AddToCart } from '../../Redux/actions/cartAction';
import axios from 'axios';
import { Datacontext } from "../../context/DataProvider"
const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;


const ActionItem = ({ product }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logedUser = useContext(Datacontext)
    // const [cartDetail] =useSelector(state=> state.Cart)
console.log(product.id, logedUser)

    const [quantity, setQuantity] = useState(1)
    //     useEffect(()=>{

    // },[dispatch])

    const { id } = product;



    const addToCart = () => {
        dispatch(AddToCart(id, quantity))
        navigate('/cart')
    }


    const checkoutHandler = async (amount, product, logedUser) => {

        const { data: { key } } = await axios.get("http://www.localhost:5600/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:5600/api/checkout", {
            amount,  notes: {
                product,
                logedUser
            }
            
        })
        console.log(order)
        const options = {
            key: key,
            amount: order.amount,
            currency: "INR",
            name: "Vikram Singh",
            
            notes: {
                "products": order.product,
                "logedUser": order.logedUser
            },
            theme: {
                "color": "#121212"
            },
            image: "https://avatars.githubusercontent.com/u/148927618?v=4",
            order_id: order.id,
            callback_url: "http://localhost:5600/api/paymentverification",


            theme: {
                "color": "#2874f0"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }


    return (
        <LeftContainer>
            <Image src={product.detailUrl} /><br />

            <StyledButton style={{ marginRight: 10, background: '#ff9f00' }} variant="contained" onClick={addToCart}>


                <Cart />Add to Cart</StyledButton>
            <StyledButton style={{ background: '#fb641b' }} variant="contained" onClick={() => checkoutHandler(product.price.cost, product.id, logedUser.account)} ><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;
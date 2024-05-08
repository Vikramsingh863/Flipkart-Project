import { Typography, Grid, Box, styled, Button,  } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./emptyCard";
import axios from "axios";
import { removeFromCart } from "../../Redux/actions/cartAction";


const Cart = () => {
    const cartItem = useSelector(state => state.cart.cartItems)
    
    const dispatch = useDispatch()
    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id))
    }

    const currentURL = window.location.href;
    const url = new URL(currentURL);
    const logedUser = url.searchParams.get('logedUser');
    console.log(logedUser);



    const Component = styled(Grid)(({ theme }) => ({
        padding: '30px 135px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 0'
        }
    }));
    
    const LeftComponent = styled(Grid)(({ theme }) => ({
        paddingRight: 15,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 15
        }
    }));
    
    const Header = styled(Box)`
        padding: 15px 24px;
        background: #fff;
    `;
    
    const BottomWrapper = styled(Box)`
        padding: 16px 22px;
        background: #fff;
        box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
        border-top: 1px solid #f0f0f0;
    `;
    
    const StyledButton = styled(Button)`
        display: flex;
        margin-left: auto;
        background: #fb641b;
        color: #fff;
        border-radius: 2px;
        width: 250px;
        height: 51px;
    `
    const checkoutHandler = async (amount) => {
        const URL ="flipkart-project-f1l9.onrender.com"
        const { data: { key } } = await axios.get(`${URL}/api/getkey`)

        const { data: { order } } = await axios.post(`${URL}/api/checkout`, {
            amount,  notes: {
                
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
            callback_url: `${URL}/api/paymentverification`,


            theme: {
                "color": "#2874f0"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
    
    return (
        
        <>
        { cartItem.length ? 
            <Component container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItem?.length})</Typography>
                    </Header>
                        {  cartItem&& cartItem.map(item => (
                                <Box>
                                    
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                                </Box>
                            ))
                        }
                    <BottomWrapper>
                        <StyledButton  variant="contained" onClick={() => checkoutHandler(100)}  >Place Order</StyledButton>
                    </BottomWrapper>
                </LeftComponent>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItem} />
                </Grid>
            </Component> : <EmptyCart />
        }
 
        </>
    )
}
export default Cart;
import { Box, Button,Badge, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../Login/LoginDialog";
import { useState, useContext } from "react";
import { Datacontext } from "../../context/DataProvider";
import Profile from "./profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from '@mui/icons-material';
// const Wrapper = styled(Box)`
// display:flex;
// margin:0 3% 0 auto;
// & > button, &>p, &>div{ margin-right:40px;
// font-size:16px;
// align-item:center;}
// &>button{
//     background-color:white;
//     color: #2874f0;
//     text-weight:500;
//     textTransform:"none";
//     font-weight:500;
//     border-radius:2px;
//     box-shadow:none;
//     height:32px;
// }
// `

const Wrapper = styled(Box)(({theme})=>({
display:'flex',
margin:' auto',
justifyContent:'center',

'&>button, &>p, &>div':{ 
marginRight:'30px',
fontSize:'16px',
alignItem:'center'},
[theme.breakpoints.down('sm')]:{
    marginTop:'5px',
    display:'block',
    

},
'&>button':{
    backgroundColor:'white',
    color: '#2874f0',
    textWeight:'500',
    textTransform:"none",
    fontWeight:500,
    borderRadius:'2px',
    boxShadow:'none',
    height:'32px',
    margin: '5px 30px'
},
[theme.breakpoints.down('md')]: {
    '& > button, & > p, & > div': {
      marginRight: '10px',
    },
  }
}))

export default function CusstomButtons() {
    const Item = useSelector(state=>state.cart.cartItems)
    const [Open, setOpen]= useState(false);
    const {account, setAccount} = useContext(Datacontext);
    
const loginform=()=>{
    
    setOpen(true)
}
    return (
        <Wrapper >
            {
                account ? <Profile account={account} setAccount={setAccount}/>:
                <Button variant="contained" onClick={()=>loginform()} > Login</Button>
            }
            
            <Typography className="mt-2 ">Become a Salar</Typography>
            <Typography className="mt-2">More</Typography>
            <Link to="/cart" style={{textDecoration:"none", color:'inherit '}}>
            <Box className="d-flex mt-2 " >
                
                <Badge badgeContent={Item?.length} color="secondary">
                <ShoppingCartIcon />
                </Badge>
                <Typography className="mx-2" >Cart</Typography>
            </Box>
            </Link>
            <LoginDialog Open={Open} setOpen={setOpen}/>

        </Wrapper>
    )
}
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getProducts, getProductsDetails } from "../../Redux/actions/productActions";
import { styled, Box, Typography, Grid } from "@mui/material";
import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';
import { BorderAll } from "@mui/icons-material";
export default function DetailView() {
    
    const { id } = useParams()
    
    //     const dispatch = useDispatch();
    //     useEffect(()=>{
    //         dispatch(getProducts());
    //     },[dispatch])

    // const [productById, setProduct]= useState()  ;  
    // useEffect(() => {
    //     // Find the product with the matching id
    //     const foundProduct = products.find(product => product.id === id);
    //     // Update the state with the found product
    //     setProduct(foundProduct);
    // }, [id, products]);

    const Component = styled(Box)(({theme})=>({
        marginTop: '55px',
        background: '#F2F2F2',
        
        // [theme.breakpoints.down('lg')]:{
        //     '&>*':{
        //     alignItem:'center',
        //     justfiyContent:'center',
        //     display:'flex',
        //     backgroundColor:'black'
        //     }
            
            
            
        // }
    }))
    

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        
        padding:'10px',
        
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

    const dispatch = useDispatch();
    
    const {loading , product} = useSelector(state => state.getProductDetails)
    
        

    useEffect(() => {
        dispatch(getProductsDetails(id))
    }, [dispatch, id ])

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    
    return (
        // <Box>
            
        //     {product &&product.length > 0&&
        //         <Box>
        //             <Box>

        //             </Box>
        //             <Box>
        //                 <Typography>{product[0].url}ddd</Typography>
        //                 <div>vikram signh </div>
        //             </Box>
        //         </Box>
        //     }

            
        // </Box>
        <Component>
            <Box></Box>
            { product && Object.keys(product).length &&
                <Container container> 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product[0]} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product[0].title.longTitle}</Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product[0].price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product[0].price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product[0].price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product[0]} />
                    </RightContainer>
                </Container>
            }   
        </Component>

    )
}
import NavBar from "./Navbar"
import Banner from './Banner.jsx';
import { Fragment } from "react";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { getProducts } from "../../Redux/actions/productActions.js";
import {useDispatch, useSelector} from 'react-redux';
import Slide from "./slide.jsx";
import MidlSlide from "./Midslide.jsx";
import MidSection from './Midsection.jsx'


const Container = styled(Box)
`   padding: 10px;
    background:#F2F2F2;
`




export default function Home() {
  const {products} = useSelector(state=>state.getProducts)
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])
    
    return (
        <Fragment>
            <NavBar />
            <Container>
                <Banner />
                <MidlSlide products={products}/>
                <MidSection/>
                <Slide products={products} title="Discounts for you" timer={false}/>
                
                <Slide products={products} title="Suggesting Items" timer={false}/>
                <Slide products={products} title="Top Selections" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
            </Container>
            
        </Fragment>
    )
}
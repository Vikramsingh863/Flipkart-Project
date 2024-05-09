import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Box, Typography, styled } from '@mui/material'
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Image = styled('img')(({theme})=>({
    width: '100%',
    height: 280,
    [theme.breakpoints.down('md')]:{
        height:180,
        objectFit:'cover'
    }
}))





export default function Banner() {

    const [banner, setBanner] = useState();
    useEffect(() => {
        axios({
            url: 'https://flipkart-project-f1l9.onrender.com/banner',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                setBanner(response.data.Banner)
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, [])
console.log(banner)
    return (
        <div>

            {
                banner && <Carousel responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    infinite={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    autoPlay={true}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    containerClass="carousel-container">

                    {banner.map(data => (
                        <Image src={data.url} alt="banner" />
                    ))
                    }
                </Carousel>
            }

        </div>
    )

}
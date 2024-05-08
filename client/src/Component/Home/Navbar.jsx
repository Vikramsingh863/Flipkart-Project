import axios from 'axios'
import { Box, Typography, styled } from '@mui/material'
import React, { useState, useEffect } from 'react';

const Component = styled(Box)(({theme})=>({
    margin: '55px 130px 0 130px',
justifyContent:'space-between',
    [theme.breakpoints.down('lg')]:{
        margin:'10px',
        overflow: 'overlay'
        
    }
}))


const Text = styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family:inherit;
`
export default function NavBar() {
    
    const [nav, setNav] = useState();
    useEffect(() => {
        axios({
            url: 'http://localhost:5600/navigation',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                setNav(response.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])


    return (
        <Component className="d-flex">


            {nav && nav.navigation.map(data => (
                <Box className="px-0 py-4 text-center">
                    <img src={data.url} alt="" width={64} />
                    <Text>{data.text}</Text>
                </Box>
            ))
            }
            
                  </Component>
            
    )
}

// export default function NavBar() {
//     const [nav, setNav] = useState();

//     useEffect(() => {
//         axios({
//             url: 'http://localhost:5600',
//             method: 'GET',
//             headers: { 'Content-Type': 'application/json' }
//         })
//         .then(response => {
//             setNav(response.data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     }, []);

//     // Only render if nav has been loaded
//     if (!nav) {
//         return <Box>Loading...</Box>;
//     }

//     console.log(nav.navigation[0].url);

//     return (
//         <Box>
//             {/* Render your navigation here */}
//         </Box>
//     );
// }

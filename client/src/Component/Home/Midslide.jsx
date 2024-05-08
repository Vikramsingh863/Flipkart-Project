import { Box } from "@mui/material"
import Slide from "./slide"
import { styled } from "@mui/material"
const Component = styled(Box)
    `display: flex;
`
const LeftComponent = styled(Box)(({theme})=>({
    width:'83%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}))


const RightComponent = styled(Box)(({theme})=>({
backgroundColor:'#FFFF',
padding: '5px',
marginTop:'10px',
marginLeft:'10px',
width:'17%',
textAlign:'center',
[theme.breakpoints.down('md')]:{
    display:'none'
}
}))


export default function MidlSlide({ products }) {
    return (
        <Component>
            <LeftComponent>
                <Slide products={products} title="Deal of the Day " timer={true} />
            </LeftComponent>
            <RightComponent>
                <img src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70" alt="" width={"217"}  />
            </RightComponent>
        </Component >
    )
}
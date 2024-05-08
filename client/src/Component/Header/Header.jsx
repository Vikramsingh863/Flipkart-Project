import { useState } from 'react';
import { AppBar, Toolbar, styled, Box, Typography, Drawer,List, ListItem } from '@mui/material'
import Search from './Search';
import CusstomButtons from './CustomButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
const StyledHeaders = styled(AppBar)`background:#2874f0`;
const SubHeading = styled(Typography)`
font-size:10px;
font-style:italic`
const Component = styled(Link)(({ theme }) => ({
    marginLeft: '10%',
    lineHeight: 0,
    color: 'inhert',
    [theme.breakpoints.down('md')]: {
        margin: 'auto'

    },


}))

const CusstomButtonsWrapper = styled(Box)(({ theme }) => (
    {
        [theme.breakpoints.down('sm')]: {


            display: 'none',

        }
    }
))

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: '4px'
})
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        color: 'inherit',
        display:'block'
        
    }
})) 


export default function Header() {
    const products = useSelector(state=>state.getProducts.products)
    
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const list = () => (
        <Box style={{width:200}} >
            <List >
                <ListItem button > <CusstomButtons/>
                </ListItem>
            </List>
        </Box>
    )
    return (
        <StyledHeaders>
            <Toolbar style={{ minHeight: "55px", justifyContent:"space-between" }}>
                <MenuButton aria-label="delete" onClick={handleOpen}>
                    <MenuIcon />

                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                    

                </Drawer>
                <Component to='/' style={{ textDecoration: 'none' }}>
                    <img src="./flipkart-plus.png" alt="Flipkart" width={75} />

                    <SubHeading style={{ display: 'flex' }}>Explore &nbsp;
                        <Box component='span' style={{ color: 'yellow', }}>Plus</Box>
                        <PlusImage src="./sublogo.png" alt="Flipkart" width={75} />
                    </SubHeading>

                </Component>
                <Search products={products}/>
                <CusstomButtonsWrapper>
                    <CusstomButtons />
                </CusstomButtonsWrapper>
            </Toolbar>
        </StyledHeaders>
    )
}

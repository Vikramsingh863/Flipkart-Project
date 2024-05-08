import { InputBase, Box, styled, IconButton, ListItem, List } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../Redux/actions/productActions";
import { Height } from "@mui/icons-material";

const SearchComponent = styled(Box)`
background:white;
width:35%;
border-radius:2px;
margin-left:10px;
`
const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%
`

export default function Search({ products }) {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

    const [searchValue, setSearchValue] = useState()
    // const [display, setDisplay]= useState('none') 
    const getText = (value) => {
        setSearchValue(value)
        
    }
    const navigation = useNavigate()
    const navigateto = (a) => {
        setSearchValue(null)
        navigation(`/product/${a}`)
    }
    const SearchBar = styled(List)(({theme})=>({
        position:'absolute',
    
    top:'100%',
    backgroundColor:'#ffff',
    borderRadius:'2px',
    color:'black',
    marginTop:'5px',
    
    width:'100%',
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        Height:'50vh',

        
    }
    
    }))

    const SearchResult = styled(List)({
        cursor:'pointer',
    ":hover":{
        color:'blue',
        
    }
    })

    // const {products} = useSelector(state=>state.getProducts)
    // const array = products.map(a=>a.title.shortTitle)

    return (
        <SearchComponent className="d-flex p-1 rounded  " style={{position:"relative"}}>


            <InputSearchBase placeholder="Search for products, brands and more" onChange={(e) => getText(e.target.value)} value={searchValue} />
            <Box className="text-primary m-1">
                <SearchIcon className="d-flex" />
            </Box>
            {
               searchValue&& 
            <SearchBar>
                    {searchValue && products.length > 0 &&
                        products.filter(match => match.title.longTitle.toLowerCase().includes(searchValue.toLowerCase())).map(product => (
                            <SearchResult onClick={() => navigateto(product.id)}>
                                {product.title.longTitle}
                                <hr/>
                            </SearchResult>
                        ))

                    }
            </SearchBar>
            
            
}
        </SearchComponent>
    )
}
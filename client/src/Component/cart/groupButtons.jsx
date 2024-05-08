import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup, Button, styled } from "@mui/material";


const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;



const GroupeButton = ({item}) => {
    const dispatch = useDispatch()
    const[quantity, setQuantity]= useState(1)
    const Decrease=()=>{
        quantity>1?
        setQuantity(quantity=>quantity-1):
        setQuantity(quantity)
    }
    
    const Increase=()=>{
        setQuantity(quantity=>quantity+1)
       
    }

    
    return (
        <Component>
            <StyledButton onClick={Decrease}>-</StyledButton>
            <Button disabled></Button>
            <StyledButton onClick={Increase}>+</StyledButton>
        </Component>
        
    );
}

export default GroupeButton;
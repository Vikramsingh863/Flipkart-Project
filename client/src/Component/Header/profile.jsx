import { Box, Typography,styled } from "@mui/material"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);
    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const logout = () => {
        setAccount('');
    }
    
    const Component = styled(Menu)`
    margin-top:5px;
`
    const Logout = styled(Typography)`
    font-size:14px
    margin-left:20px
    `
    return (
        <>
            <Box>
                <Typography style={{ marginTop: 2, cursor:'pointer' }} onClick={handleClick}>{account}

                </Typography></Box>
            <Component

                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={()=>{handleClose(); logout();}} >
                <PowerSettingsNewIcon color="primary" fontSize="small"></PowerSettingsNewIcon>
                    <Logout >Logout </Logout>
                </MenuItem>
            </Component>

        </>
    )
}
export default Profile
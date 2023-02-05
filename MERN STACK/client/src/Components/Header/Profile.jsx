import { useState } from "react";
import { Typography,Box,Menu,MenuItem } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const Profile = ({account,toogleAccount}) =>{
    let [open, setOpen] = useState(false)

    const handleClick = (event) =>{
         setOpen(event.currentTarget);
    }

    const handleClose = () =>{
         setOpen(false);
    }

    const logoutuser = () =>{
        toogleAccount("");
    }
    return(
        <>
            <Box ><Typography onClick={handleClick} style={{marginTop:3,cursur:"pointwer"}}>{account}</Typography></Box> 
                <Menu
                    anchorEl={open}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={()=>{handleClose(); logoutuser();}}>
                        <PowerSettingsNewIcon color="primary" fontSize="small"/>
                        <Typography style={{marginLeft:15}}>Logout</Typography>
                    </MenuItem>
                </Menu>
        </>
    )
}

export default Profile;
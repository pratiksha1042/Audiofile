import { AppBar , Toolbar , styled } from "@mui/material"
import { NavLink } from "react-router-dom"
import audiophile from '../img/audiophile.png';
import './css/navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Tabs = styled(NavLink)`
    font-size : 15px;
    margin-right : 20px;
    color : white !important;
    text-decoration : none;
    &:focus, &:active {
        color:orange !important;
    }
    `

const Appbar = styled(AppBar)`
   padding-top : 20px;
   background : black; 
   position : sticky;
   padding-left : 15px;
   padding-right :15px;
   padding-bottom : 10px;
`
function NavBar () {
    return(
        <Appbar sx={{borderBottom: 0.5 , borderColor: 'grey.500'}}>
            <Toolbar>
            <Tabs sx={{ flexGrow:0.8}}><img src={audiophile} width="200" height="33" alt="audiphile"/></Tabs>
            <div className = "options" >
                <Tabs sx={{ pb : 2 }} to ='/'>HOME</Tabs>
                <Tabs sx={{ pb : 2 }} to ='/headphones '>HEADPHONES</Tabs>
                <Tabs sx={{ pb : 2 }} to ='/speakers '>SPEAKERS</Tabs>
                <Tabs sx={{ pb : 2 }} to ='/earphones '>EARPHONES</Tabs>
            </div>
                <Tabs sx={{flexGrow:1}} />
                <Tabs sx={{ pb : 2 , }} to ='/cart'><ShoppingCartIcon />  </Tabs>
            </Toolbar>
        </Appbar>
    );
}

export default NavBar;
import { BrowserRouter , Routes , Route ,NavLink} from "react-router-dom";
import audiophile from '../img/audiophile.png';
import './css/bottombar.css';
import {styled,} from '@mui/material';
import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import bottombar from '../Data/bottombar.json'


const Tabs = styled(NavLink)`
    font-size : 15px;
    margin-right : 20px;
    color:white !important;
    text-decoration : none;
    &:focus, &:active {
        color:orange !important;
    }
    `
    const Para = styled('p')`
    font-size : 15px;
    margin-right : 20px;
    color : secondary;
    `

function Bottombar () {
    const[bottombarData,]=useState(bottombar);
    return(
        <>
        <div className='main'>
            <div className='div1'>
                <img src={audiophile} width="200" height="33"/>
            </div>
            <div className='div2'>
            <BrowserRouter>
                <Tabs to="/">HOME</Tabs>
                <Tabs to="/headphones">HEADPHONES</Tabs>
                <Tabs to="/earphones">EARPHONES</Tabs>
                <Tabs to="/speakers">SPEAKERS</Tabs>
                <Routes>
                    <Route path='/' />
                        <Route path='/headphones'/>
                        <Route path='/speakers' />
                        <Route path='/earphones' />
                </Routes>   
            </BrowserRouter>
            </div>
        </div>

        <div className="main_2">
            <div className = "div1">
                <p className="Info">{bottombarData.items[0].info}</p>
                <p className="copyright">{bottombarData.items[0].copyright}</p> 
            </div> 
            <div className = "div2">
                <FacebookIcon  color = "white" sx={{ fontSize: 30 }}/>
                <TwitterIcon  color = "white" sx={{ fontSize: 30 }}/>
                <InstagramIcon  color = "white" sx={{ fontSize: 30 }}/>
            </div> 
        </div> 
        </>     
        );
    }

export default Bottombar;




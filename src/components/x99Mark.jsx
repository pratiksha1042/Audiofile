import './css/x99Mark.css';
import image from '../img/image.png';
import headphones from '../img/headphones.png';
import image2 from '../img/earphones.webp';
import image3 from '../img/speakers.webp';
import  Headerphone from '../img/Headerphone.webp';
import speakers from '../img/speakers.webp'
import deskspeaker from '../img/speaker_desk.jpg'
import earbud from '../img/earbuds.jpg';
import home from '../Data/home.json';
import { useState } from 'react';

function X99() {
  const[homeData,]=useState(home);
  return (
    <>
    <div className="X99" >
      <div className="Info">
      <p className='Info_head'>{homeData.items[0].info_head}</p>
      <h1> {homeData.items[0].name}</h1>
      <p className='Info_body'>{homeData.items[0].info_body}</p>
      <button>see product </button>
      </div>
      <div className="img1">
        <img src={image}  width = "600px" height = "550px" alt="audiphile"/>
      </div>
    </div>
      
      <div className="MainClass">
             {/*this is the headphone div */}
            <div className="container-1">
                <img src={headphones} alt="" className="image-1"/>
                <h4 className="text-1">HEADPHONES</h4>
                <p className="shop-1"><a href="https://google.com" target="_blank" rel="noreferrer">SHOP&nbsp;&nbsp;&gt;</a></p>
            </div>

            {/*this is the earphones jsx */}
            <div className="container-2">
                <img src={image2} alt="" className="image-2"/>
                <h4 className="text-2">EARPHONES</h4>
                <p className="shop-2"><a href="https://google.com" target="_blank" rel="noreferrer">SHOP&nbsp;&nbsp;&gt;</a></p>
            </div>

            {/*this is the speaker jsx */}
            <div className="container-3">
                <img src={image3} alt="" className="image-3"/>
                <h4 className="text-3">SPEAKERS</h4>
                <p className="shop-3"><a href="https://google.com" target="_blank" rel="noreferrer">SHOP&nbsp;&nbsp;&gt;</a></p>
            </div>

        </div>

        <div className='panel3'>

        <div className="panel3-1">
                <div className="left-div">
                    <img className="img1-dim" src={speakers} alt="earphones"></img>
                </div>
                <div className="right-div">
                    <h3 className="heading" >{homeData.items[1].name1}<br></br>{homeData.items[1].name2}</h3>
                    <p className="paragraph">{homeData.items[1].info_body1} <br></br> {homeData.items[1].info_body2} <br></br>{homeData.items[1].info_body3}</p>
                    <button className="button">
                        <b> SEE PRODUCT </b>
                    </button>
                </div>
            </div>

            <div className="panel3-2">
                <div>
                    <img className="img2-dim" src={deskspeaker} alt="speaker"></img>
                    <h2 className="heading-2">ZX7 SPEAKER</h2>
                    <button className="button-2"><b> SEE PRODUCT </b></button>
                    
                </div>    
            </div>

            <div className="panel3-3">
                <div>
                    <img className="img3-dim" src={earbud} alt="bluetooth"></img>
                </div>
                <div className= "right-div-3">
                    <h3 className="heading-3">YX1 EARPHONES</h3>
                    <button className="button-3"><b> SEE PRODUCT </b></button>
                </div>
            </div>
          </div>

        <div-5>
                <leftdiv5>
                  <leftheader>
                    <h1>{homeData.items[2].info_head1}</h1>
                    <h1><span>{homeData.items[2].info_head2}</span> {homeData.items[2].info_head3}</h1> 
                  </leftheader>
                     
                    <p>{homeData.items[2].info_body}</p>  
                </leftdiv5>
                <rightdiv5>
                <img src={Headerphone} className="headephone" alt="A man listening to music with headphone"></img>
                </rightdiv5>
        </div-5>


      </>
  );
}

export default X99;

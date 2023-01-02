import React , { useState } from "react";
import  Headerphone from '../img/Headerphone.webp';
import blackheadephone from '../img/blackheadephone.webp';
import div3image1 from '../img/div3image1.png';
import div3image2 from '../img/div3image2.png';
import div3image3 from '../img/div3image3.png';
import logo1 from '../img/headphones.png';
import logo2 from '../img/image2.jpg';
import logo3 from '../img/speakers.webp';
import headphones from '../img/headphones.png';
import image2 from '../img/earphones.webp';
import image3 from '../img/speakers.webp';
import './css/Headphone.css';
import product from '../Data/product.json';
import headphone from '../Data/headphone.json';

function Panel4(){
    const[count,setcount]=useState(0);
    const[headphoneData,]=useState(headphone);
    function incrementCount(){
        setcount(count+1)
      };
      function decrementCount() {
        if(count >0){
            setcount(count-1)
        }
      };

      const[productData]=useState(product);
      function cart()
      {
            productData.items[0].count+=count;
      };

    return(
        <>
           
            <div1>
                <leftdiv1>
                    <img src={blackheadephone} className="headephone" alt="no img"></img>
                </leftdiv1>
                <rightdiv1>
                    <p className="pclass">NEW PRODUCT</p>
                    <h1>{headphone.items[0].Name1}</h1>
                    <h1> {headphone.items[0].Name2}</h1>
                    <p className="pclass2">{headphone.items[0].body}
                    </p>
                    <h2 className="doller">{headphone.items[0].price}</h2>
                    <button className="button1" onClick={decrementCount}>-</button>
                    <button className="button1" >{count}</button>
                    <button className="button1" onClick={incrementCount}>+</button>
                    <button className="button2" onClick={cart}>ADD TO CART</button>
                </rightdiv1>
                
            </div1>
            <div2>
            <leftdiv2>
                    <h2 className="div2header">{headphone.items[1].name}</h2>
                    <p className="pclass2">{headphone.items[1].body1}
                        
                    </p>
                    <br/>
                    <p>
                        {headphone.items[1].body2}
                    </p>
                </leftdiv2>
                <rightdiv2>
                    <h2 className="div2header">IN THE BOX</h2>
                   
                        <p><span>1x</span>&nbsp;&nbsp;&nbsp;Headephone Unit</p>
                        <p><span>2x</span>&nbsp;&nbsp;&nbsp; Replacement Earcups</p>
                        <p><span>1x</span>&nbsp;&nbsp;&nbsp; User Manual</p>
                        <p><span>1x</span>&nbsp;&nbsp;&nbsp; 3.5mm 5m Audioo Cable</p>
                        <p><span>1x</span>&nbsp;&nbsp;&nbsp; Travel bag</p>
                    
                </rightdiv2>
            </div2>
            
            <div3>
                <leftdiv3>
                    <img src={div3image1} className="div3image1" alt="no image"></img>
                    <img src={div3image2} className="div3image2" alt="no image"></img>
                </leftdiv3>
                <rightdiv3>
                    <img src={div3image3} className="div3image3" alt="no image"></img>
                </rightdiv3>
            </div3>

    {/*swati's code */}
            <div4>
                {/*this is the container1 jsx*/}
                <div className="container1">
                    <img src={logo1} alt="" className="picture1"/>
                    <h3 className="text1">XX99 MARK I</h3>
                    
                        <button className="see1">SEE PRODUCT</button>
                    
                </div>
                {/*this is the container2 jsx*/}
                <div className="container1">
                    
                    <img src={logo2} alt="" className="picture1"/>
                    <h3 className="text1">XX99 MARK II</h3>
                    
                    <button className="see1">SEE PRODUCT</button> 
                
                </div>
                {/*this is the container3 jsx*/}
                <div className="container1">
                    <img src={logo3} alt="" className="picture1"/>
                        <h3 className="text1">ZX9 SPEAKER</h3>
                    
                        <button className="see1">SEE PRODUCT</button>
                </div>
            </div4>
            <div5>
             {/*this is the headphone div */}
            <div className="container2">
                <img src={headphones} alt="" className="image2"/>
                <h3 className="text2">HEADPHONES</h3>
                <p className="shop2"><a href="https://google.com" target="_blank" rel="noreferrer">SHOP&nbsp;&nbsp;&gt;</a></p>
            </div>

            {/*this is the earphones jsx */}
            <div className="container2">
                <img src={image2} alt="" className="image2"/>
                <h3 className="text2">EARPHONES</h3>
                <p className="shop2"><a href="https://google.com" target="_blank" rel="noreferrer">SHOP&nbsp;&nbsp;&gt;</a></p>
            </div>

            {/*this is the speaker jsx */}
            <div className="container2">
                <img src={image3} alt="" className="image2"/>
                <h3 className="text2">SPEAKERS</h3>
                <p className="shop2"><a href="https://google.com" target="_blank" rel="noreferrer">SHOP&nbsp;&nbsp;&gt;</a></p>
            </div>

        </div5>

        <div6>
                <leftdiv6>
                    <h1>{headphoneData.items[2].info_head1}</h1>
                    <h1><span>{headphoneData.items[2].info_head2}</span> {headphoneData.items[2].info_head3}</h1>   
                    <p>{headphoneData.items[2].info_body}</p>  
                </leftdiv6>
                <rightdiv6>
                <img src={Headerphone} className="headephone" alt="A man listening to music with headphone"></img>
                    
                </rightdiv6>
            </div6>
           
        </>
    )
}
 export default Panel4;

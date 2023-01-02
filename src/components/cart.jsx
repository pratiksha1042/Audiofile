import './css/cart.css';
import product from '../Data/product.json';
import { useState } from 'react';
function Cart(){
    const[productData,setProductdata]=useState(product);
    return(
        <div className='background-page'>
            <div className='go-back'>
                <button className='button-1'>Go Back</button>
            </div>
            <div className='checkout-box'>
                <div className='checkout-box-div-1'>
                    <form className="form-area">
                        <h2 className='heading-1'> CHECKOUT</h2>
                            {/*billing details div */}
                            <div className='billing-div'>
                                <p>BILLING DETAILS</p>
                                <div className='input1'>
                                    <div className='input1-1'>
                                        <div className='label1-1'>
                                            <label for="name">Name</label>
                                        </div>
                                        <input type="text" id="name" placeholder="team3"></input>
                                    </div>
                                    <div className='input1-2'>
                                        <div className='label1-2'>
                                            <label for="name">Email Address</label>
                                        </div>
                                        <input type="text" id="email" placeholder="team3@gmail.com"></input>
                                    </div>
                                    <div className='input1-3'>
                                        <div className='label1-3'>
                                            <label for="name">Phone Number</label>
                                        </div>
                                        <input type="text" id="phone" placeholder="+120234555"></input>
                                    </div>
                                </div>
                            </div>
                            {/*this is the shipping-div */}
                            <div className='shipping-div'>
                                <p>SHIPPING INFO</p>
                                <div className='input2'>
                                    <div className='input2-1'>
                                        <div className='label2-1'>
                                            <label for ="shipping">Address</label>
                                        </div>
                                        <input type="text" id="address" placeholder="Persistent Hinjewadi"></input>
                                    </div>
                                    <div className='input2-2'>
                                        <div className='label2-2'>
                                            <label for ="zip code">ZIP CODE</label>
                                        </div>
                                        <input type="text" id="zip" placeholder="411057"></input>
                                    </div>
                                    <div className='input2-3'>
                                        <div className='label2-3'>
                                            <label for ="city">CITY</label>
                                        </div>
                                        <input type="text" id="city" placeholder="Pune"></input>
                                    </div>
                                    <div className='input2-4'>
                                        <div className='label2-4'>
                                            <label for ="country">COUNTRY</label>
                                        </div>
                                        <input type="text" id="country" placeholder="India"></input>
                                    </div>
                                </div>
                            </div>

                            <div className='payment-div'>
                                
                                <div className='input3'>
                                    <p>PAYMENT DETAILS</p>
                                </div>
                                    <div className='input3-1'>
                                        Payment Method
                                    </div>
                                    <div className='Radio-button'>
                                        <div className="mode-1">
                                            <input type="radio" name="payementMethod" id="e-Money" ></input>
                                            <label className='e-Money'> E-Money</label>
                                        </div>
                                        <div className="mode-2">
                                            <input type="radio" name="payementMethod" id="COD" ></input>
                                            <label className='Cash-On-Delivery'> Cash On Delivery</label>
                                        </div>
                                    </div>
                                    <div className='input3-2'>
                                        <div className='label3-1'>
                                            <label for ="Trans-id">E-Money Number</label>
                                        </div>
                                        <input type="text" id="trans" placeholder="238521993"></input>
                                    </div>
                                    <div className='input3-3'>
                                        <div className='label3-2'>
                                            <label for ="pin">E-Money PIN</label>
                                        </div>
                                        <input type="text" id="pin" placeholder="####"></input>
                                    </div>
                                    
                                    
                            </div>

                            
                    </form>
                </div>
                <div className='checkout-box-div-2'>
                    <h2 className='head'> summary </h2>
                    <div className="cartblock" >
                        <div className="cartblock1">
                        <div>  
                            
                            <table>
                                    <tr>
                                        <td>
                                        <img src={productData.items[0].img} height = "135px" width = "137px" alt="No Img"/>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                            {productData.items[0].name}
                                            &ensp;${productData.items[0].price}
                                        </td>
                                        <td>
                                            X{productData.items[0].count}
                                        </td>
                                    </tr>
                                                                 
                                </table>
                        </div>

                    </div>
                        <div className="cartblock2" >
                        <p>TOTAL :&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;${(productData.items[0].price*productData.items[0].count).toFixed(2)}</p>
                        <p>SHIPPING : &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;$50.00</p>
                        <p>VAT (INCLUDED)  : &ensp;&ensp;&ensp;${(0.2*productData.items[0].price*productData.items[0].count).toFixed(2)}</p>
                        <p>GRAND TOTAL : &ensp;&ensp;&ensp;&ensp;&ensp;${(1.2*productData.items[0].price*productData.items[0].count+50).toFixed(2)}</p>
                        <button className="checkoutbutton" > Continue & Pay </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Cart;
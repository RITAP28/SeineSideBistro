import React from 'react';
import './MenuEnding.css';

function MenuEnding() {
  return (
        <div className='menuEnding'>
           <div className="grid">
           <div className="menuEnding-grid">
            <h3 className='ending-logo'>Seine Side Bistro</h3>
           </div>
           <div className="menuEnding-grid">
            <h4 className="ending-subscribe">
                Subsribe for delicious updates
            </h4>
           </div>
        </div>
        <div className="grid">
           <div className="menuEnding-grid">
            <div className="ending-navbar">
                <ul className="ending navbar-list">
                    <li>About</li>
                    <li>Groups</li>
                    <li>Catering</li>
                    <li>Rewards</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
           </div>
           <div className="menuEnding-grid">
            <form className='subscription-form'>
                <input type="text" placeholder='Email' />
                <button type='submit' className='submit-btn'>
                    Submit
                </button>
                <p className='form-p'>This form is protected by reCAPTCHA and the Google <a href='privacy'>Privacy Policy</a> and <br /> <a href='terms'>Terms of Service</a> apply.</p>
            </form>
           </div>
        </div>
        <hr style={{
            width: "65%",
            margin: "0 auto",
            opacity: "0.6"
        }} />
        <div className="grid">
            <div className="menuEnding-grid">
                <div className="payment-options">
                    <div className="payment-option apple">
                        {/* <img src="paymentOptions/apple-pay.png" alt="" /> */}
                    </div>
                    <div className="payment-option google">
                        {/* <img src="paymentOptions/google-pay.png" alt="" /> */}
                    </div>
                    <div className="payment-option visa"></div>
                    <div className="payment-option mastercard"></div>
                    <div className="payment-option cash"></div>
                    <div className="payment-option discover"></div>
                    <div className="payment-option rupay"></div>
                    <div className="payment-option paypal"></div>
                </div>
            </div>
            <div className="menuEnding-grid">
                <div className="social-options">
                    <div className="social-option linkedin"></div>
                    <div className="social-option instagram"></div>
                    <div className="social-option twitter"></div>
                    <div className="social-option whatsapp"></div>
                    <div className="social-option copyright"></div>
                    <div className="social-option year">2023</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuEnding
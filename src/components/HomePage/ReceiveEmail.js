import React from 'react';
import './ReceiverEmail.css';

function ReceiveEmail() {
  return (
    <div className='ReceiveEmail'>
        <div className="receiveEmail-headline">
          <h3>Receive delicious news!</h3>
        </div>
        <div className="receiveEmail-form">
          <form>
            <label>
              Email * <br />
              <input name='myInput' />
            </label>
            <br />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
        <div className="receiveEmail-connect">
          Connect with us:
        </div>
        <div className="receiveEmail-icons">
          <img src="./linkedin.png" alt="" />
          <img src="./insta1.png" alt="" />
          <img src="./twitter 2.png" alt="" />
          <img src="./whatsapp.png" alt="" />
        </div>
    </div>
  )
}

export default ReceiveEmail
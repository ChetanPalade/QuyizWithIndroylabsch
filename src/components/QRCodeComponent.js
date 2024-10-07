

import React from 'react';

import {QRCodeSVG} from 'qrcode.react';

const QRCodeComponent = () => {
  return (
    <div className='qr-code'>
      <h1>Scan to Join the Code:</h1>
      <QRCodeSVG value="https://quyizwithindroylabschetanp.onrender.com/" size={100}/>
    </div>
   );

}

export default QRCodeComponent;

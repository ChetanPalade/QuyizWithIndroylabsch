import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeComponent = ({ gameLink }) => {
  return (
    <div className="qr-code">
      <h3>Scan to Join</h3>
      <QRCodeSVG value={gameLink} size={128} />
    </div>
  );
};

export default QRCodeComponent;


// import React from 'react';

// import {QRCodeSVG} from 'qrcode.react';

// const QRCodeComponent = () => {
//   return (
//     <div className='qr-code'>
//       <h1>Scan to Join the Code:</h1>
//       <QRCodeSVG value="http://localhost:3000" size={50}/>
//     </div>
//    );

// }

// export default QRCodeComponent;
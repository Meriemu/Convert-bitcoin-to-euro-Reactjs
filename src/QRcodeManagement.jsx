import React, { useState } from 'react';
import QRCode from 'qrcode.react';
// import QrReader from 'react-qr-reader';
import { QrReader } from 'react-qr-reader'


function QRcodeManagement() {
  const [qrCodeText, setQrCodeText] = useState('');
  const [scannedData, setScannedData] = useState('');
  
  function handleScan(data){
    if(data){
        setScannedData(data)
    }
  }

  function handleError(err){
    console.error(err)
  }

  function handleTextChange(e) {
    setQrCodeText(e.target.value);
  }

  return (
    <div>
      <h2>QR Code Generator</h2>
      <input type="text" value={qrCodeText} onChange={handleTextChange} placeholder="Enter text to generate QR code" />
      <QRCode value={qrCodeText} size={256} />
      <br />
      <h2>QR Code Scanner</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <br />
      <p>Scanned Data: {scannedData}</p>
    </div>
  );
}

export default QRcodeManagement;

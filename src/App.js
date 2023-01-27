import React, { useState } from "react";
import { qrcodeGenerator } from "react-easy-qrcode-generator";
import './App.css';

export default function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <h2>QR Code Generator</h2>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() =>
          qrcodeGenerator({
            value: value,
            size: "180x180",
            title: "Title",
            qrAlt: "QR Code Image",
            showQrId: "qr-code",
          })
        }
      >
        Generator QR
      </button>
      <div id="qr-code" />
    </div>
  );
}
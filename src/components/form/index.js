import react from "react";
import { useState } from 'react';
import './styles.css';

import encrypt from "../../helper/encrypt";

function Form(
  { 
    clickHandle,
    setString,
    string
  }
  ){

  const [theString, setTheString] = useState(string);
  const [theKey, setTheKey] = useState("");
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const encSwitch = (e) => {
    e.preventDefault();
    if(clickHandle === "handleEncrypt") {
      setString(encrypt(theString, theKey, alphabet, "+"));
    } else if(clickHandle === "handleDecrypt") {
      setString(encrypt(theString, theKey, alphabet, "-"));
    } 
  }

  return (
    <form class="encryption-form">
      <div className="form-separator">
      <label htmlFor="string">Secret Message</label>
      <input type="text" name="string"  onChange={(e) => setTheString(e.target.value)}/>
      </div>
      <div className="form-separator">
      <label htmlFor="encryption-key">Encryption Key</label>
      <input type="number" name="encryption-key" onChange={(e) => setTheKey(e.target.value)}/>
      </div>
      <button type="submit" onClick={encSwitch}>Encrypt/Decrypt</button>
  </form>    
  );
}

export default Form; 
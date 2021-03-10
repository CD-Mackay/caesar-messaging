import React from 'react';
import { useState } from 'react';

import Display from './components/display';
import Form from './components/form';
import './App.css';

function App() {
  const [encryptedString, setEncryptedString] = useState("");
  const [decryptedString, setDecryptedString] = useState("");

  return (
    <div className="App">
      <h3>Encrypt a Secret Message</h3>
      <Form 
        clickHandle={'handleEncrypt'}
        setString={setEncryptedString}
      />
      <Display string={encryptedString}  />
      <h3>Decrypt a Secret Message</h3>
      <Form 
        clickHandle={'handleDecrypt'}
        setString={setDecryptedString}
      />
      <Display string={decryptedString}  />
    </div>
  );
}

export default App;

import React from 'react';
import './styles.css';


function Display({ string }) {

  return (
    <div className="output">
    {string && <p><strong>Result: </strong>{string}</p>}
    </div>
  )
}

export default Display;
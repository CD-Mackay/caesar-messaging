import React from 'react';


function Display({ string }) {

  return (
    <div>
    {string && <p><strong>Result: </strong>{string}</p>}
    </div>
  )
}

export default Display;
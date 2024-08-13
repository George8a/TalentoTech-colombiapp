import React from 'react';

function Boton({ children }) {
    return (
      
        <>
        <button className="nav-link active">{ children }</button>
        
        </>
    );
}

export default Boton;
import React from 'react';

function Boton({ children, handleClick }) {
    let pageId;
    if (children === 'Res Natuales'){
        pageId = 5;
    }
    else if (children === 'Turismo'){
        pageId = 2;
    } else if (children === 'Regiones'){
        pageId = 3;
    }else if (children === 'Ciudades'){
        pageId = 4;
    }else{
        pageId = 1;
    }
    return (
      
        <>
        <button className="nav-link active" onClick={() => handleClick(pageId)}>{ children }</button>
        
        </>
    );
}

export default Boton;
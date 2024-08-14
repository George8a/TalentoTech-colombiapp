import React from 'react';
import useLugares from '../hooks/useLugares';

function Lugares() {
    const {sitios} = useLugares('TouristicAttraction/search/parque');
    return (
        <>
           <div>
            <h2>Prueba parques</h2>
            <ul>
                {sitios.map((sitio, index) =>(
                    <li key={index}>{sitio.name}</li>
                ))}
            </ul>

            
        </div>
        
        
        
        </>
     
    );
}

export default Lugares;
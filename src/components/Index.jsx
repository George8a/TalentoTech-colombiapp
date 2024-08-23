import React from 'react';
import imgDafault from '../img/destinocolombia.jpg'

function Index({elemento}) {
    const handleImageError = (e) => {
        e.target.src =imgDafault; // Imagen de respaldo si falla la original
      };

    
    
    return (

        <>
            <div className="carousel-item active">

            <img src={elemento.images[0]} className="d-block w-100" alt={elemento.name} width={'300px'} height={'500px'} onError={handleImageError}/>
            <div className="carousel-caption d-none d-md-block">
                <h2>{elemento.name}</h2>

            </div>

            </div>

        </>








    );
}

export default Index;
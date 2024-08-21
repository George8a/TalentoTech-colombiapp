import React from 'react';

function Index({elemento}) {
    return (

        <>
            <div className="carousel-item active">

            <img src={elemento.images[0]} className="d-block w-100" alt={elemento.name} width={'300px'} height={'500px'}/>
            <div className="carousel-caption d-none d-md-block">
                <h2>{elemento.name}</h2>

            </div>

            </div>

        </>








    );
}

export default Index;
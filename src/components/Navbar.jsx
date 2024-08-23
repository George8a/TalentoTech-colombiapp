import React from 'react';
import Boton from '../ui/Boton';
import Logo from '../ui/Logo'



function navbar({ handleClick }) {
    return (
        <>  
        <div className='container-fluid pb-5'>     
           


            <div className='nav justify-content-end '>



            </div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                   <Boton handleClick={handleClick}>
                   <Logo></Logo>

                   </Boton>
                

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Boton handleClick={handleClick}>Turismo</Boton>

                            </li>
                            <li className="nav-item">
                                <Boton handleClick={handleClick}>Regiones</Boton>

                            </li>
                            <li className="nav-item">
                                <Boton handleClick={handleClick}>Ciudades</Boton>

                            </li>
                            <li className="nav-item">
                                <Boton handleClick={handleClick}>Res Natuales</Boton>

                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>

            </div>  


        </>
    );
}

export default navbar;
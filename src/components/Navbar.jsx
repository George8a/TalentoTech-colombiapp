import React from 'react';
import Boton from '../ui/Boton';
import Logo from '../ui/Logo'
import Select from '../ui/Select';


function navbar() {
    return (
        <div>
            <div className='nav justify-content-start'>
                <Logo></Logo>

            </div>


            <div className='nav justify-content-end'>



            </div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Logo></Logo>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Boton>Turismo</Boton>

                            </li>
                            <li className="nav-item">
                                <Boton>Regiones</Boton>

                            </li>
                            <li className="nav-item">
                                <Boton>Ciudades</Boton>

                            </li>
                            <li className="nav-item">
                                <Boton>Res Natuales</Boton>

                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <Select></Select>
                           

                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>


        </div>
    );
}

export default navbar;
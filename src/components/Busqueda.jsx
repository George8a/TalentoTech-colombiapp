import React from 'react';
import useLugares from '../hooks/useLugares';
import './Busqueda.css';
import Cards from '../ui/Cards';

function Busqueda() {


    const { lugares } = useLugares('TouristicAttraction/search/parque');


    return (
        <>

            <section class="light" >
            <div class="container py-2">
                <div class="h1 text-center text-dark" id="pageHeaderTitle"></div>
                {lugares.map((elemento, index) => (
                    <Cards
                        key={index}
                        elemento={elemento}
                    ></Cards>
                ))}
            </div>
            );
        </section >



        </>

    
        
)}

export default Busqueda;
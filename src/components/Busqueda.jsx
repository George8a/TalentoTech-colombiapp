import React from 'react';
import useLugares from '../hooks/useLugares';
import './Busqueda.css';
import Cards from '../ui/Cards';
import { useState, useEffect } from 'react';

function Busqueda() {
    /*
    const [valor, setValor] = useState('parque');
    const [endpoint, setEndpoint] = useState('TouristicAttraction/search/');
    */


    /*
    City/search/valledupar
    TouristicAttraction/search/parque
    NativeCommunity/search/wayuu
    Department/search/cundinamarca

     function handleSubmit(e) {
        e.preventDefault(); // se usa de manera comun en react para evitar el comportamiento por defecto del evento submit
        const valor = e.target.elements.search.value;
        const endpoint = e.target.elements.selectedEndpoint.value;
        const [sitios = useLugares(endpoint, valor)

        setSitios(sitios)
        

           
       
      }
    
    
    
    */

    //const { lugares } = useLugares('TouristicAttraction/search/', 'cafe')




    const [valor, setValor] = useState('');
    const [endpoint, setEndpoint] = useState('');
    const [sitios, setSitios] = useState([]);

    const lugares = useLugares(endpoint, valor);

    useEffect(() => {
        setSitios(lugares); // Actualiza el estado con los datos obtenidos del hook
    }, [lugares]); // Solo se ejecuta cuando `lugares` cambia

    function handleSubmit(e) {
        e.preventDefault();
        const valor = e.target.elements.search.value;
        const endpoint = e.target.elements.selectedEndpoint.value;
        setValor(valor);
        setEndpoint(endpoint);
    }


    //let query = 'cafe';
    //const endpoint = ['Department/search/', 'City/search/', 'TouristicAttraction/search/', 'NativeCommunity/search/'];







    return (
        <>
            <form className="d-flex" role="search" onSubmit={handleSubmit} id='select'>
                <select className="form-select form-select-lg" name='selectedEndpoint' >
                    <option value="">Buscar:</option>
                    <option value="Department/search/">Departamentos</option>
                    <option value="City/search/">Cuidades</option>
                    <option value="TouristicAttraction/search/">Atractivo turistico</option>
                    <option value="NativeCommunity/search/">Comunidad Nativa</option>


                </select>



                <input className="form-control me-2" type="text" id="search" placeholder="Buscar" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>

            <section class="light" >
                <div class="container py-2">
                    <div class="h1 text-center text-dark" id="pageHeaderTitle"></div>
                    {sitios.length > 0 ? (
                        sitios.map((elemento, index) => (
                            <Cards
                                key={index}
                                elemento={elemento}
                            />
                        ))
                    ) : (
                        <p>No se encontraron resultados.</p>
                    )}
                </div>

            </section >



        </>



    )
}

export default Busqueda;
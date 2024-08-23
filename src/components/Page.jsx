import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Turismo from './Turismo';
import Regiones from './Regiones';
import Ciudades from './Ciudades';
import ReservasN from './ReservasN';
import Index from './Index';

function Page() {
    const [listElemento, setListElemento] = useState([]);

    async function fetchLugares() {

        let numb = Math.floor(Math.random() * 14) + 1;
        const apiUrl = `https://api-colombia.com/api/v1/TouristicAttraction/pagedList?Page=${numb}&PageSize=3`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            
            return data.data;
        } catch (error) {
            console.error("Error al obtener los datos: ", error)
        }




    };



    useEffect(() => {
        async function getLugares() {
            const lugares = await fetchLugares();
            setListElemento(lugares);
        }
        getLugares();
    }, []);



    //const [elementos, setElementos] = useState([]);

    const [displayPage, setDisplayPage] = useState(1);


    const changeDisplayPage = (pageId) => {
        setDisplayPage(pageId);
    }

    let content;
    if (displayPage === 1) {

        content = (
            <>
                


                    <div className='container mt-5'>
                        <div id="carouselExampleAutoplaying" className=" carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                
                                {listElemento && listElemento.map((elemento, index) => (

                                    <Index key={index} elemento={elemento} /> ))}

                                
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>



                

            </>

        );
    }

    if (displayPage === 2) {

        content = (
            <Turismo />


        );
    }
    if (displayPage === 3) {
        content = (
            <Regiones />

        );
    }
    if (displayPage === 4) {
        content = (
            <Ciudades />


        );
    }
    if (displayPage === 5) {
        content = (
            <ReservasN />

        );
    }


    return (
        <div>
            <Navbar handleClick={changeDisplayPage}></Navbar>
            <div className='container'>
                {content}
            </div>


        </div>
    );
}

export default Page;
import React from 'react';
import { useState, useEffect } from 'react';
import Cards from '../ui/Cards';


function Turismo(){
    const [query, setQuery] = useState("");
    const [atractivoByName, setAtrativoByName] = useState([]);
    //https://api-colombia.com/api/v1/TouristicAttraction/search/
    //https://api-colombia.com/api/v1/TouristicAttraction

    function handleSubmit(e){
        e.preventDefault();
        setQuery(e.target.elements.search.value);
    }

    async function fetchAtrativoByName(queryTerm){

        
        

       
        const baseurl = 'https://api-colombia.com/api/v1/TouristicAttraction'; 


        const apiUrl = query ? `${baseurl}/search/${queryTerm}` : `${baseurl}`;
        console.log(apiUrl);
       

        


        
        
        
        
        try {
            
            const reponse = await fetch(apiUrl);
            const data = await reponse.json();
            console.log(data);
            return data;
            
        } catch (error) {
            console.error('error al obtener datos', error);
            
        }
    }
    useEffect(() => {
        async function getAtrativos() {
            
            const atrativos = await fetchAtrativoByName(query);
            
            setAtrativoByName(atrativos);
            
        }
        getAtrativos();

    } , [query]);
    
    return (
        <>
        <div className='container py-2 mt-5'>
        <div className="h1 text-center text-dark" id="pageHeaderTitle">Atractivos turisticos </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
          
            <input type="text" id="search" className="form-control"></input>
            <button type="submit" className="btn btn-secondary">Buscar</button>
          </div> 
        </form>
             
             <section className="light" >
                <div className="container py-2 mt-5">
                    {atractivoByName && atractivoByName.map((elemento, index) =>(
                        <Cards key={index} elemento={elemento}/>
                    ))}
                    
                    
                </div>

            </section >

            </div>
            
        </>
    );
};

export default Turismo;
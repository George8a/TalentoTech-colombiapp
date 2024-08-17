import { useState, useEffect } from "react";


const baseUrl = 'https://api-colombia.com/api/v1';
const options = {

    method: 'GET',
    headers: {
        accept: "application/json" 
    },
};

const useLugares = (endpoint, query = '') => {
    const [lugares, setLugares] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const fecthLugares = async () => {
            try {
                //base = https://api-colombia.com/api/v1/
                //endponint = /City/name/ o Department/name/ o /TouristicAttraction/search/
                //query = parque o Bogotá o Cesar
                const url = query ? `${baseUrl}/${endpoint}/${query}` : `${baseUrl}/${endpoint}`;
                
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                if (response.ok){
                    setLugares(data);
                }else {
                     setError(data.status_message);
                 }
                setLugares(data);
            } catch (err){
                setError(err.message);
            } finally{
                setLoading(false);
            }
        }
        fecthLugares();
    }, []);

    return {lugares, loading, error};

}
export default useLugares;



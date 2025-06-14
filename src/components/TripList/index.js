import React, {  useState } from 'react'
import useFetch from '../../hooks/useFetch';
import "./index.css";

export default function Index() {

    
    let [url,setUrl]=useState("http://localhost:3000/trips");

    let {data : trips , loading  , error} = useFetch(url,{type:"GET"});

  return (
    <div className='container'>
        {error && <p>{error}</p>}
        
        {!error &&
        
            <div className='flex-container'>
                <h1>Ready to go ?</h1>

                {loading && <p>loading trips...</p>}

                <div>
                    <button onClick={()=>setUrl("http://localhost:3000/trips")}>All</button>
                    <button onClick={()=>setUrl("http://localhost:3000/trips?Location=Myanmar")}>Trips in Myanmar</button>
                </div>

                <ul className='trips-list'>
                    {
                        trips && trips.map(trip=>(
                            <li key={trip.id} className='trip'>
                                <h3>{trip.name}</h3>
                                <p>{trip.price}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>

        }
    </div>

  )
}

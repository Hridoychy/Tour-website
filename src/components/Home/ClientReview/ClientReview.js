import React, { useEffect, useState } from 'react';
import Clientinfo from '../Clientinfo/Clientinfo';
import './ClientReview.css'

const ClientReview = () => {
    const [client,setClient]=useState([])
    useEffect(()=>{
        fetch('https://possessed-corpse-21579.herokuapp.com/Review')
        .then(res=>res.json())
        .then(data=>setClient(data))
    },[])
    return (
        <div>
            <h1>Feedback</h1>
        
        <div className='clientreview'>
            
            {
                client.map(client=><Clientinfo key={client._id} client={client}></Clientinfo>)
            }
        </div>
        </div>
    );
};

export default ClientReview;
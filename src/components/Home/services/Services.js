import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);
    // const [cart, setCart] = useCart();

    useEffect(() => {
        fetch('https://possessed-corpse-21579.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
           <h1> Available Service</h1>
            <div className='services '>
                <div className='service-container  '>

                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;
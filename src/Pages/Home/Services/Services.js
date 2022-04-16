import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id='services' className='my-16'>
            <div className='h-10 mt-9'>
            <h1 className='text-3xl text-center font-semibold'>Our Services</h1>
            </div>
           
            <div className=' container mx-auto grid grid-cols-1 md:grid-cols-3 gap-2'>
            {
               services.map(service => <Service
               key={service.id}
               service = {service}
               >

               </Service>)
            }
            </div>
           
        </div>
    );
};

export default Services;
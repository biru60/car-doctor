import { useEffect, useState } from "react";
import Service from "./service";


const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
        <div className="text-center space-y-4">
            <p className="text-lg text-orange-600 font-semibold">Service</p>
            <h2 className="text-4xl font-semibold">Our Service Area</h2>
            <p className="text-slate-400">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
        </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {
                services.map(service=><Service key={service._id} service={service}></Service>)
            }
          </div>
        </div>
    );
};

export default Services;
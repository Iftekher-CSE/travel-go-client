import React, { useEffect, useState } from "react";
import ServiceCard from "../Home/ServiceCard/ServiceCard";

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allServices?count=${0}`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            });
    }, []);
    return (
        <div>
            <h2>Summary Service View</h2>
            {services.map(service => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
        </div>
    );
};

export default AllServices;

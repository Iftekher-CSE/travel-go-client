import React, { useEffect, useState } from "react";
import ServiceCard from "../Home/ServiceCard/ServiceCard";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://travel-go-server.vercel.app/allServices?count=${0}`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            });
    }, []);
    return (
        <div>
            <h2 className="text-center text-3xl font-bold py-2 my-4 bg-blue-400 rounded-xl text-white">
                All Our Current Services
            </h2>
            {services.map(service => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
            <Helmet>
                <title>All services-Travel Go</title>
            </Helmet>
        </div>
    );
};

export default AllServices;

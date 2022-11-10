import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServiceView = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://travel-go-server.vercel.app/allServices?count=${3}`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            });
    }, []);
    return (
        <div>
            <h2 className="text-center text-3xl font-bold py-2 my-4 bg-blue-400 rounded-xl text-white">
                Summary Service View
            </h2>
            <div className={services.length > 0 ? "hidden" : "block"}>
                <button className="btn btn-ghost loading">loading . . .</button>
            </div>
            {services.map(service => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
            <div className="flex justify-center ">
                <Link to="/allServices">
                    <button className="btn btn-success mb-6">
                        Show All Services
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceView;

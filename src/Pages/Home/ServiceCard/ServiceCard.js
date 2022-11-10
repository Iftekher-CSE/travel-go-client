import { PhotoProvider, PhotoView } from "react-photo-view";

import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {
        _id,
        ServiceName,
        ServiceType,
        ServiceDetails,
        imageURL,
        ServiceCost,
    } = service;
    return (
        <div className="hero bg-base-200 mb-10">
            <PhotoProvider>
                <div className="hero-content flex-col lg:flex-row">
                    <PhotoView src={imageURL}>
                        <img
                            src={imageURL}
                            className="max-w-md rounded-lg shadow-2xl"
                            alt=""
                        />
                    </PhotoView>
                    <div className="px-10">
                        <h1 className="text-5xl font-bold">{ServiceName}</h1>
                        <h1 className="text-2xl font-bold">
                            Service Type: {ServiceType}
                        </h1>
                        <p className="pt-6 pb-4 text-justify	">
                            {ServiceDetails.length > 100
                                ? `${ServiceDetails.slice(0, 99)} . . .`
                                : ServiceDetails}
                        </p>
                        <p className="pb-6 text-xl">
                            Approximate cost will be BDT:{" "}
                            <span className="font-bold">{ServiceCost}</span>
                        </p>
                        <Link to={`/serviceDetails/${_id}`}>
                            <button className="btn btn-primary">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </PhotoProvider>
        </div>
    );
};

export default ServiceCard;

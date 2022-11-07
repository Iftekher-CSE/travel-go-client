import React from "react";

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
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={imageURL}
                    className="max-w-md rounded-lg shadow-2xl"
                    alt=""
                />
                <div className="px-10">
                    <h1 className="text-5xl font-bold">{ServiceName}</h1>
                    <h1 className="text-2xl font-bold">
                        Service Type: {ServiceType}
                    </h1>
                    <p className="pt-6 pb-4 text-justify	">{ServiceDetails}</p>
                    <p className="pb-6 text-xl">
                        Approximate cost will be BDT:{" "}
                        <span className="font-bold">{ServiceCost}</span>
                    </p>
                    <button className="btn btn-primary">Service Review</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

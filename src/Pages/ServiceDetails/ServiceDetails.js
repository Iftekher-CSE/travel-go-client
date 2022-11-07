import React from "react";
import { useLoaderData } from "react-router-dom";
import CardDetails from "./CardDetails/CardDetails";
import ReviewSection from "./ReviewSection/ReviewSection";

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    console.log(serviceDetails);
    return (
        <div className="flex flex-col lg:flex-row gap-1">
            <div className="w-1/2">
                <CardDetails serviceDetails={serviceDetails}></CardDetails>
            </div>
            <div className="w=1/2">
                <ReviewSection></ReviewSection>
            </div>
        </div>
    );
};

export default ServiceDetails;

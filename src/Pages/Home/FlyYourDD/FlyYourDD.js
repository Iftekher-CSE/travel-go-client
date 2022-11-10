import React from "react";
import flyImage from "../../../Assets/GettyImages-480503276.webp";
import { FaPlaneDeparture } from "react-icons/fa";

const FlyYourDD = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mx-12 my-20 rounded-xl">
            <figure className="w-2/5">
                <img src={flyImage} alt="Album" />
            </figure>
            <div className="card-body bg-gradient-to-r from-sky-800 to-indigo-500 text-white rounded-r-xl">
                <h2 className="card-title text-4xl font-bold">
                    Fly Your Dream Destination
                </h2>
                <h2 className="text-xl mb-4">
                    With Our Complete Service Package
                </h2>
                <p className="text-xl">
                    <FaPlaneDeparture className="inline h-6 w-6 mr-2"></FaPlaneDeparture>
                    We offer complete services, you no need to go any where
                    else.{" "}
                </p>
                <p className="text-xl">
                    <FaPlaneDeparture className="inline h-6 w-6 mr-2"></FaPlaneDeparture>
                    Only we offer after migration consultation{" "}
                </p>
                <p className="text-xl">
                    <FaPlaneDeparture className="inline h-6 w-6 mr-2"></FaPlaneDeparture>
                    Wide range of affiliation with international organizations{" "}
                </p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default FlyYourDD;

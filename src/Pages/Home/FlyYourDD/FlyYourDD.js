import React from "react";
import flyImage from "../../../Assets/GettyImages-480503276.webp";

const FlyYourDD = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl px-12 my-8">
            <figure className="w-2/5">
                <img src={flyImage} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold">
                    Fly Your Dream Destination
                </h2>
                <h2 className="text-xl">With Our Complete Service Package</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default FlyYourDD;

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddService = () => {
    const [service, setService] = useState({});
    const handelAddService = event => {
        event.preventDefault();
        console.log(service);

        fetch("https://travel-go-server.vercel.app/addService", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(service),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    console.log("Inside If");
                    // alert("Service Added Successfully!");
                    toast.success("User Added Successfully!");
                }
            });

        event.target.reset();
    };

    const handelOnBlur = event => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const newService = { ...service };
        newService[fieldName] = fieldValue;
        setService(newService);
    };
    return (
        <div>
            <h3 className="text-center text-4xl">Add New service</h3>
            <form
                onSubmit={handelAddService}
                className="hero min-h-screen bg-base-200"
            >
                <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input
                                onBlur={handelOnBlur}
                                type="text"
                                name="ServiceName"
                                placeholder="service name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Type</span>
                            </label>
                            <input
                                onBlur={handelOnBlur}
                                type="text"
                                name="ServiceType"
                                placeholder="service type"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Service Details
                                </span>
                            </label>
                            <input
                                onBlur={handelOnBlur}
                                type="text"
                                name="ServiceDetails"
                                placeholder="service details"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input
                                onBlur={handelOnBlur}
                                type="text"
                                name="imageURL"
                                placeholder="image URL"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Cost</span>
                            </label>
                            <input
                                onBlur={handelOnBlur}
                                type="number"
                                name="ServiceCost"
                                placeholder="service cost"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">
                                Add This Service
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <Helmet>
                <title>Add Service-Travel Go</title>
            </Helmet>
        </div>
    );
};
export default AddService;

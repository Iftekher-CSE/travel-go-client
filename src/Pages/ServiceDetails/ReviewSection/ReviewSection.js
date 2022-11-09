import React, { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import AllReview from "./AllReview/AllReview";

const ReviewSection = ({ serviceDetails }) => {
    const serviceId = serviceDetails._id;
    const serviceName = serviceDetails.ServiceName;
    const { user } = useContext(AuthContext);
    const location = useLocation;
    const handelLoginFromReview = () => (
        <Navigate to="/login" state={{ from: location }}></Navigate>
    );
    const onPostSubmit = event => {
        const { displayName, email, photoURL } = user;
        event.preventDefault();
        const reviewTime = Date.now();
        const review = event.target.review.value;
        const postDetails = {
            review,
            displayName,
            email,
            photoURL,
            reviewTime,
            serviceId,
            serviceName,
        };
        console.log(postDetails);

        fetch("http://localhost:5000/postReview", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(postDetails),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });

        event.target.reset();
    };

    return (
        <div>
            <h3 className="text-2xl font-bold text-center py-3">
                Review Section for {serviceDetails.ServiceName}
            </h3>

            {user?.uid ? (
                <form
                    onSubmit={onPostSubmit}
                    className="flex items-center space-x-3 border items-center rounded-md p-2"
                >
                    <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                            <img
                                src={
                                    user?.photoURL
                                        ? user?.photoURL
                                        : "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/face-icon.png"
                                }
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            {user?.displayName} (<span>{user?.email}</span>)
                            <input
                                type="text"
                                name="review"
                                placeholder="your review here"
                                className="input input-bordered w-full mt-1"
                            />
                        </div>
                    </div>
                    <input type="submit" value="Post" className="btn" />
                </form>
            ) : (
                <>
                    <div className="bg-blue-200 h-20 w-full rounded-md p-4 flex items-center">
                        <div className="mx-auto flex flex-row">
                            <h2 className="text-2xl mr-4">
                                Please Login to post a review.
                            </h2>
                            <Link to="/login" state={{ from: location }}>
                                <button className="btn">Login</button>
                            </Link>

                            {
                                // <Navigate
                                //     to="/login"
                                //     state={{ from: location }}
                                // ></Navigate>
                            }
                        </div>
                    </div>
                </>
            )}
            <AllReview serviceId={serviceId}></AllReview>
        </div>
    );
};

export default ReviewSection;

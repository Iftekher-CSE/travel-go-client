import React, { useEffect, useState } from "react";

const AllReview = ({ serviceId }) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allReview?serviceId=${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, [reviews]);
    return (
        <div className="my-6 p-4">
            <h3 className="font-bold">All Previous Review of this service:</h3>
            {reviews.map(review => (
                <div key={review._id} className="p-2 mb-2 border rounded-xl">
                    <div className="flex">
                        <div>
                            <div className="mask mask-squircle w-10 h-10 mr-2">
                                <img
                                    src={
                                        review?.photoURL
                                            ? review?.photoURL
                                            : "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/face-icon.png"
                                    }
                                    alt="Avatar Tailwind CSS Component"
                                />
                            </div>
                        </div>
                        <div className=" p-2 bg-gray-200 rounded-2xl">
                            <div>
                                <h2 className="font-bold">
                                    {review?.displayName}{" "}
                                    <spam>({review?.email})</spam>
                                </h2>
                            </div>
                            <div>
                                <p className="text-justify">{review.review}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllReview;

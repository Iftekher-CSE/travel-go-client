import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const ReviewSection = ({ serviceDetails }) => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user;
    const onPostSubmit = event => {
        event.preventDefault();
        const reviewTime = Date.now();
        const review = event.target.review.value;
        const serviceId = serviceDetails._id;
        const postDetails = {
            review,
            displayName,
            email,
            photoURL,
            reviewTime,
            serviceId,
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
            <h3>Review Section</h3>

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
        </div>
    );
};

export default ReviewSection;

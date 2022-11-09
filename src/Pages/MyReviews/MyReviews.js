import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { BiTrash, BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";
import ReviewEditModal from "./ReviewEditModal/ReviewEditModal";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [userReviews, setUserReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allReview?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setUserReviews(data);
            });
    }, [user]);

    // delete a review
    const handelDelete = id => {
        const confirmDelete = window.confirm(
            "Are you sure want to delete this review?"
        );
        if (confirmDelete) {
            fetch(`http://localhost:5000/allReview/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Review Deleted Successfully!");
                        const remaining = userReviews.filter(
                            review => review._id !== id
                        );
                        setUserReviews(remaining);
                    }
                });
        }
    };

    // handel edit
    const handelUpdateReview = id => {
        console.log(id);
    };

    // console.log(userReviews);
    return (
        <div className="my-6 p-4">
            <h3 className="font-bold text-2xl text-center my-4">My Reviews:</h3>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>My Review</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row --> */}
                        {userReviews.map((review, index) => (
                            <tr key={review._id} className="hover">
                                <td>{review?.serviceName}</td>
                                <td>
                                    <p>
                                        {review.review.length > 100
                                            ? `${review.review.slice(
                                                  0,
                                                  100
                                              )} . . .`
                                            : review.review}
                                    </p>
                                </td>
                                <td>
                                    {/* Edit Btn */}
                                    {/* Modal luncher btn */}
                                    <label
                                        htmlFor={`my-modal-${index}`}
                                        className="btn mr-2 p-3"
                                    >
                                        <BiEdit className="w-6 h-6"></BiEdit>
                                    </label>

                                    {/* modal body */}
                                    <input
                                        type="checkbox"
                                        id={`my-modal-${index}`}
                                        className="modal-toggle"
                                    />
                                    <label
                                        htmlFor="my-modal-4"
                                        className="modal cursor-pointer"
                                    >
                                        <label
                                            className="modal-box relative h-2/4"
                                            htmlFor=""
                                        >
                                            <label
                                                htmlFor={`my-modal-${index}`}
                                                className="btn btn-sm btn-circle absolute right-2 top-2"
                                            >
                                                ✕
                                            </label>
                                            <h3 className="text-lg font-bold">
                                                {`Service Name: ${review?.serviceName}`}
                                            </h3>
                                            <label className="label">
                                                <span className="text-lg mt-6">
                                                    Review:
                                                </span>
                                            </label>
                                            <textarea
                                                defaultValue={review?.review}
                                                className="textarea textarea-bordered block w-full"
                                                placeholder="review"
                                            ></textarea>{" "}
                                            <button
                                                onClick={() =>
                                                    handelUpdateReview(
                                                        review._id
                                                    )
                                                }
                                                className="btn mt-6"
                                            >
                                                Update Review
                                            </button>
                                        </label>
                                    </label>

                                    {/* Delete Btn */}
                                    <button
                                        onClick={() => handelDelete(review._id)}
                                        className="btn p-3"
                                    >
                                        <BiTrash className="w-6 h-6"></BiTrash>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;

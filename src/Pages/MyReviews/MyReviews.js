import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { BiTrash, BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [userReviews, setUserReviews] = useState([]);
    useEffect(() => {
        fetch(
            `https://travel-go-server.vercel.app/allReview?email=${user.email}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "travel-go-token"
                    )}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => {
                setUserReviews(data);
            });
    }, [user, userReviews]);

    // delete a review
    const handelDelete = id => {
        const confirmDelete = window.confirm(
            "Are you sure want to delete this review?"
        );
        if (confirmDelete) {
            fetch(`https://travel-go-server.vercel.app/allReview/${id}`, {
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
    const handelUpdateReview = event => {
        event.preventDefault();
        const review = event.target.review.value;
        const id = event.target.id.value;
        fetch(`https://travel-go-server.vercel.app/allReview/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ review }),
        })
            .then(res => res.json())
            .then(data => console.log(data));
        // console.log(review, id);
    };

    // console.log(userReviews);
    return (
        <div className="my-6 p-4">
            <h3 className="font-bold text-2xl text-center my-4">
                {userReviews.length > 0
                    ? "My Reviews:"
                    : "No reviews were added"}
            </h3>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>My Review</th>
                            <th>Edit</th>
                            <th>Delete</th>
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

                                    {/* The button to open modal */}
                                    <label
                                        htmlFor={`my-modal-${index}`}
                                        className="btn mr-2 p-3"
                                    >
                                        <BiEdit className="w-6 h-6"></BiEdit>
                                    </label>

                                    {/* Modal BOdy*/}
                                    <input
                                        type="checkbox"
                                        id={`my-modal-${index}`}
                                        className="modal-toggle"
                                    />
                                    <div className="modal">
                                        <div className="modal-box relative max-w-3xl">
                                            <label
                                                htmlFor={`my-modal-${index}`}
                                                className="btn btn-sm btn-circle absolute right-2 top-2"
                                            >
                                                ✕
                                            </label>
                                            <h3 className="text-lg font-bold">
                                                Edit Review For:
                                                {review?.serviceName}
                                            </h3>
                                            <form onSubmit={handelUpdateReview}>
                                                <label>ID</label>
                                                <input
                                                    readOnly
                                                    type="text"
                                                    name="id"
                                                    defaultValue={review._id}
                                                    className="mb-2 block input input-bordered w-full mt-1"
                                                />
                                                <label>Previous Review</label>
                                                <input
                                                    type="text"
                                                    name="review"
                                                    defaultValue={review.review}
                                                    placeholder="your review here"
                                                    className="block input input-bordered w-full mt-1"
                                                />
                                                <input
                                                    type="submit"
                                                    value="Update Review"
                                                    className="btn my-2"
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </td>
                                <td>
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
            <Helmet>
                <title>My Reviews-Travel Go</title>
            </Helmet>
        </div>
    );
};

export default MyReviews;

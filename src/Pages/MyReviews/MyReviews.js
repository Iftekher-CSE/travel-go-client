import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { BiTrash, BiEdit } from "react-icons/bi";

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
            "Are you sure want to delete order?"
        );
        if (confirmDelete) {
            fetch(`http://localhost:5000/allReview/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remaining = userReviews.filter(
                            review => review._id !== id
                        );
                        setUserReviews(remaining);
                    }
                });
        }
    };

    console.log(userReviews);
    return (
        <div className="my-6 p-4">
            <h3 className="font-bold text-2xl text-center">My Reviews:</h3>

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
                        {userReviews.map(review => (
                            <tr key={review._id} className="hover">
                                <td>{review.serviceId}</td>
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
                                    <button className="btn mr-2 p-3">
                                        <BiEdit className="w-6 h-6"></BiEdit>
                                    </button>
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

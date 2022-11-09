import React from "react";
import { BiSave } from "react-icons/bi";

const ReviewEditModal = ({ review }) => {
    const handelReviewEdit = () => {};
    return (
        <div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">
                        Congratulations random Internet user!
                    </h3>
                    <p className="py-4">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                    </p>
                </label>
            </label>
            {/* Table */}
            <thead>
                <tr>
                    <th>Service Name</th>
                    <th>My Review</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* <!-- row --> */}
                <tr key={review._id} className="hover">
                    <td>{review?.serviceName}</td>
                    <td>
                        <p>
                            {review.review.length > 100
                                ? `${review.review.slice(0, 100)} . . .`
                                : review.review}
                        </p>
                    </td>
                    <td>
                        <button
                            onClick={() => handelReviewEdit(review._id)}
                            className="btn p-3"
                        >
                            <BiSave className="w-6 h-6"></BiSave>
                        </button>
                    </td>
                </tr>
            </tbody>
        </div>
    );
};

export default ReviewEditModal;

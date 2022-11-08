import React from "react";

const ReviewSection = () => {
    return (
        <div>
            <h3>Review Section</h3>

            <div className="flex items-center space-x-3 border items-center rounded-md p-2">
                <div className="avatar">
                    <div className="mask mask-squircle w-14 h-14">
                        <img
                            src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/face-icon.png"
                            alt="Avatar Tailwind CSS Component"
                        />
                    </div>
                </div>
                <div>
                    <div>
                        Hart Hagerty (<span>E-mail</span>).{" "}
                        <span className="text-xs">Review Time</span>
                        <input
                            type="text"
                            placeholder="your review here"
                            className="input input-bordered w-full mt-1"
                        />
                    </div>
                </div>
                <input type="submit" value="Submit" className="btn" />
            </div>
        </div>
    );
};

export default ReviewSection;

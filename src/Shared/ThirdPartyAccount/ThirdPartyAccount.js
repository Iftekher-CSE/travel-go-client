import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ThirdPartyAccount = () => {
    const { userGoogleLogin } = useContext(AuthContext);
    const handelGoogleSignIn = () => {
        userGoogleLogin()
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .then(err => console.error(err));
    };
    const handelFacebookSignIn = () => {};

    return (
        <div className="flex gap-4 my-5">
            <div
                onClick={handelGoogleSignIn}
                className="hover:cursor-pointer hover:bg-gray-300 bg-gray-200 p-3 rounded-full"
            >
                <FcGoogle></FcGoogle>
            </div>
            <div
                onClick={handelFacebookSignIn}
                className="hover:cursor-pointer hover:bg-gray-300 bg-gray-200 p-3 rounded-full"
            >
                <FaFacebookF className="text-blue-800"></FaFacebookF>
            </div>
            <div className="hover:cursor-pointer hover:bg-gray-300 bg-gray-200 p-3 rounded-full">
                <FaLinkedinIn className="text-blue-600"></FaLinkedinIn>
            </div>
        </div>
    );
};

export default ThirdPartyAccount;

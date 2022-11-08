import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../Assets/LoginPage.jpg";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import ThirdPartyAccount from "../../Shared/ThirdPartyAccount/ThirdPartyAccount";

const Register = () => {
    const { userRegistration } = useContext(AuthContext);

    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        userRegistration(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(err => console.error(err));

        console.log(name, photoUrl, email, password);
    };

    return (
        <div style={{ backgroundColor: "#0DC5CF" }} className="hero w-full">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row ">
                <div className="text-center lg:text-left">
                    <img className="w-full" src={loginImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelRegister} className="card-body py-4">
                        <h1 className="text-5xl text-center font-bold text-blue-500">
                            User Register
                        </h1>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photoUrl"
                                placeholder="Photo URL"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label"></label>
                        </div>
                        <div className="form-control mt-1"></div>
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Register"
                        />
                    </form>
                    <div className="flex flex-col items-center">
                        <p>Or Register with</p>
                        <ThirdPartyAccount></ThirdPartyAccount>
                    </div>
                    <p className="text-center mb-10">
                        Already have an account?
                        <Link to="/login" className="text-orange-600">
                            {" "}
                            Please Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;

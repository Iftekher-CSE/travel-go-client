import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../Assets/LoginPage.jpg";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import ThirdPartyAccount from "../../Shared/ThirdPartyAccount/ThirdPartyAccount";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        userLogin(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    };

    return (
        <div style={{ backgroundColor: "#0DC5CF" }} className="hero w-full">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row ">
                <div className="text-center lg:text-left">
                    <img className="w-full" src={loginImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <form onSubmit={handelLogin} className="card-body py-2">
                        <h1 className="text-5xl text-center font-bold text-blue-500">
                            Login
                        </h1>
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
                                placeholder="password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <Link
                                    href=""
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6"></div>
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Login"
                        />
                    </form>
                    <div className="flex flex-col items-center">
                        <p>Or Log In with</p>
                        <ThirdPartyAccount></ThirdPartyAccount>
                    </div>
                    <p className="text-center">
                        New to Travel Go
                        <Link to="/register" className="text-orange-600">
                            {" "}
                            Please Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

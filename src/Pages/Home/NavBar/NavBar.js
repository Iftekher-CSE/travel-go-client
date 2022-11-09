import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../Assets/Travel-logo.png";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const NavBar = () => {
    const { userLogOut, user } = useContext(AuthContext);
    // console.log(user);
    const handelLogOut = () => {
        userLogOut()
            .then(() => {})
            .catch(err => console.error(err));
    };

    const navItem = (
        <>
            <NavLink className="btn btn-outline mr-2" to="/home">
                Home
            </NavLink>

            <NavLink className="btn btn-outline mr-2" to="/blog">
                Blog
            </NavLink>
            {user?.uid ? (
                <>
                    <NavLink className="btn btn-outline mr-2" to="/AddService">
                        Add service
                    </NavLink>
                    <NavLink
                        className="btn btn-outline mr-2"
                        to={`/MyReviews/${user.email}`}
                    >
                        My reviews
                    </NavLink>
                    <NavLink
                        onClick={handelLogOut}
                        className="btn btn-outline mr-2"
                    >
                        Log Out
                    </NavLink>
                </>
            ) : (
                <>
                    <NavLink className="btn btn-outline mr-2" to="/logIn">
                        Log In
                    </NavLink>
                    <NavLink className="btn btn-outline mr-2" to="/register">
                        Register
                    </NavLink>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navItem}
                    </ul>
                </div>
                <Link to="/home">
                    <img className="w-full md:w-36 px-2" src={logo} alt="" />
                </Link>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">{navItem}</ul>
                </div>
            </div>

            {/* logged in user info */}
            <div>
                {user?.uid ? (
                    <>
                        <div className="avatar pe-4">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img
                                    src={
                                        user?.photoURL
                                            ? user?.photoURL
                                            : "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/face-icon.png"
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="pl-2">
                            <h3 className="font-bold text-lg">
                                {user?.displayName}
                            </h3>
                            <div className="text-s">{user?.email}</div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default NavBar;

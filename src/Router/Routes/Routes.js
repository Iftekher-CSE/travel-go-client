import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/AddService",
                element: (
                    <PrivateRoute>
                        <AddService></AddService>
                    </PrivateRoute>
                ),
            },
            {
                path: "/MyReviews/:email",
                element: (
                    <PrivateRoute>
                        <MyReviews></MyReviews>
                    </PrivateRoute>
                ),
            },
            {
                path: "/allServices",
                element: <AllServices></AllServices>,
            },
            {
                path: "/serviceDetails/:id",
                loader: ({ params }) =>
                    fetch(`https://travel-go-server.vercel.app/serviceDetails/${params.id}`),
                element: <ServiceDetails></ServiceDetails>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/logIn",
                element: <Login></Login>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
        ],
    },
]);

export default router;

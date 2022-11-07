import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home/Home";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/AddService",
                element: <AddService></AddService>,
            },
            {
                path: "/MyReviews",
                element: <MyReviews></MyReviews>,
            },
            {
                path: "/allServices",
                element: <AllServices></AllServices>,
            },
            {
                path: "/serviceDetails/:id",
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/serviceDetails/${params.id}`),
                element: <ServiceDetails></ServiceDetails>,
            },
        ],
    },
]);

export default router;

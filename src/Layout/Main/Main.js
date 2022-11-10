import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/Home/NavBar/NavBar";
import Footer from "../../Shared/ThirdPartyAccount/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;

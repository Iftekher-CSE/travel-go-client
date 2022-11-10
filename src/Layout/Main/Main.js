import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/Home/NavBar/NavBar";
import Footer from "../../Shared/ThirdPartyAccount/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="px-10">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;

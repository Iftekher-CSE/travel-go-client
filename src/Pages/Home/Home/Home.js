import React from "react";
import Banner from "../Banner/Banner";
import ServiceView from "../ServiceView/ServiceView";
import { Helmet } from "react-helmet-async";
import FlyYourDD from "../FlyYourDD/FlyYourDD";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home-Travel Go</title>
            </Helmet>
            <Banner></Banner>
            <ServiceView></ServiceView>
            <FlyYourDD></FlyYourDD>
        </div>
    );
};

export default Home;

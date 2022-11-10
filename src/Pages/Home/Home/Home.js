import React from "react";
import Banner from "../Banner/Banner";
import ServiceView from "../ServiceView/ServiceView";
import { Helmet } from "react-helmet-async";
import FlyYourDD from "../FlyYourDD/FlyYourDD";
import KeyInfos from "../KeyInfos/KeyInfos";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home-Travel Go</title>
            </Helmet>
            <Banner></Banner>
            <ServiceView></ServiceView>
            <FlyYourDD></FlyYourDD>
            <KeyInfos></KeyInfos>
        </div>
    );
};

export default Home;

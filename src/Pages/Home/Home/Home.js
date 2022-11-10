import React from "react";
import Banner from "../Banner/Banner";
import ServiceView from "../ServiceView/ServiceView";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home-Travel Go</title>
            </Helmet>
            <Banner></Banner>
            <ServiceView></ServiceView>
        </div>
    );
};

export default Home;

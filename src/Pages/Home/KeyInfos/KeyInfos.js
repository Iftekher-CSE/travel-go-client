import React from "react";
import { FcCalendar, FcCustomerSupport, FcShop } from "react-icons/fc";

const KeyInfos = () => {
    return (
        <div className="py-10 bg-blue-600 my-20 rounded-xl text-white flex justify-around mx-12">
            <div className="hero-content text-center">
                <FcCalendar className="h-10 w-10"></FcCalendar>
                <div className="max-w-md">
                    <p className="py-1">We are open Saturday-Thursday</p>
                    <h1 className="text-2xl font-bold">7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className="hero-content text-center">
                <FcCustomerSupport className="h-10 w-10"></FcCustomerSupport>
                <div className="max-w-md">
                    <p className="py-1">24/7 in your support</p>
                    <h1 className="text-2xl font-bold">+8801 555 1122</h1>
                </div>
            </div>
            <div className="hero-content text-center">
                <FcShop className="h-10 w-10"></FcShop>
                <div className="max-w-md">
                    <p className="py-1">Want to Visit Us? Welcome</p>
                    <h1 className="text-2xl font-bold">Gulshan-1, Dhaka</h1>
                </div>
            </div>
        </div>
    );
};

export default KeyInfos;

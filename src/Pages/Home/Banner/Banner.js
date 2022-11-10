import React from "react";
import bannerImage1 from "../../../Assets/banner-img-1.jpg";
import bannerImage2 from "../../../Assets/banner-img-2.jpg";
import bannerImage3 from "../../../Assets/banner-img-3.jpg";
import bannerImage4 from "../../../Assets/banner-img-4.jpg";

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full rounded-xl">
                <div id="item1" className="carousel-item w-full">
                    <img src={bannerImage1} alt="" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={bannerImage2} alt="" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={bannerImage3} alt="" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={bannerImage4} alt="" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">
                    1
                </a>
                <a href="#item2" className="btn btn-xs">
                    2
                </a>
                <a href="#item3" className="btn btn-xs">
                    3
                </a>
                <a href="#item4" className="btn btn-xs">
                    4
                </a>
            </div>
        </div>
    );
};

export default Banner;

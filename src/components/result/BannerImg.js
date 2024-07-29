import React from "react";

import Banner from "../../../public/assets/img/banner.png";
import Banner2 from "../../../public/assets/img/banner2.png";
import Banner3 from "../../../public/assets/img/banner3.png";
import Banner4 from "../../../public/assets/img/banner4.png";
import Banner5 from "../../../public/assets/img/banner5.png";
import Banner6 from "../../../public/assets/img/banner6.png";
import Banner7 from "../../../public/assets/img/banner7.png";
import Banner8 from "../../../public/assets/img/banner8.png";
import Banner9 from "../../../public/assets/img/banner9.png";
import Banner10 from "../../../public/assets/img/banner10.png";






const BannerImg = () => {


    const image = [Banner, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7, Banner8, Banner9, Banner10]

    const random = Math.floor(Math.random() * image.length);
    return (
        <><div className="banner">

            <img src={image[random]} />
        </div>
        </>
    )

}
export default BannerImg;
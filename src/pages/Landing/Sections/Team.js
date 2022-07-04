import React from "react";
import GlitchText from 'react-glitch-effect/core/GlitchText';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import team0 from "../../../assets/images/team0.jpg"
import team1 from "../../../assets/images/team4.jpg"
import team2 from "../../../assets/images/team2.jpg"
import team3 from "../../../assets/images/team3.jpg"
import {
    FaInstagram,
    FaTwitter,
    FaDiscord,
} from "react-icons/fa";

export default function Team() {
    const responsive = {
        xxl: {
            breakpoint: { max: 4000, min: 1400 },
            items: 3,
            partialVisibilityGutter: 20,
        },
        xl: {
            breakpoint: { max: 1399, min: 1200 },
            items: 2,
            partialVisibilityGutter: 110,
        },
        lg: {
            breakpoint: { max: 1199, min: 992 },
            items: 2,
            partialVisibilityGutter: 20,
        },
        md: {
            breakpoint: { max: 991, min: 768 },
            items: 1,
            partialVisibilityGutter: 130,
        },
        sm: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        }
    };
    return (
        <section id="team">
            <div className="fs-1">
                <GlitchText duration={5000} color2="#00FFFF" color1="red">
                    ABOUT US
                </GlitchText>
            </div>
            <div className="carousel">
                <Carousel responsive={responsive} infinite={true}>
                    <div className="item">
                        <img src={team0} alt="" className="img-thumbnail" />
                        <div className="fs-3 ">BOB GREENFIELD</div>
                        <div>programming guru</div>
                        <a href="/" className={"px-2 py-2 rounded-md text-base font-medium "}>
                            <FaInstagram />
                        </a>
                        <a href="/" className={"px-2 py-2 rounded-md text-base font-medium "}>
                            <FaTwitter />
                        </a>
                        <a href="/" className={"px-2 py-2 rounded-md text-base font-medium "}>
                            <FaDiscord />
                        </a>
                    </div>
                    <div className="item">
                        <img src={team1} alt="" className="img-thumbnail" />
                        <div className="fs-3 ">BOB GREENFIELD</div>
                        <div>programming guru</div>
                        <a href="/" className={"px-2 py-2 rounded-md text-base font-medium "}>
                            <FaInstagram />
                        </a>
                        <a href="/" className={"px-2 py-2 rounded-md text-base font-medium "}>
                            <FaTwitter />
                        </a>
                        <a href="/" className={"px-2 py-2 rounded-md text-base font-medium "}>
                            <FaDiscord />
                        </a>
                    </div>
                    <div className="item">
                        <img src={team3} alt="" className="img-thumbnail" />
                        <div className="fs-3 ">ANN RICHMOND</div>
                        <div>sales manager</div>
                        <a href="/" className={"px-2 py-2 rounded-md text-base font-medium "}>
                            <FaInstagram />
                        </a>
                        <a href="/" className={"px-2 py-2 rounded-md text-base font-medium "}>
                            <FaTwitter />
                        </a>
                        <a href="/" className={"px-2 py-2 rounded-md text-base font-medium "}>
                            <FaDiscord />
                        </a>
                    </div>
                    <div className="item">
                        <img src={team2} alt="" className="img-thumbnail" />
                        <div className="fs-3 ">BOB GREENFIELD</div>
                        <div>programming guru</div>
                        <a href="/" className={"px-2 py-2 rounded-md text-base font-medium "}>
                            <FaInstagram />
                        </a>
                        <a href="/" className={"px-2 py-2 rounded-md text-base font-medium "}>
                            <FaTwitter />
                        </a>
                        <a href="/" className={"px-2 py-2 rounded-md text-base font-medium "}>
                            <FaDiscord />
                        </a>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}


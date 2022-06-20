import React from "react";
import GlitchText from 'react-glitch-effect/core/GlitchText';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import team1 from "../../assets/team4.jpg"
import team2 from "../../assets/team2.jpg"
import team3 from "../../assets/team3.jpg"

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
                <GlitchText duration="5000" color2="#00FFFF" color1="red">
                    ABOUT US
                </GlitchText>
            </div>
            <Carousel responsive={responsive}  infinite={true}>
                <div>
                    <img src={team1} alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={team3} alt="" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={team2} alt="" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        </section>
    );
}


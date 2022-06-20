import React from "react";
import ReactPlayer from 'react-player';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import Ticket_Normal from "../../assets/Ticket_Normal.mp4";

export default function HomeScreen() {

    return (
        <section id="home">
            <div className="content d-flex mt-5 mb-5 gap-5 align-items-center flex-column flex-md-row">
                <ReactPlayer playing={true} muted={true} loop={true} className='react-player' url={Ticket_Normal} />
                <div className="mt-5 mb-5" style={{ flex: 1.3 }}>
                    <div className="home-title1">
                            When Web3 <GlitchText duration={5000} color2="#00FFFF" color1="red">
                            meets
                        </GlitchText> Cinema

                    </div>
                    <div className="home-title2">Join the Revolution</div>
                    <div className="home-title3">LAUNCH DATE TBA</div>
                    <div className="home-mint"><span style={{ color: "#00FFFF" }}>FREE</span> <span style={{ color: "red" }}>MINT</span></div>
                </div>
            </div>
        </section>

    );
}


import React from "react";
import ReactPlayer from 'react-player';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import Ticket_Normal from "../../assets/Ticket_Normal.m4v";
import { useNavigate } from 'react-router-dom';
export default function HomeScreen() {
    const navigate = useNavigate();
    const mintHandle = () => {
        navigate(`/mint`);
    }
    return (
        <section id="home">
            <div className="content d-flex mt-5 mb-5 gap-5 align-items-center flex-column flex-md-row">
                <ReactPlayer playing={true} muted={true} loop={true} className='react-player' url={Ticket_Normal} />
                {/* <video width="320" height="240" controls loop autoplay muted>
                    <source src={Ticket_Normal} type="video/m4v" />
                </video> */}
                <div className="mt-5 mb-5" style={{ flex: 1.3 }}>
                    <div className="home-title1">
                        When Web3 <GlitchText duration={5000} color2="#00FFFF" color1="red">
                            meets
                        </GlitchText> Cinema

                    </div>
                    <div className="home-title2">Join the Revolution</div>
                    <div className="home-title3">LAUNCH DATE TBA</div>
                    <div className="home-mint">
                        <span onClick={mintHandle} style={{ cursor: "pointer" }}><GlitchText duration={5000} color2="#00FFFF" color1="red">
                            FREE MINT
                        </GlitchText></span>
                    </div>
                </div>
            </div>
        </section>

    );
}


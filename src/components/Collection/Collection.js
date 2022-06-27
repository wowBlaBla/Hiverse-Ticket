import React from "react";
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazyload';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import Ticket_Normal from "../../assets/Ticket_Normal.mp4";
import Ticket_Premiere from "../../assets/Ticket_Premiere.mp4";
import Ticket_Avant from "../../assets/Ticket_Avant-Premiere.mp4";
import Ticket_Coulisses from "../../assets/Ticket_Coulisses.mp4";
import { useNavigate } from 'react-router-dom';
export default function Collection() {
    const navigate = useNavigate();
    const mintHandle = () => {
        navigate(`/mint`);
    }
    return (
        <section id="collection">
            <div className="text-center">
                <div className="collection-title1"><GlitchText duration={5000} color2="#00FFFF" color1="red">
                    HIVERSE TICKETS
                </GlitchText> GENESIS COLLECTION</div>
                <div className="collection-title2">A 3D collection of 30XX Tickets giving membership access</div><div className="collection-title2"> to HIVERSE and exclusive benefits.</div>
                {/* <div className="link-class"><span>JOIN DISCORD</span></div> */}
                <div className="text-center mint-button mt-3" onClick={mintHandle}>
                    <GlitchText duration={5000} color2="#00FFFF" color1="red">
                        MINT
                    </GlitchText>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <LazyLoad height={400}>
                        <ReactPlayer style={{ maxWidth: "100%" }} playing={true} muted={true} loop={true} className='react-player' url={Ticket_Normal} />
                    </LazyLoad>
                    <div className="text-center video-title">
                        <div className="ticket-number">1500</div>
                        <div>TICKET NORMAL</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <LazyLoad height={400}>
                        <ReactPlayer style={{ maxWidth: "100%" }} playing={true} muted={true} loop={true} className='react-player' url={Ticket_Premiere} />
                    </LazyLoad>
                    <div className="text-center video-title">
                        <div className="ticket-number">1000</div>
                        <div>TICKET PREMIERE</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <LazyLoad height={400}>
                        <ReactPlayer style={{ maxWidth: "100%" }} playing={true} muted={true} loop={true} className='react-player' url={Ticket_Avant} />
                    </LazyLoad>
                    <div className="text-center video-title">
                        <div className="ticket-number">1500</div>
                        <div>TICKET AVANT-PREMIERE</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <LazyLoad height={400}>
                        <ReactPlayer style={{ maxWidth: "100%" }} playing={true} muted={true} loop={true} className='react-player' url={Ticket_Coulisses} />
                    </LazyLoad>
                    <div className="text-center video-title">
                        <div className="ticket-number">TBA</div>
                        <div>TICKET COULISSES</div>
                    </div>
                </div>

            </div>
        </section>
    );
}


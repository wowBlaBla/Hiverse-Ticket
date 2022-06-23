import React from "react";
import ReactPlayer from 'react-player';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import LazyLoad from 'react-lazyload';
import Ticket_Normal from "../../assets/Ticket_Normal.m4v";
import check from "../../assets/check.png"
export default function Benifit() {

    return (
        <section id="benefits">
            <div className="content d-flex mt-5 mb-5 gap-5 align-items-center  flex-column flex-md-row">
                <div className="d-flex flex-column text-center" style={{ flex: 0.5 }}>
                    <LazyLoad height={500}>
                        <ReactPlayer playing={true} muted={true} loop={true} className='react-player' url={Ticket_Normal} />
                    </LazyLoad>
                    <div className="link-class"><span>JOIN DISCORD</span></div>
                </div>
                <div className="mt-5 mb-5" style={{ flex: 1 }}>
                    <div className="benefits-title1">
                        TICKETS HOLDERS&nbsp;
                        <GlitchText duration={5000} color2="#00FFFF" color1="red">
                            BENEFITS
                        </GlitchText>
                    </div>
                    <div className="benefits-title2 mt-4 mb-4">Join the Family & enjoy exclusive advantages</div>
                    <div className="benefits-title3 fs-2">
                        <p><img src={check} alt="" width={40}></img>1xFREE CLAIM on all HIVERSE NFT Collections.</p>
                        <p><img src={check} alt="" width={40}></img>Guaranteed presale spot on all HIVERSE NFT Collections.</p>
                        <p><img src={check} alt="" width={40}></img>Discounted mint price on all HIVERSE NFT COLLECTIONS.</p>
                        <p><img src={check} alt="" width={40}></img>Special Thanks Credit on all HIVERSE productions.</p>
                        <p><img src={check} alt="" width={40}></img>Invitations to physical events (shooting, festivals, ...).</p>
                        <p><img src={check} alt="" width={40}></img>Free access to HIVERSE streaming platform.</p>
                        <p><img src={check} alt="" width={40}></img>Priority access to HIVERSE studios and shooting material.</p>
                        <p><img src={check} alt="" width={40}></img>Watch To Earn</p>
                    </div>
                </div>
            </div>
        </section>
    );
}


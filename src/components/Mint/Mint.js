import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazyload';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import Ticket_Normal from "../../assets/Ticket_Normal.mp4";
import Ticket_Premiere from "../../assets/Ticket_Premiere.mp4";
import Ticket_Avant from "../../assets/Ticket_Avant-Premiere.mp4";
import Ticket_Coulisses from "../../assets/Ticket_Coulisses.mp4";

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Mint() {
    const [open, setOpen] = useState(false);
    const [mintCount, setMintCount] = useState(1);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const mintHandle = () => {
        setMintCount(1);
        onOpenModal();
        toast.error('Mint fail example');
        toast.success('mint success example');
    }
    return (
        <section id="collection">
            <div className="text-center">
                <div className="collection-title1"><GlitchText duration={5000} color2="#00FFFF" color1="red">
                    HIVERSE TICKETS
                </GlitchText> GENESIS COLLECTION</div>
                <div className="collection-title2">A 3D collection of 30XX Tickets giving membership access</div><div className="collection-title2"> to HIVERSE and exclusive benefits.</div>
                <div className="link-class"><span>JOIN DISCORD</span></div>
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
                    <div className="text-center mint-button mt-3" onClick={mintHandle}>
                        <GlitchText duration={5000} color2="#00FFFF" color1="red">
                            MINT
                        </GlitchText>
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
                    <div className="text-center mint-button mt-3" onClick={mintHandle}>
                        <GlitchText duration={5000} color2="#00FFFF" color1="red">
                            MINT
                        </GlitchText>
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
                    <div className="text-center mint-button  mt-3" onClick={mintHandle}>
                        <GlitchText duration={5000} color2="#00FFFF" color1="red">
                            MINT
                        </GlitchText>
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
                    <div className="text-center mint-button mt-3" onClick={mintHandle}>
                        <GlitchText duration={5000} color2="#00FFFF" color1="red">
                            MINT
                        </GlitchText>
                    </div>
                </div>

            </div>
            <Modal open={open} onClose={onCloseModal} center classNames={{ root: 'z-1050', modal: 'mint-modal p-4 text-center' }}>
                <div className="fs-1">Enter Quantity</div>
                <div className="d-flex align-items-center fs-2" style={{ cursor: "pointer" }}>
                    <div className="p-2" onClick={() => { mintCount > 1 ? setMintCount(mintCount - 1) : setMintCount(mintCount) }}>-</div>
                    <div><input type="number" className="ps-2" value={mintCount} onChange={(value) => {
                        setMintCount(value);
                    }} /></div>
                    <div className="p-2" onClick={() => { setMintCount(mintCount + 1) }}>+</div>
                </div>
                <div className="fs-1">5000/5000 left</div>
                <div className="fs-1 mint-button"><span>MINT</span></div>
            </Modal>
            <ToastContainer />
        </section>
    );
}


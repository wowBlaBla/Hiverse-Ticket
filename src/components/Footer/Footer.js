import React from "react";
import {
    FaInstagram,
    FaTwitter,
    FaDiscord,
} from "react-icons/fa";

export default function Footer() {
    return (
        <section id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 py-3">
                        <h4 className="text-center fw-500 white">HIVERSE</h4>
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-center gap-2 py-3">
                        <a href="https://discord.gg/p5zfsT2a" target="_blank" rel="noreferrer" className="white decoration-none hover-white">
                            <FaInstagram className="fp-30" />
                        </a>
                        <a href="https://twitter.com/MandelBlocks" target="_blank" rel="noreferrer" className="white decoration-none hover-white">
                            <FaTwitter className="fp-30" />
                        </a>
                        <a href="https://twitter.com/MandelBlocks" target="_blank" rel="noreferrer" className="white decoration-none hover-white">
                            <FaDiscord className="fp-30" />
                        </a>
                    </div>
                    <div className="col-md-4 py-3">
                        <h4 className="text-center">
                            <a href="mailto: Hiverse@gmail@gmail.com" className="white decoration-none hover-white text-decoration-none">Hiverse@gmail.com</a>
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
}


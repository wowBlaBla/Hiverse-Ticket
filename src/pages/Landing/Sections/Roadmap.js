import React from "react";
import { useParallax } from "react-scroll-parallax";
import GlitchText from 'react-glitch-effect/core/GlitchText';
import roadtitle from "../../../assets/images/roadmap.png"
import road1 from "../../../assets/images/road1.png"
import number1 from "../../../assets/images/1.png"
import film from "../../../assets/images/film.png"

export default function Roadmap() {
    const parallax1 = useParallax({
        translateY: ["100", "-100", "linear"],
    });
    const parallax2 = useParallax({
        translateY: ["100", "-100", "linear"],
    });
    const parallax3 = useParallax({
        translateY: ["100", "-100", "linear"],
    });
    const parallax4 = useParallax({
        translateY: ["100", "-100", "linear"],
    });
    const parallax5 = useParallax({
        translateY: ["100", "-100", "linear"],
    });
    const parallax6 = useParallax({
        translateY: ["100", "-100", "linear"],
    });
    const parallax7 = useParallax({
        translateY: ["100", "-100", "linear"],
    });
    // const parallax = useParallax({
    //     translateY: ["0", "50", "linear"],
    //     translateX: ["0", "5", "linear"],
    // });

    return (
        <section id="roadmap">
            <div className=" roadmapp-title" >
                <GlitchText duration={5000} color2="#00FFFF" color1="red">
                    THE ROADMAP
                </GlitchText>
            </div>
            <div className="d-flex roadmap-all" >
                <div>
                    <div className="d-flex mt-5 mb-5 align-items-center gap-2" ref={parallax1.ref}>
                        <div className="number">
                            <GlitchText duration={15000} color2="#00FFFF" color1="red">
                                01
                            </GlitchText>
                        </div>
                        <div className="d-flex align-items-center gap-4  flex-column flex-md-row" style={{ flex: 1 }}>
                            <div className="roadmap-title">
                                <div className="roadmap-title1 roadmap-title1-1"><GlitchText duration={5000} color2="#00FFFF" color1="red">
                                    BUILD
                                </GlitchText></div>
                                <div className="roadmap-title2 roadmap-title2-1">COMMUNITY</div>
                            </div>
                            <div className="roadmap-title3">
                                <div className="">A disruptive concept without proper execution & excellent support is just a good idea.</div>
                                <div className="">Community is the cornerstone of this adventure; the paramount element of its success & sustainability.</div>
                                <div>This is why we strive for making HIVERSE a family where everyone feels a part of it and has a role to play.</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-5 mb-5 align-items-center gap-2" ref={parallax2.ref}>
                        <div className="number">
                            <GlitchText duration={15000} color2="#00FFFF" color1="red">
                                02
                            </GlitchText>
                        </div>
                        <div className="d-flex align-items-center gap-4  flex-column flex-md-row">
                            <div className="roadmap-title">
                                <div className="roadmap-title1 roadmap-title1-2"><GlitchText duration={5000} color2="#00FFFF" color1="red">
                                    FREE MINT
                                </GlitchText></div>
                                <div className="roadmap-title2 roadmap-title2-2">HIVERSE TICKETS</div>
                            </div>
                            <div className="roadmap-title3">
                                <div className="">To create an unbreakable bond between the project and the community, an NFT collection will be launched to offer our first believers something special that will forever testify their engagement towards the community.</div>
                                <div>This Genesis Collection in form of cinema tickets will offer exclusive benefits to the holders.</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-5 mb-5 align-items-center gap-2" ref={parallax3.ref}>
                        <div className="number">
                            <GlitchText duration={15000} color2="#00FFFF" color1="red">
                                03
                            </GlitchText>
                        </div>
                        <div className="d-flex align-items-center gap-4  flex-column flex-md-row">
                            <div className="roadmap-title">
                                <div className="roadmap-title1 roadmap-title1-3"><GlitchText duration={5000} color2="#00FFFF" color1="red">
                                    MINT
                                </GlitchText></div>
                                <div className="roadmap-title2 roadmap-title2-3">MERFOLK</div>
                            </div>
                            <div className="roadmap-title3">
                                <div className="">The first NFT Movie Collection: Merfolk, will be launched to support the funding of the first HIVERSE Movie.</div>
                                <div>Holders of Merfolk will be eligible to earn a share of the royalties generated by the exploitation of HIVERSE First Movie: Gabriel and The Fairy Fountain.</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-5 mb-5 align-items-center gap-2" ref={parallax4.ref}>
                        <div className="number">
                            <GlitchText duration={15000} color2="#00FFFF" color1="red">
                                04
                            </GlitchText>
                        </div>
                        <div className="d-flex align-items-center gap-4  flex-column flex-md-row">
                            <div className="roadmap-title">
                                <div className="roadmap-title1 roadmap-title1-4"><GlitchText duration={5000} color2="#00FFFF" color1="red">
                                    PRODUCE
                                </GlitchText></div>
                                <div className="roadmap-title2 roadmap-title2-4">HIVERSE FIRST MOVIE</div>
                            </div>
                            <div className="roadmap-title3">
                                <div className="">We will assemble a team of qualified filmmakers to make the first episode of an 8-movie saga: THe Young Knight.</div>
                                <div>This saga will be produced in our native language (French), and distributed in theaters and streaming platforms all over the world to show our art and what we accomplished as a community.</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-5 mb-5 align-items-center gap-2" ref={parallax5.ref}>
                        <div className="number">
                            <GlitchText duration={15000} color2="#00FFFF" color1="red">
                                05
                            </GlitchText>
                        </div>
                        <div className="d-flex align-items-center gap-4  flex-column flex-md-row">
                            <div className="roadmap-title">
                                <div className="roadmap-title1 roadmap-title1-5"><GlitchText duration={5000} color2="#00FFFF" color1="red">
                                    WATCH
                                </GlitchText></div>
                                <div className="roadmap-title2 roadmap-title2-5">TO EARN</div>
                            </div>
                            <div className="roadmap-title3">
                                <div className="">Upon release of each movie, holders of the NFT Movie Collection realated to the movie will be eligible to earn a share of the royalties generated by the exploitation of that movie in theaters, streaming platforms, VOD, ...</div>
                                <div>The better HIVERSE movies perform at box office, the more you earn as a holder.</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-5 mb-5 align-items-center gap-2" ref={parallax6.ref}>
                        <div className="number">
                            <GlitchText duration={15000} color2="#00FFFF" color1="red">
                                06
                            </GlitchText>
                        </div>
                        <div className="d-flex align-items-center gap-4  flex-column flex-md-row">
                            <div className="roadmap-title">
                                <div className="roadmap-title1 roadmap-title1-6"><GlitchText duration={5000} color2="#00FFFF" color1="red">
                                    DEVELOP
                                </GlitchText></div>
                                <div className="roadmap-title2 roadmap-title2-6">STREAMING PLATFORM</div>
                            </div>
                            <div className="roadmap-title3">
                                <div className="">A long-term objective is to build a streaming platform to host HIVERSE and community's productions. HIVERSE NFT Collections Holders will have free access.</div>
                                <div className="">We will also look at implementing a reward system for holders to earn passive income just by watching HIVERSE productions.</div>
                                <div >How does that sound?</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-5 mb-5 align-items-center gap-2" ref={parallax7.ref}>
                        <div className="number">
                            <GlitchText duration={15000} color2="#00FFFF" color1="red">
                                07
                            </GlitchText>
                        </div>
                        <div className="d-flex align-items-center gap-4  flex-column flex-md-row">
                            <div className="roadmap-title">
                                <div className="roadmap-title1 roadmap-title1-7"><GlitchText duration={5000} color2="#00FFFF" color1="red">
                                    CREATE
                                </GlitchText></div>
                                <div className="roadmap-title2 roadmap-title2-7">PHYSICAL STUDIOS</div>
                            </div>
                            <div className="roadmap-title3">
                                <div className="">On the longer run we plan to build our own production studios to make live action movies and explore interactive storytelling using VR for another kind of immersive experience (sounds like Metaverse!).</div>
                                <div>The studios will welcome other production teams, adn provide advantageous access to HIVERSE NFTs Holders.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

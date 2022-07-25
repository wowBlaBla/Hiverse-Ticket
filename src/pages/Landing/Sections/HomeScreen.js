import React from "react";
import ReactPlayer from 'react-player';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import Ticket_Total from "../../../assets/videos/total.mp4";
import { useNavigate } from 'react-router-dom';
export default function HomeScreen() {
	const navigate = useNavigate();
	const mintHandle = () => {
		navigate(`/mint`);
	}
	return (
		<section id="home">
			<div className="content d-flex mt-5 mb-5 gap-5 align-items-center flex-column flex-md-row flex-column-reverse flex-md-row">
				{/*<ReactPlayer playing={true} muted={true} loop={true} className='react-player home-react-player' url={Ticket_Normal} />*/}
				<ReactPlayer config={{ file: { attributes: { playsInline: true } } }} playing={true} muted={true} loop={true} className='react-player home-react-player' url={Ticket_Total} />
				<div className="mt-5 mb-5" style={{ flex: 1.3 }}>
					<div className="home-title1">
						When Web3 <GlitchText duration={5000} color2="#00FFFF" color1="red">
							meets
						</GlitchText> Cinema

					</div>
					<div className="home-title2">Join the Revolution</div>
					<div className="home-title3">LAUNCH DATE 25 July 2022</div>

					<div className="home-mint">
						<span onClick={mintHandle} style={{ cursor: "pointer" }}>
							<span style={{ color: "#00FFFF" }}>FREE </span>
							<span style={{ color: "red" }}>MINT</span>
						</span>
					</div>
				</div>
			</div>
		</section>

	);
}


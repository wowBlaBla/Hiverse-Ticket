import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazyload';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import { Modal } from 'react-responsive-modal';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from "react-redux";
import Web3 from "web3";

import Ticket_Normal from "../../assets/videos/Ticket_Normal.mp4";
import Ticket_Premiere from "../../assets/videos/Ticket_Premiere.mp4";
import Ticket_Avant from "../../assets/videos/Ticket_Avant-Premiere.mp4";
import Ticket_Coulisses from "../../assets/videos/Ticket_Coulisses.mp4";
import nftContract from "../../abi/ticket.json";

import 'react-responsive-modal/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Mint() {
	const [open, setOpen] = useState(false);
	const [mintCount, setMintCount] = useState(1);
	const [mintType, setMintType] = useState(0);
	const contractAddress = "0xd913e7acc94d356f403ea30b837c77b64dc779fb";

	const provider = useSelector((state) => state.web3info.provider);

	const onOpenModal = () => setOpen(true);

	const onCloseModal = () => setOpen(false);

	const mintHandle0 = async () => {
		if (!provider) {
			toast.error("You have to connect wallet firstly!");
			return;
		}
		onOpenModal();
		setMintType(0);
		setMintCount(1);
	}

	const mintHandle1 = async () => {
		if (!provider) {
			toast.error("You have to connect wallet firstly!");
			return;
		}
		onOpenModal();
		setMintType(1);
		setMintCount(1);
	}

	const mintHandle2 = async () => {
		if (!provider) {
			toast.error("You have to connect wallet firstly!");
			return;
		}
		onOpenModal();
		setMintType(2);
		setMintCount(1);
	}

	const mintHandle3 = async () => {
		if (!provider) {
			toast.error("You have to connect wallet firstly!");
			return;
		}
		onOpenModal();
		setMintType(3);
		setMintCount(1);
	}

	const mintTicket = async () => {
		let chainId = 0;
		const web3 = new Web3(window.ethereum);
		const result = await window.ethereum.request({
			method: "eth_accounts"
		});
		await window.ethereum.request({method: 'eth_chainId'}).then(data => {
			chainId = data;
		});
		if(chainId != '0x1') {
			toast.error("Please change network to Ethereum Mainnet.");
			return;
		}
		const walletAddy = result[0];
		const contract = new web3.eth.Contract(nftContract, contractAddress);
		await contract.methods.mintTicket(mintCount, mintType).send({
			from: walletAddy
		})
		.then(data => {
			toast.success("Minted Successfully.");
		})
		.catch(err => {
			toast.error(err.message);
		})
	}

	return (
		<section id="collection">
			<div className="text-center">
				<div className="collection-title1"><GlitchText duration={5000} color2="#00FFFF" color1="red">
					HIVERSE TICKETS
				</GlitchText> GENESIS COLLECTION</div>
				<div className="collection-title2">A 3D collection of 333 Tickets giving membership access</div>
				<div className="collection-title2"> to HIVERSE and exclusive benefits.</div>
				<div className="link-class">
					<JoinDiscord />
				</div>
			</div>
			<div className="row">
				<div className="col-md-3">
					<LazyLoad height={400}>
						{/*<ReactPlayer style={{ maxWidth: "100%" }} playing={true} muted={true} loop={true} className='react-player' url={Ticket_Normal} />*/}
						<ReactPlayer config={{ file: { attributes: { playsInline: true } } }} style={{ maxWidth: "100%" }} playing={true} muted={true} loop={true} className='react-player' url={Ticket_Normal} />
					</LazyLoad>
					<div className="text-center video-title">
						<div className="ticket-number">150</div>
						<div>TICKET NORMAL</div>
					</div>
					<div className="text-center mint-button mt-3" onClick={mintHandle0}>
						<GlitchText duration={5000} color2="#00FFFF" color1="red">
							MINT
						</GlitchText>
					</div>
				</div>
				<div className="col-md-3">
					<LazyLoad height={400}>
						{/*<ReactPlayer style={{ maxWidth: "100%" }} playing={true} muted={true} loop={true} className='react-player' url={Ticket_Premiere} />*/}
						<ReactPlayer config={{ file: { attributes: { playsInline: true } } }} style={{ maxWidth: "100%" }} playing={true} muted={true} loop={true} className='react-player' url={Ticket_Premiere} />
					</LazyLoad>
					<div className="text-center video-title">
						<div className="ticket-number">100</div>
						<div>TICKET PREMIERE</div>
					</div>
					<div className="text-center mint-button mt-3" onClick={mintHandle1}>
						<GlitchText duration={5000} color2="#00FFFF" color1="red">
							MINT
						</GlitchText>
					</div>
				</div>
				<div className="col-md-3">
					<LazyLoad height={400}>
						{/*<ReactPlayer style={{ maxWidth: "100%" }} playing={true} muted={true} loop={true} className='react-player' url={Ticket_Avant} />*/}
						<ReactPlayer config={{ file: { attributes: { playsInline: true } } }} style={{ maxWidth: "100%" }} playing={true} muted={true} loop={true} className='react-player' url={Ticket_Avant} />
					</LazyLoad>
					<div className="text-center video-title">
						<div className="ticket-number">50</div>
						<div>TICKET AVANT-PREMIERE</div>
					</div>
					<div className="text-center mint-button  mt-3" onClick={mintHandle2}>
						<GlitchText duration={5000} color2="#00FFFF" color1="red">
							MINT
						</GlitchText>
					</div>
				</div>
				<div className="col-md-3">
					<LazyLoad height={400}>
					{/*
						<ReactPlayer style={{ maxWidth: "100%" }} playing={true} muted={true} loop={true} className='react-player' url={Ticket_Coulisses} />
					*/}
						<ReactPlayer config={{ file: { attributes: { playsInline: true } } }} style={{ maxWidth: "100%" }} playing={true} muted={true} loop={true} className='react-player' url={Ticket_Coulisses} />
					</LazyLoad>
					<div className="text-center video-title">
						<div className="ticket-number">33</div>
						<div>TICKET COULISSES</div>
					</div>
					<div className="text-center mint-button mt-3" onClick={mintHandle3}>
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
					<div><input type="number" disabled className="ps-2" value={mintCount} onChange={(value) => {
						setMintCount(value);
					}} /></div>
					<div className="p-2" onClick={() => { setMintCount(mintCount + 1) }}>+</div>
				</div>
				<div className="fs-1">333/333 left</div>
				<div className="fs-1 mint-button"><span onClick={mintTicket}>MINT</span></div>
			</Modal>
			{/* <ToastContainer /> */}
		</section>
	);
}


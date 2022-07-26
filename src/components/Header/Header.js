import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-scroll';
import {
	FaInstagram,
	FaTwitter,
	FaDiscord,
} from "react-icons/fa";
import { BsJustify } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import "./Header.css";
import Web3 from "web3";
import { updateProvider } from "../../store/actions";

export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [account, setAccount] = useState();
    const { pathname } = useLocation();

    const dispatch = useDispatch();

    const menu = pathname === "/mint" ? [] : [
        { name: "THE VISION", href: "vision", current: false },
        { name: "COLLECTION", href: "collection", current: false },
        { name: "BENEFITS", href: "benefits", current: false },
        { name: "ROADMAP", href: "roadmap", current: false },
        { name: "TEAM", href: "team", current: false },
    ];

	const social_link = [
		{ name: "instagram", href: "https://www.instagram.com/hiverse_films", icon: <FaInstagram /> },
		{ name: "twitter", href: "https://twitter.com/hiversefilms", icon: <FaTwitter /> },
		{ name: "discord", href: "https://discord.com/invite/dmxqj5ECJ6", icon: <FaDiscord /> },
	];

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 920px)");
		mediaQuery.addListener(handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);

		return () => {
			mediaQuery.removeListener(handleMediaQueryChange);
		};
	}, []);

	const handleMediaQueryChange = mediaQuery => {
		if (mediaQuery.matches) {
			setIsSmallScreen(true);
		} else {
			setIsSmallScreen(false);
		}
	};

  const connectWallet = async () => {
      if(window.ethereum) {
          const accounts = await window.ethereum.request({
              method: "eth_requestAccounts"
          });
          const web3 = new Web3(window.ethereum);
          dispatch(updateProvider(web3));
          setAccount(accounts[0]);
      } else {
          toast.error("Please install Metamask!");
      }
  };

  const disconnect = async () => {
      dispatch(updateProvider(null));
      setAccount("");
  };

  return (
      <header className="Header align-items-center fixed-top">
          <a href="/"
              // spy={true}
              // smooth={true}
              duration={50}><img src={require("../../assets/images/logo.png")} className="Logo" alt="logo" /></a>
          <CSSTransition
              in={!isSmallScreen || isNavVisible}
              timeout={350}
              classNames="NavAnimation"
              unmountOnExit
          >
              <nav className="Nav justify-content-end d-flex align-items-center">
                  {menu.map((item, index) => (
                      <Link
                          key={index}
                          to={item.href}
                          spy={true}
                          smooth={true}
                          duration={50}
                          activeClass='active'
                          className={
                              "px-3 py-2 rounded-md text-base font-medium "
                          }
                      >
                          {item.name}
                      </Link>
                  ))}
                  {social_link.map((item, index) => (
                      <a
                          key={index}
                          href={item.href}
                          className={
                              "px-2 py-2 rounded-md text-base font-medium "
                          }
                      >
                          {item.icon}
                      </a>
                  ))}
                  {!account ? (
                      <button
                          onClick={connectWallet}
                          className=""
                      >
                          CONNECT WALLET
                      </button>
                  ) : (
                      <>
                          <button>
                              {account.substr(0, 6) + '...' + account.substr(-4)}
                          </button>
                          <button
                              onClick={disconnect}
                              className=" "
                          >
                              DISCONNECT
                          </button>
                      </>
                  )}
              </nav>
          </CSSTransition>
          <button onClick={toggleNav} className="Burger">
              {isNavVisible ? <AiOutlineClose color="#4a4e57" /> : <BsJustify color="#4a4e57" />}
          </button>
          <ToastContainer></ToastContainer>
      </header>
  );
}


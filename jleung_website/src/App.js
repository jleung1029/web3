import './App.css';
import React, {useState} from 'react';
import { MoralisProvider, useMoralis } from 'react-moralis';
import { ConnectButton } from "@web3uikit/web3";
import logo from "./logo/logo_white_text.png";
import hero_image from "./logo/transparent_primate_cropped.png";
import { FaEthereum, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsLinkedin, BsFillFileEarmarkTextFill, BsChatRightDotsFill } from "react-icons/bs";
import { FcManager } from "react-icons/fc";
import { IconContext } from 'react-icons/lib';
import  cdc_logo from "./logo/companies/cdc_logo.png";
import  bupa_logo from "./logo/companies/bupa_logo.png";
import  vv_logo from "./logo/companies/vv_logo_3.png";
import  cd_logo from "./logo/companies/cd_logo.png";
import  dcn_logo from "./logo/companies/dcn_logo.png";
import  alive_logo from "./logo/companies/alive_logo.png";
import  ap_logo from "./logo/companies/ap_logo_1.png";
import  cw_logo from "./logo/companies/cw_logo.png";
import  spt_logo from "./logo/companies/spt_logo.png";
import  mb_logo from "./logo/companies/mb_logo.png";
import Testimonial from "./Testimonial";
import { GiHamburgerMenu } from "react-icons/gi";
// import ReactGa from "react-ga";

function App() {

  const [show, setShow]=useState(false)

  const onLoadMore = () => {

    let loadMoreBtn = document.querySelector("#load-more");

    let boxes = [...document.querySelectorAll(".card")];
    for (var i = 0; i < boxes.length; i++){
      boxes[i].style.display = "flex";
    }
    loadMoreBtn.style.display = "none";
  }

  const User = () => {
    const { authenticate, isAuthenticated } = useMoralis();
  
    if (!isAuthenticated) {
      return (
        <div>
          <button onClick={() => authenticate()}>Authenticate</button>
        </div>
      );
    }
  };

  return (
    <MoralisProvider
            appId="L8NZn83bUTL22zRWyHA14r32JxQI2VIx5l7Gp08H"
            serverUrl="https://kskiqs8elshe.usemoralis.com:2053/server"
            initializeOnMount={false}>
      
      <div className="header">
        <div class="navbar">
          <a href='https://jleung.xyz'>
            <img src={logo} class="nav_logo" alt="logo" height ="120px"/>
          </a>
          <nav class="menulist-desktop"><ConnectButton class="connect_button"/></nav>
          {
            show?<nav class="menulist-mobile"><ConnectButton class="connect_button"/></nav>:null
          }
          <div class="menu-icon" onClick={()=>setShow(!show)}>
            <GiHamburgerMenu color="white" size="3em"/>
          </div>
        </div>
      </div>

      <div class="banner">
          <div class="banner_image">

          </div>
          <div class="banner_content">
            <div class="col-1">
              <a class="primate_link" href="https://magiceden.io/marketplace/primates">
                <img class="primate" src={hero_image} alt="Primate" height="300"></img>
              </a>
            </div>

            <div class="col-2">
              <div class="banner_text">
                <h1>Jones Leung</h1>
                <p class="mobile" style={{color: "#eceff1"}}>
                  <p class="p-1">
                    ???? Building <span style={{fontWeight: "bold"}}>Fintech & Crypto Products</span> For Global Users 
                  </p>
                  <p class="p-2">
                  <span style={{fontWeight: "bold"}}>
                  <FcManager size="1.25em"/> Product Manager with 3+ Years </span> in Tech & Engineering 
                  </p>
                  <p class="p-3">
                  <FaEthereum size="1.15em" color="#7986CB"/><span style={{fontWeight: "bold"}}> aussietechbloke.eth </span>
                  </p>
                </p>
                <p class="desktop" style={{color: "#eceff1"}}>
                  Building <span style={{fontWeight: "bold"}}>Fintech & Crypto Products</span> For Global Users ????
                  <br></br>
                  <span style={{fontWeight: "bold"}}>
                  Product Manager with 3+ Years </span> in Tech & Engineering <FcManager size="1.25em"/>
                  <br></br>
                  <span style={{fontWeight: "bold"}}>aussietechbloke.eth</span> <FaEthereum size="1.15em" color="#7986CB"/>
                  <br></br>
                </p>
                <IconContext.Provider value = {{size: "1em", className: "icon"}}>
                  <div class="banner_buttons">
                    <a class="btn" href="https://www.linkedin.com/in/jones-leung/">
                      <BsLinkedin/> Linkedin
                    </a>
                    <a class="btn" href="https://twitter.com/aussietechbloke">
                      <FaTwitter/> Twitter</a> 
                    <a class="btn" href="mailto:jonesl029@gmail.com">
                      <MdEmail/> Mail</a> 
                    <a class="btn" href="https://drive.google.com/drive/folders/1eRM3EtRNju70Cq5jfz16DEbZK88axNal?usp=sharing">
                      <BsFillFileEarmarkTextFill/> Resume</a> 
                  </div>
                </IconContext.Provider>
              </div>
            </div> 
          
        </div>
      </div>
        
      
      <div class="container">
        <div class="build-products-container">
          <p className='header title'>
            Built Products For ...
          </p>
          <section class="customer-logos">
            <img class="logo" src={ cdc_logo } alt = "cdc_logo"></img>
            <img class="logo" src={ bupa_logo } alt = "bupa_logo"></img>
            <img class="logo" src={ vv_logo } alt = "vv_logo"></img>
            <img class="logo turn-white" src={ cd_logo } alt = "cd_logo"></img>
            <img class="logo turn-white" src={ dcn_logo } alt = "dcn_logo"></img>
            <img class="logo" src={ alive_logo } alt = "alive_logo"></img>
            <img class="logo" src={ ap_logo } alt = "ap_logo"></img>
            <img class="logo turn-white" src={ cw_logo } alt = "cw_logo"></img>
            <img class="logo" src={ spt_logo } alt = "spt_logo"></img>
            <img class="logo turn-white" src={ mb_logo } alt = "mb_logo"></img>
          </section>
        </div>
      </div>

      <section class ="featured-products">
        <p className='header title'>
          Featured Products
        </p>
        <div class="card-container">
        <div class="card">
              <div class="card-image image-cdc-marketplace"></div>
              <h2> Crypto.com NFT | Revamp </h2>
              <p> A big UX/UI revamp of the Marketplace, Search Results, Collection & Brand page. </p>
              <a href="https://crypto.com/nft/marketplace">READ MORE</a>
          </div>
          <div class="card">
              <div class="card-image image-1"></div>
              <h2> Crypto.com NFT | Top Collections </h2>
              <p> A page for our users to discover the hottest collections on 
                Crypto.com NFT ranked by volume, floor price, and other metrics. </p>
              <a href="https://crypto.com/nft/top-collections">READ MORE</a>
          </div>
          <div class="card">
              <div class="card-image image-2"></div>
              <h2> Bupa Optical </h2>
              <p> AR 3D Glasses Try-on, shopping experience enhancements, myBupa integration
                automatic insurance claiming, prefilled prescriptions. </p>
              <a href="https://bupaoptical.bupa.com.au/">READ MORE</a>
          </div>
          <div class="card">
            <div class="card-image image-3"></div>
            <h2> Bupa Dental </h2>
            <p> Online Booking, Dental Clinic search functionality & user experience. </p>
            <a href="https://www.bupadental.com.au/">READ MORE</a>
          </div>
          <div class="card">
            <div class="card-image image-4"></div>
            <h2> Voxel Ville </h2>
            <p> Grew the NFT collection from 300 members to 35,000 members & helped 
              the collection achieved a trading volume of 2,100 ETH (equiv. 3.8M USD). </p>
            <a href="https://opensea.io/collection/voxel-ville-official">READ MORE</a>
          </div>
          <div class="card">
            <div class="card-image image-5"></div>
            <h2> AP Warehouse </h2>
            <p> Helped 10x monthly visits on AP Warehouse's Google Maps & website visits
                and built an online store end-to-end with 3 engineers. </p>
            <a href="https://apwarehouse.com.au/">READ MORE</a>
          </div>
          <div class="card">
            <div class="card-image image-6"></div>
            <h2> Alive Digital </h2>
            <p> Led the development team and development of the online store for AP Warehouse. </p>
            <a href="http://alivedigital.info/">READ MORE</a>
          </div>
          <div class="card">
            <div class="card-image image-7"></div>
            <h2> Crunch Wheels </h2>
            <p> First experimental online store built with social media marketing - achieved $1000 in revenue in 1 month. </p>
            <a href="https://www.facebook.com/crunchwheels">READ MORE</a>
          </div>
        </div>
        <div class="load-more-section">
          <div id="load-more" class="btn section-btn" onClick={onLoadMore}> Load More </div>
        </div>
      </section>

      <section class ="linkedin-recommendation">
        <p className='header title'>
          <IconContext.Provider value = {{className: "linkedin-icon"}}>
            <BsLinkedin/> Linkedin References 
          </IconContext.Provider>
        </p>

        <div class="testimonial">
          <Testimonial/>
        </div>

        <div class="view-all">
          <a class="btn section-btn" href='https://www.linkedin.com/in/jones-leung/details/recommendations/'> View all</a>
        </div>
      </section>

      <section class ="footer">
        <IconContext.Provider value = {{size: "1.5em", className: "social-media"}}>
          <div class ="footer-wrapper">
            <a href="https://www.linkedin.com/in/jones-leung/">
              <BsLinkedin/>
            </a>
            <a href="https://twitter.com/aussietechbloke">
              <FaTwitter/>
            </a>
            <a href="mailto:jonesl029@gmail.com">
              <MdEmail/>
            </a>
            <a href="https://drive.google.com/drive/folders/1eRM3EtRNju70Cq5jfz16DEbZK88axNal?usp=sharing">
              <BsFillFileEarmarkTextFill/>
            </a>
          </div>
        </IconContext.Provider>

        <IconContext.Provider value = {{size: "1em"}}>
          <div class="footer-text">
            <div class="footer-location">
              <MdLocationOn/> Sydney, Australia (Remote Friendly)
            </div>
          </div>
        </IconContext.Provider>

        <IconContext.Provider value = {{size: "1em", className:"language-icon"}}>
          <div class="footer-text">
            <div class="footer-language">
              <BsChatRightDotsFill/> English | Mandarin | Cantonese
            </div>
          </div>
        </IconContext.Provider>
      </section>
    </MoralisProvider>
  );
}

export default App;

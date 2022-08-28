import './App.css';
import React from 'react';
import { MoralisProvider } from 'react-moralis';
import { ConnectButton } from "@web3uikit/web3";
import logo from "./logo/logo_white_text.png";
import hero_image from "./logo/transparent_primate.png";
import { FaEthereum, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsFillFileEarmarkTextFill } from "react-icons/bs";
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

function App() {
  return (
    <MoralisProvider
            appId="sku1MiaPy1yCMEyfglToINywAr5tWq3s9S2mMMY0"
            serverUrl="https://q2nwge8o4kjj.usemoralis.com:2053/server">

      <div className="header">
        <img src={logo} alt="logo" height ="120px"/>
          <ConnectButton class="connect_button"/>
      </div>

      <div class="banner">
        <div class="banner_image"></div>
          <div class="banner_content">
            <a class="primate_link" href="https://magiceden.io/marketplace/primates">
              <img class="primate" src={hero_image} alt="Primate" height="350"></img>
            </a>
            <div class="banner_text">
              <h1>Jones Leung</h1>
              <p>
                Building Fintech, Crypto & Web3 products to global users 🚀
                <br></br>
                Product Manager with 3+ years in Tech & Crypto <FcManager size="1.25em"/>
                <br></br>
                aussietechbloke.eth <FaEthereum size="1.15em" color="#7986CB"/>
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
                <a class="btn" href="https://drive.google.com/file/d/1ZFqai1Y6ByfEfPbIHlYvM35hhI_3cyIn/view?usp=sharing">
                  <BsFillFileEarmarkTextFill/> Resume</a> 
              </div>
              </IconContext.Provider>
          </div>      
        </div>
      </div>
        
      
      <div class="container">
        <p className='header title'>
        Built products for ...
        </p>
        <section class="customer-logos slider">
          <div class="slide"><img class="logo" src={ cdc_logo } alt = "cdc_logo"></img></div>
          <div class="slide"><img class="logo" src={ bupa_logo } alt = "bupa_logo"></img></div>
          <div class="slide"><img class="logo" src={ vv_logo } alt = "vv_logo"></img></div>
          <div class="slide"><img class="logo turn-white" src={ cd_logo } alt = "cd_logo"></img></div>
          <div class="slide"><img class="logo turn-white" src={ dcn_logo } alt = "dcn_logo"></img></div>
          <div class="slide"><img class="logo" src={ alive_logo } alt = "alive_logo"></img></div>
          <div class="slide"><img class="logo" src={ ap_logo } alt = "ap_logo"></img></div>
          <div class="slide"><img class="logo turn-white" src={ cw_logo } alt = "cw_logo"></img></div>
          <div class="slide"><img class="logo" src={ spt_logo } alt = "spt_logo"></img></div>
          <div class="slide"><img class="logo turn-white" src={ mb_logo } alt = "mb_logo"></img></div>
      </section>
      </div>
    
    </MoralisProvider>
  );
}

export default App;

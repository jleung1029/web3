import './App.css';
import React from 'react';
import { MoralisProvider } from 'react-moralis';
import { ConnectButton } from "@web3uikit/web3";
import { NFT } from '@web3uikit/web3';
import logo from "./logo/logo_white_text.png";

function App() {
  return (
    <MoralisProvider
            appId="sku1MiaPy1yCMEyfglToINywAr5tWq3s9S2mMMY0"
            serverUrl="https://q2nwge8o4kjj.usemoralis.com:2053/server"
        >
    <div className="header">
      <div className='logo'>
        <img src={logo} alt="logo" height ="120px"/>
      </div>
      
      <ConnectButton/>

    </div>

    <p className='instruction'>
      <div className='nft'>
        <NFT
            address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
            chain="eth"
            fetchMetadata={true}
            tokenId="1"
        />
      </div>
      <div className='nft'>
        <NFT
            address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
            chain="eth"
            fetchMetadata={true}
            tokenId="2"
        />
      </div>
      <div className='nft'>
        <NFT
            address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
            chain="eth"
            fetchMetadata={true}
            tokenId="3"
        />
      </div>
    </p>
    </MoralisProvider>
  );
}

export default App;

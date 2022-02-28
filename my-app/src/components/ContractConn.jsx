import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import {ABI} from './ABI'
import { ethers } from 'ethers';
import axios from 'axios';

var sha256 = require("js-sha256").sha256;
const salt = "1234";

const contractAddress = "0xDaA9e437042cB8d1Afb9Ba1201fEe5159C17F32a";
const abi = ABI;

const ContractConn = (props) => {
    const [currentAccount, setCurrentAccount] = useState(null);
    const [dispMsg, setDispMsg] = useState("Connect Wallet");
    const checkWalletIsConnected = async () => {
        const {ethereum} = window;
        if (!ethereum) {
            setDispMsg("Wallet Not Connected");
            return alert("Wallet is not connected")
            
        }
        const accounts = await ethereum.request({method: "eth_accounts"});
            setCurrentAccount(accounts[0]);
            console.log(accounts);
        
        if(accounts.length !== 0) {
            const account = accounts[0];
            setCurrentAccount(account);
            setDispMsg("Wallet Connected");
            // return alert("Wallet is connected !");
        } else {
            setDispMsg("Account Not Found");
            return alert("Account Not Found !")
        }
    }

    const connectWalletHandler = async () => {
        const {ethereum} = window;
        if (!ethereum) {
            setDispMsg("Wallet Not Conntected");
            return alert("Wallet is not connected")
        }
        try {
            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            setCurrentAccount(accounts[0]);
            console.log(accounts);
            setDispMsg("Wallet Connected");
            // alert("Wallet is connected")
        } catch (e) {
            console.log(e)
            setDispMsg("Error, Check console log");
            return alert("Error")
        }
    }
  
    const mintNftHandler = async () => {
        try {

            const {ethereum} =window;
            if (ethereum) {
				const info = props.data
				console.log("info: ", info)
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(contractAddress, abi, signer);
                setDispMsg("Contract Connected");
                var hash = sha256.create();
                const hashVal = hash.update("45" + salt).hex();
                console.log(hashVal);
                setDispMsg("Minting ...");
				// const ipfsData = {
				// 	name: info.name,
				// 	image: "ipfs://QmSzD6AspMHsULuPeGVWsTywVKCFAsDVnRPVSt7832EiFY",
				// 	external_link: "http://www.lordsofthelands.io",
				// 	external_url: "http://www.lordsofthelands.io",
				// 	description: "This is the Test NFT Minted",
				// 	attributes: [
				// 		{
				// 			trait_type: "Type",
				// 			value: "LAND",
				// 		},
				// 		{
				// 			trait_type: "Variant",
				// 			value: info.landType,
				// 		}
				// 	]
				// }
				const ipfsData = "https://ipfs.io/ipfs/QmReL63vqRaN2FszQkzdTZU3XB2tq81mreiyiKUMdQNhnw";
                let nftTxn = await contract.mint("0x" + hashVal, info.tokenId, ipfsData, 0, { value: 45 })
                console.log(nftTxn);
				setDispMsg(`Check Txn here https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
            } else {
                setDispMsg("Ethereum Object Does not Exists");
                return alert("Ethereum Object Does not Exists");
            }

        } catch (e) {
            console.log(e);
            return alert("Error");
        }
    }

    const connectWalletButton = () => {
      return (
        <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
          Connect Wallet
        </button>
      )
    }

    const mintNftButton = () => {
      return (
        <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
          Mint NFT
        </button>
      )
    }

    useEffect(() => {
      checkWalletIsConnected();
    }, [])
    return (
      <div className='main-app'>
        <div>
            {currentAccount ? mintNftButton() : connectWalletButton()} <br/>
            {dispMsg}
        </div>
      </div>
    )
};

export default ContractConn;
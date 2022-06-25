import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import {ABI} from './ABI'; 
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
		const infos = props.data
		setDispMsg("Checking Status");
		const tileUpdate = await axios.get(`http://localhost:8000/map/getTile?x=${infos.x}&y=${infos.y}`)
		if (tileUpdate.data.status === "MINTED") {
			console.log("MINTED");
			return setDispMsg("This tile is already MINTED !")
		} else if (tileUpdate.data.status === "BOOKED") {
			console.log("BOOKED");
			return setDispMsg("This tile is BOOKED by someone else !")
		} else if (tileUpdate.data.status === "NOT_FOR_SALE") {
			console.log("NOT_FOR_SALE");
			return setDispMsg("This tile is not for SALE !")
		} else if (tileUpdate.data.status === "FOR_SALE"){
			try {
					const info = props.data
					const succsData = {
						x: info.x,
						y: info.y,
						update: {
							status: "BOOKED"
							}
						}
						axios.post('http://localhost:8000/map/updateTile', succsData)
					const {ethereum} =window;
				if (ethereum) {
					
					const provider = new ethers.providers.Web3Provider(ethereum);
					const signer = provider.getSigner();
					const contract = new ethers.Contract(contractAddress, abi, signer);
 
						var hash = sha256.create();
						const price = Web3.utils.toWei((info.price).toString(), 'ether')
						const hashVal = hash.update(price.toString() + salt).hex();
						setDispMsg("Minting ...");
						const ipfsData = {
							name: info.name,
							image: "https://ipfs.io/ipfs/QmSzD6AspMHsULuPeGVWsTywVKCFAsDVnRPVSt7832EiFY",
							external_link: "http://www.lordsofthelands.io",
							external_url: "http://www.lordsofthelands.io",
							description: "This is the Test NFT Minted",
							attributes: [
								{
									trait_type: "Type",
									value: "LAND",
								},
								{
									trait_type: "Variant",
									value: info.landType,
								}
							]
						}

						const ipfsHash = await axios.post('http://localhost:8000/map/addIPFS', ipfsData)
						console.log(ipfsHash.data)
						// const ipfsData = "https://ipfs.io/ipfs/QmReL63vqRaN2FszQkzdTZU3XB2tq81mreiyiKUMdQNhnw";
						let nftTxn = await contract.mint("0x" + hashVal, info.tokenId, `http://ipfs.io/ipfs/${ipfsHash.data}`, 0, { value: price })
						console.log(nftTxn);
						setDispMsg(`Check Txn here https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
						
						const succData = {
							x: info.x,
							y: info.y,
							update: {
								status: "MINTED"
								}
							}
							axios.post('http://localhost:8000/map/updateTile', succData)
					
				
				} else {
					setDispMsg("Ethereum Object Does not Exists");
					return alert("Ethereum Object Does not Exists");
				}

			} catch (e) {
				console.log(e);
				const info = props.data
				const succData = {
					
					x: info.x,
					y: info.y,
					update: {
						status: "FOR_SALE"
						}
					}
					axios.post('http://localhost:8000/map/updateTile', succData)
				return alert("Error", e);
			}
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
        <button onClick={mintNftHandler} className='cta-button connect-wallet-button'>
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
          <br/>
            {currentAccount ? mintNftButton() : connectWalletButton()} <br/>
            <br/>
            <p>{dispMsg}</p>
        </div>
      </div>
    )
};

export default ContractConn;

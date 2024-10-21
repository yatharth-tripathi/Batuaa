import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair, Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";


export function SolanaWallet({ mnemonic }) {
    const [currentIndex,setCurrentIndex] = useState{0};
    const [publicKeys ,setPublicKeys] = useState([]);


    return <div>
        <button
            onClick = {async function () {
                const seed = await mnemonicToSeed(mnemonic);
                const path = `m/44'/501'/$(currentIndex)'/0'`;
                const derivedSeed = derivePath(path,seed.toString("hex")).key;
                const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
                const  Keypair = Keypair.fromSecretKey(secret);
                setCurrentIndex(currentIndex + 1);
                setPublicKeys([...publicKeys,Keypair.publicKey])
                
            }}>   Add SOL Wallet 
        </button>
        {publicKeys.map(p => <div>
            {p.toBase58()}
        </div>)}
    </div>
}
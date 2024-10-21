import { useState } from 'react';
import './App.css';
import { generateMnemonic } from 'bip39';
import { SolanaWallet } from './SolanaWallet';
import { EthWallet } from './EthWallet';

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div className="container">
      <h1>Batuaa</h1>
      <h2 className="wallet-name">Wallet For Solana and Ethereum</h2>

      <input 
        type="text" 
        value={mnemonic} 
        placeholder="Your seed phrase will appear here" 
        readOnly 
      />
      
      <button onClick={async () => {
        const mn = generateMnemonic();
        setMnemonic(mn);
      }}>
        Create Seed Phrase
      </button>

      <div className="wallets">
        {mnemonic && <SolanaWallet mnemonic={mnemonic} />}
        {mnemonic && <EthWallet mnemonic={mnemonic} />}
      </div>
    </div>
  );
}

export default App;

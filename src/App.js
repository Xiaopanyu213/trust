
import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";

const coins = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin", icon: "/icons/btc.png" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum", icon: "/icons/eth.png" },
  { id: "ripple", symbol: "XRP", name: "XRP", icon: "/icons/xrp.png" },
  { id: "usd-coin", symbol: "USDC", name: "USDC", icon: "/icons/usdc.png" },
];

export default function App() {
  const [prices, setPrices] = useState({});
  const [balances, setBalances] = useState({});
  const walletRef = useRef(null);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coins.map((c) => c.id).join(",")}&vs_currencies=usd&include_24hr_change=true`)
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  const handleBalanceChange = (symbol, value) => {
    setBalances({ ...balances, [symbol]: value });
  };

  const generateImage = () => {
    if (walletRef.current) {
      html2canvas(walletRef.current, { scale: 2 }).then((canvas) => {
        const link = document.createElement("a");
        link.download = "wallet_balance.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  const totalBalance = Object.keys(balances).reduce(
    (sum, symbol) => sum + (balances[symbol] * (prices[coins.find(c => c.symbol === symbol).id]?.usd || 0)),
    0
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <div ref={walletRef} style={{ width: '320px', borderRadius: '20px', backgroundColor: 'white', padding: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#6b7280' }}>
          <div>18:50</div>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: 'black', borderRadius: '50%' }}></div>
            <div>5G</div>
            <div style={{ width: '16px', height: '8px', backgroundColor: 'black', borderRadius: '2px' }}></div>
            <div>91%</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '16px', fontWeight: 'bold', fontSize: '18px' }}>Main Wallet</div>
        <div style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>${totalBalance.toFixed(2)}</div>
        <div style={{ textAlign: 'center', color: '#6b7280', fontSize: '12px' }}>${totalBalance.toFixed(2)} (0.00%)</div>
        <div style={{ marginTop: '24px' }}>
          {coins.map((coin) => (
            <div key={coin.symbol} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src={coin.icon} alt={coin.symbol} style={{ width: '24px', height: '24px' }} />
                <div>
                  <div style={{ fontWeight: 'bold' }}>{coin.symbol}</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>{coin.name}</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <input type="number" step="any" placeholder="0" style={{ width: '60px', border: '1px solid #d1d5db', borderRadius: '4px', padding: '2px 4px', fontSize: '12px' }}
                  value={balances[coin.symbol] || ''} onChange={(e) => handleBalanceChange(coin.symbol, parseFloat(e.target.value) || 0)} />
                <div style={{ color: '#6b7280', fontSize: '10px' }}>
                  ${(balances[coin.symbol] || 0 * (prices[coin.id]?.usd || 0)).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={generateImage} style={{ marginTop: '24px', backgroundColor: '#3b82f6', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none' }}>
        Generate Image
      </button>
    </div>
  );
}

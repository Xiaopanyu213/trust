import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="text-center text-xl font-bold">Trust Wallet</div>
      <div className="mt-4 text-center">
        <div className="text-sm">0xAbc...1234</div>
        <div className="text-3xl font-semibold mt-2">$12,345.67</div>
      </div>
      <div className="mt-6">
        <div className="bg-gray-900 rounded-xl p-4 mb-2 flex justify-between">
          <span>Ethereum (ETH)</span>
          <span>2.53</span>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 mb-2 flex justify-between">
          <span>USDT</span>
          <span>5,000</span>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 mb-2 flex justify-between">
          <span>BNB</span>
          <span>10.25</span>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { useConnectWallet } from "@web3-onboard/react";

function Historyview() {
  const [{ wallet, connecting }, connect] = useConnectWallet();
  return (
    <div className="font-[RobotoMono] flex flex-col gap-5">
      <div>
        <h1 className="lg:text-[23px] text-lg font-extrabold   bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text">
          My Stakes & Rewards
        </h1>
      </div>
      <div className="w-full border border-slate-500 rounded-xl lg:px-6 px-3 py-5 relative bg-black bg-opacity-75 flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center w-full h-full py-10 gap-3">
          <img
            src="./assets/images/icon/crypto_wallet.png"
            alt="None"
            className="md:h-24 h-16 w-auto"
          />
          <h1 className="text-center text-xl font-semibold text-gray-100">
            {wallet ? 'You have no staked $PAAL' : 'Connect your wallet'}
          </h1>
          {wallet ? (
            <button className="clipButton font-[Nippo] w-[170px] h-[40px] text-[15px]">
              Stake Now
            </button>
          ) : (
            <button
              onClick={() => connect()}
              className="clipButton font-[Nippo] w-[170px] h-[40px] text-[15px]"
            >
              {connecting ? "connecting" : "Connect Wallet"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Historyview;

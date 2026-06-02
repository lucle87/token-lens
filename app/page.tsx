"use client";

import { useState } from "react";

import Navbar from "../components/Navbar";
import TrustScore from "../components/TrustScore";
import Distribution from "../components/Distribution";
import Security from "../components/Security";
import TokenDetails from "../components/TokenDetails";
import Ticker from "../components/Ticker";
import Particles from "../components/Particles";

export default function Home() {

  const [address, setAddress] = useState("");
  const [tokenData, setTokenData] = useState<any>(null);

  async function analyzeToken() {

    try {

      const response = await fetch(
        "https://tokenlens-api.up.railway.app/api/token/" + address
      );

      const data = await response.json();

      setTokenData(data);

    } catch (error) {

      console.log(error);

    }

  }

  return (

    <main className="token-bg min-h-screen text-white">

      <Particles />

      <Ticker />

      <Navbar />

      <div className="max-w-7xl mx-auto p-10">

        <div className="grid grid-cols-3 gap-10">

          <div className="col-span-2">

            <h1 className="text-8xl font-bold leading-none">
              Know Before
              <br />
              <span className="text-zinc-500">
                You Trade.
              </span>
            </h1>

            <p className="text-zinc-400 text-2xl mt-8">
              Comprehensive token risk analysis for ARC ecosystem.
            </p>

            <div className="mt-12 bg-zinc-950 border border-zinc-900 rounded-3xl p-3 flex">

              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Search token or address..."
                className="flex-1 bg-transparent outline-none px-4"
              />

              <button
                onClick={analyzeToken}
                className="bg-white text-black px-8 py-4 rounded-2xl font-bold"
              >
                Analyze
              </button>

            </div>

            <div className="grid grid-cols-4 gap-4 mt-16">

  <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-5">
    <p className="text-zinc-500 text-sm">Tokens</p>
    <h2 className="text-3xl font-bold mt-2">12,543</h2>
  </div>

  <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-5">
    <p className="text-zinc-500 text-sm">Safe</p>
    <h2 className="text-3xl font-bold text-green-400 mt-2">
      8,214
    </h2>
  </div>

  <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-5">
    <p className="text-zinc-500 text-sm">Risky</p>
    <h2 className="text-3xl font-bold text-red-400 mt-2">
      1,632
    </h2>
  </div>

  <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-5">
    <p className="text-zinc-500 text-sm">New Today</p>
    <h2 className="text-3xl font-bold text-cyan-400 mt-2">
      87
    </h2>
  </div>

</div>

          </div>

          <div className="space-y-5">

            <TrustScore score={tokenData?.riskScore || 0} />

            <Distribution />

            <Security />

            <TokenDetails data={tokenData} />

          </div>

        </div>

      </div>

    </main>

  );

}
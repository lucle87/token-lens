"use client";

import { useState } from "react";

import Navbar from "../components/Navbar";
import TrustScore from "../components/TrustScore";
import Distribution from "../components/Distribution";
import Security from "../components/Security";
import TokenDetails from "../components/TokenDetails";
import Ticker from "../components/Ticker";

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

            <div className="flex gap-10 mt-16">

              <div>
                <h2 className="text-5xl font-bold">20+</h2>
                <p className="text-zinc-500">Risk Checks</p>
              </div>

              <div>
                <h2 className="text-5xl font-bold">Instant</h2>
                <p className="text-zinc-500">Analysis</p>
              </div>

              <div>
                <h2 className="text-5xl font-bold">Real-Time</h2>
                <p className="text-zinc-500">Updates</p>
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
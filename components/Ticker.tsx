"use client";

import { useEffect, useState } from "react";

export default function Ticker() {

  const [coins, setCoins] = useState<any[]>([]);

  function formatMC(mc: number) {

    if (!mc) return "N/A";

    if (mc >= 1_000_000_000_000) {
      return `$${(mc / 1_000_000_000_000).toFixed(1)}T`;
    }

    if (mc >= 1_000_000_000) {
      return `$${(mc / 1_000_000_000).toFixed(1)}B`;
    }

    if (mc >= 1_000_000) {
      return `$${(mc / 1_000_000).toFixed(1)}M`;
    }

    if (mc >= 1_000) {
      return `$${(mc / 1_000).toFixed(1)}K`;
    }

    return `$${mc}`;
  }

  async function loadTrending() {

    try {

      // lấy trending

      const trendingRes = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );

      const trendingData = await trendingRes.json();

      const ids = trendingData.coins
        .map((c: any) => c.item.id)
        .join(",");

      // lấy market data

      const marketRes = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&price_change_percentage=24h`
      );

      const marketData = await marketRes.json();

      const merged = trendingData.coins.map((coin: any) => {

        const market = marketData.find(
          (m: any) => m.id === coin.item.id
        );

        return {
          id: coin.item.id,
          symbol: coin.item.symbol,
          image: coin.item.small,
          marketCap: market?.market_cap || 0,
          change: market?.price_change_percentage_24h || 0,
        };

      });

      setCoins(merged);

    } catch (err) {

      console.log(err);

    }

  }

  useEffect(() => {

    loadTrending();

    const timer = setInterval(
      loadTrending,
      60000
    );

    return () => clearInterval(timer);

  }, []);

  return (

    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#050505",
        borderBottom: "1px solid #111",
        overflow: "hidden",
        height: "40px",
      }}
    >

      {/* LABEL */}

      <div
        style={{
          padding: "0 16px",
          color: "white",
          fontWeight: 700,
          flexShrink: 0,
          borderRight: "1px solid #111",
          background: "#050505",
          zIndex: 10,
        }}
      >
        Trending
      </div>

      {/* SCROLL */}

      <div
        style={{
          whiteSpace: "nowrap",
          display: "inline-block",
          animation: "ticker 50s linear infinite",
          paddingLeft: "100%",
          color: "#aaa",
        }}
      >

        {coins.map((coin) => (

          <span
            key={coin.id}
            style={{
              marginRight: "35px",
            }}
          >

            <img
              src={coin.image}
              alt={coin.symbol}
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                verticalAlign: "middle",
                marginRight: "6px",
                display: "inline-block",
              }}
            />

            <span
              style={{
                color: "#fff",
                fontWeight: 600,
              }}
            >
              {coin.symbol.toUpperCase()}
            </span>

            {" "}

            <span
              style={{
                color: "#9ca3af",
                fontSize: "13px",
              }}
            >
              {formatMC(coin.marketCap)}
            </span>

            {" "}

            <span
              style={{
                color:
                  coin.change >= 0
                    ? "#00ff88"
                    : "#ff4d4f",

                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {coin.change >= 0 ? "▲" : "▼"}
              {Math.abs(coin.change).toFixed(1)}%
            </span>

          </span>

        ))}

      </div>

    </div>

  );

}
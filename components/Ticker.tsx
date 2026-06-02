export default function Ticker() {
  return (
    <div
      style={{
        background: "#050505",
        borderBottom: "1px solid #111",
        overflow: "hidden",
        whiteSpace: "nowrap",
        color: "#aaa",
        padding: "8px 0",
      }}
    >
      <div
        style={{
          display: "inline-block",
          animation: "ticker 30s linear infinite",
          paddingLeft: "100%",
        }}
      >
        <span style={{ color: "#f7931a" }}>₿</span>
BTC $108,500
<span style={{ color: "#00ff88" }}> ▲2.1%</span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

<span style={{ color: "#627eea" }}>⬤</span>
ETH $4,250
<span style={{ color: "#00ff88" }}> ▲1.8%</span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

<span style={{ color: "#14f195" }}>◎</span>
SOL $245
<span style={{ color: "#00ff88" }}> ▲5.4%</span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

<span style={{ color: "#f3ba2f" }}>●</span>
BNB $920
<span style={{ color: "#00ff88" }}> ▲1.2%</span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

🐶 DOGE $0.32
<span style={{ color: "#00ff88" }}> ▲8.6%</span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

🐸 PEPE
<span style={{ color: "#00ff88" }}> ▲12.4%</span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

⚡ XRP
<span style={{ color: "#ff4444" }}> ▼3.1%</span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

💎 ADA
<span style={{ color: "#00ff88" }}> ▲2.7%</span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

🚀 SUI
<span style={{ color: "#00ff88" }}> ▲7.8%</span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

🔥 AVAX
<span style={{ color: "#ff4444" }}> ▼4.3%</span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

🌊 SEI
<span style={{ color: "#00ff88" }}> ▲9.1%</span>
      </div>
    </div>
  );
}
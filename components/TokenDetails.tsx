export default function TokenDetails({ data }: any) {

  if (!data) {
    return (
      <div className="bg-zinc-950 p-5 rounded-3xl">
        No token selected
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 p-5 rounded-3xl">

      <h2 className="text-xl font-bold mb-4">
        Token Details
      </h2>

      <p>Name: {data.name}</p>

      <p>Symbol: {data.symbol}</p>

      <p>Supply: {data.totalSupply}</p>

      <p>Risk Score: {data.riskScore}</p>

    </div>
  );
}
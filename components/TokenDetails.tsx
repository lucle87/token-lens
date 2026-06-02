export default function TokenDetails() {
  return (
    <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6">

      <h3 className="font-bold text-xl mb-5">
        Token Details
      </h3>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Name</span>
          <span>USDC</span>
        </div>

        <div className="flex justify-between">
          <span>Symbol</span>
          <span>USDC</span>
        </div>

        <div className="flex justify-between">
          <span>Supply</span>
          <span>52B</span>
        </div>

      </div>

    </div>
  );
}
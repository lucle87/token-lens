export default function Distribution() {
  return (
    <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6">

      <h3 className="font-bold text-xl mb-5">
        Distribution
      </h3>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Top 10 Holders</span>
          <span>22%</span>
        </div>

        <div className="w-full bg-zinc-800 h-2 rounded-full">
          <div className="bg-yellow-500 h-2 rounded-full w-[22%]"></div>
        </div>

        <div className="flex justify-between">
          <span>Dev Wallet</span>
          <span>3%</span>
        </div>

        <div className="w-full bg-zinc-800 h-2 rounded-full">
          <div className="bg-red-500 h-2 rounded-full w-[3%]"></div>
        </div>

      </div>

    </div>
  );
}
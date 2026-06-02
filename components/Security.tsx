export default function Security() {
  return (
    <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6">

      <h3 className="font-bold text-xl mb-5">
        Security
      </h3>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Mint Function</span>
          <span className="text-green-400">
            No
          </span>
        </div>

        <div className="flex justify-between">
          <span>Blacklist</span>
          <span className="text-green-400">
            No
          </span>
        </div>

        <div className="flex justify-between">
          <span>Ownership</span>
          <span className="text-yellow-400">
            Yes
          </span>
        </div>

      </div>

    </div>
  );
}
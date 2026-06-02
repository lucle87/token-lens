export default function Navbar() {
  return (
    <nav className="border-b border-zinc-900">

      <div className="max-w-7xl mx-auto flex items-center justify-between p-5">

        <h1 className="text-3xl font-bold">
          TokenLens
        </h1>

        <div className="flex gap-8 text-zinc-400">

          <span>Dashboard</span>

          <span>Tokens</span>

          <span>Security</span>

          <span>Docs</span>

        </div>

        <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold">

          Connect

        </button>

      </div>

    </nav>
  );
}
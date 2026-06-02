import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-900 bg-black/80 backdrop-blur">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <Image
            src="/tokenlens-logo.png"
            alt="TokenLens"
            width={60}
            height={60}
            className="
              rounded-full
              shadow-[0_0_25px_rgba(0,170,255,0.5)]
            "
          />

          <h1 className="text-4xl font-bold">
            TokenLens
          </h1>

        </div>

        {/* Menu */}

        <div className="flex gap-10 text-zinc-400 text-sm">

          <span className="hover:text-white cursor-pointer transition">
            Dashboard
          </span>

          <span className="hover:text-white cursor-pointer transition">
            Tokens
          </span>

          <span className="hover:text-white cursor-pointer transition">
            Security
          </span>

          <span className="hover:text-white cursor-pointer transition">
            Docs
          </span>

        </div>

        {/* Button */}

        <button
          className="
            bg-white
            text-black
            px-6
            py-2
            rounded-xl
            font-semibold
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Connect
        </button>

      </div>

    </nav>
  );
}
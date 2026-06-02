import {
  FaDiscord,
  FaTelegramPlane,
  FaGift,
  FaWallet,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-900 bg-black/80 backdrop-blur">

      <div className="w-full flex items-center justify-between px-8 py-4">

        {/* LOGO */}

        <div className="flex items-center gap-3">

          <Image
            src="/tokenlens-logo.png"
            alt="TokenLens"
            width={40}
            height={40}
            className="
              rounded-full
              shadow-[0_0_25px_rgba(0,170,255,0.5)]
            "
          />

          <h1 className="text-3xl font-bold whitespace-nowrap">
  TokenLens
</h1>

        </div>

        {/* MENU */}

       <div className="flex gap-10 text-zinc-400 text-sm">

  <span className="hover:text-white cursor-pointer transition">
    Dashboard
  </span>

  <span className="hover:text-white cursor-pointer transition">
    Swap
  </span>

  <span className="hover:text-white cursor-pointer transition">
    Bridge
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

        {/* SEARCH */}

        <div className="flex-1 max-w-md mx-8">

          <input
            placeholder="Search token..."
            className="
              w-full
              bg-zinc-950
              border
              border-zinc-800
              rounded-xl
              px-4
              py-3
              outline-none
              text-sm
              focus:border-green-500
            "
          />

        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-5">

          <a
            href="#"
            className="flex items-center gap-2 text-green-400 font-medium hover:text-green-300 transition"
          >
            <FaGift />
            <span>Affiliate</span>
          </a>

          <a
            href="https://x.com/token_lens"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition"
          >
            <FaXTwitter size={20} />
          </a>

          <a
            href="#"
            className="text-zinc-400 hover:text-white transition"
          >
            <FaDiscord size={20} />
          </a>

          <a
            href="#"
            className="text-zinc-400 hover:text-white transition"
          >
            <FaTelegramPlane size={20} />
          </a>

          <div className="h-8 w-px bg-zinc-800" />

          <button
            className="
              bg-zinc-900
              border
              border-zinc-800
              px-4
              py-2
              rounded-xl
              hover:border-zinc-600
              transition
            "
          >
            <FaWallet size={18} />
          </button>

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
            Login
          </button>

        </div>

      </div>

    </nav>
  );
}
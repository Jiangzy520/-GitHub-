"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0e1525] text-white py-10">
      <div className="gomining-container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and App Downloads */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="w-10 h-10 bg-[#7b4ddc] rounded-full flex items-center justify-center mr-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="white"/>
                  <path d="M9 5L12 10H8L11 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-2xl font-medium">gomining</span>
            </Link>

            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-3">Download our app</p>
              <div className="flex space-x-4">
                <Link href="https://play.google.com/store/apps/details?id=io.gmt.app.twa" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://app.gomining.com/assets/images/google-play.svg"
                    alt="Google Play"
                    width={120}
                    height={40}
                  />
                </Link>
                <Link href="https://apps.apple.com/app/id1622100275" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://app.gomining.com/assets/images/app-store.svg"
                    alt="App Store"
                    width={120}
                    height={40}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* My Miners */}
          <div>
            <h3 className="text-sm text-gray-400 uppercase font-semibold mb-4">My miners</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/nft-miners" className="text-white hover:text-[#7b4ddc] transition-colors">
                  Mining farm
                </Link>
              </li>
              <li>
                <Link href="/nft-dashboard" className="text-white hover:text-[#7b4ddc] transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/nft-rewards" className="text-white hover:text-[#7b4ddc] transition-colors">
                  Rewards
                </Link>
              </li>
              <li>
                <Link href="/nft-sell" className="text-white hover:text-[#7b4ddc] transition-colors">
                  Selling
                </Link>
              </li>
            </ul>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-sm text-gray-400 uppercase font-semibold mb-4">Marketplace</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/marketplace" className="text-white hover:text-[#7b4ddc] transition-colors">
                  Miners
                </Link>
              </li>
              <li>
                <Link href="/gominers-collection" className="text-white hover:text-[#7b4ddc] transition-colors">
                  GoMiners
                </Link>
              </li>
            </ul>
          </div>

          {/* GOMINING */}
          <div>
            <h3 className="text-sm text-gray-400 uppercase font-semibold mb-4">GOMINING</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/buy" className="text-white hover:text-[#7b4ddc] transition-colors">
                  Buy
                </Link>
              </li>
              <li>
                <Link href="/liquidity" className="text-white hover:text-[#7b4ddc] transition-colors">
                  Liquidity
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance */}
          <div>
            <h3 className="text-sm text-gray-400 uppercase font-semibold mb-4">Governance</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/ve-tokenomics" className="text-white hover:text-[#7b4ddc] transition-colors">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link href="/ve-my-lock" className="text-white hover:text-[#7b4ddc] transition-colors">
                  My lock
                </Link>
              </li>
              <li>
                <Link href="/ve-voting" className="text-white hover:text-[#7b4ddc] transition-colors">
                  Voting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              2025 GoMining All rights reserved
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-[#7b4ddc] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm text-gray-400 hover:text-[#7b4ddc] transition-colors">
                Cookies Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-[#7b4ddc] transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

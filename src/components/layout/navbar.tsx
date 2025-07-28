"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-[#0e1525] py-4 px-6 border-b border-gray-200 dark:border-gray-800">
      <div className="gomining-container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-[#7b4ddc] rounded-full flex items-center justify-center mr-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="white"/>
                <path d="M9 5L12 10H8L11 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-2xl font-medium text-gray-900 dark:text-white">gomining</span>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/nft-miners" className="text-gray-900 dark:text-white font-medium hover:text-[#7b4ddc] transition-colors">
              My miners
            </Link>
            <Link href="/marketplace" className="text-gray-500 dark:text-gray-400 font-medium hover:text-[#7b4ddc] transition-colors">
              Marketplace
            </Link>
            <Link href="/buy" className="text-gray-500 dark:text-gray-400 font-medium hover:text-[#7b4ddc] transition-colors">
              GOMINING
            </Link>
            <button className="text-gray-500 dark:text-gray-400 font-medium hover:text-[#7b4ddc] transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z" fill="currentColor"/>
                <path d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z" fill="currentColor"/>
                <path d="M3 15C3 14.4477 3.44772 14 4 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15Z" fill="currentColor"/>
              </svg>
            </button>
          </nav>
        </div>

        {/* Right side: Login/Get Started */}
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-[#7b4ddc] font-medium hover:underline">
            Log in
          </Link>
          <Link href="/register">
            <Button className="bg-[#7b4ddc] hover:bg-[#6a3dcb] rounded-full text-white px-6">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 5L21 12L13 19M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

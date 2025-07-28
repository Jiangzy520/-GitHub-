"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubNavbar() {
  const pathname = usePathname();

  // 检查路径是否匹配当前链接
  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + "/");
  };

  return (
    <div className="bg-white dark:bg-[#0e1525] border-b border-gray-200 dark:border-gray-800">
      <div className="gomining-container mx-auto">
        <nav className="flex space-x-8">
          <Link
            href="/nft-miners"
            className={`py-3 px-1 font-medium transition-colors border-b-2 ${
              isActive("/nft-miners")
                ? "border-[#7b4ddc] text-[#7b4ddc]"
                : "border-transparent text-gray-500 hover:text-[#7b4ddc] hover:border-gray-300"
            }`}
          >
            Mining farm
          </Link>
          <Link
            href="/nft-dashboard"
            className={`py-3 px-1 font-medium transition-colors border-b-2 ${
              isActive("/nft-dashboard")
                ? "border-[#7b4ddc] text-[#7b4ddc]"
                : "border-transparent text-gray-500 hover:text-[#7b4ddc] hover:border-gray-300"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/nft-rewards"
            className={`py-3 px-1 font-medium transition-colors border-b-2 ${
              isActive("/nft-rewards")
                ? "border-[#7b4ddc] text-[#7b4ddc]"
                : "border-transparent text-gray-500 hover:text-[#7b4ddc] hover:border-gray-300"
            }`}
          >
            Rewards
          </Link>
          <Link
            href="/nft-sell"
            className={`py-3 px-1 font-medium transition-colors border-b-2 ${
              isActive("/nft-sell")
                ? "border-[#7b4ddc] text-[#7b4ddc]"
                : "border-transparent text-gray-500 hover:text-[#7b4ddc] hover:border-gray-300"
            }`}
          >
            Selling
          </Link>
        </nav>
      </div>
    </div>
  );
}

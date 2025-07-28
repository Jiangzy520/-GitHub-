"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// 矿机数据
const miners = [
  {
    id: 1,
    name: "ASICminer X100",
    power: "100 TH/s",
    efficiency: "32 W/TH",
    price: 8500,
    rewards: "0.00045 BTC",
    image: "/miner1.png",
  },
  {
    id: 2,
    name: "BitPower S19",
    power: "95 TH/s",
    efficiency: "34 W/TH",
    price: 7900,
    rewards: "0.00042 BTC",
    image: "/miner2.png",
  },
  {
    id: 3,
    name: "HashMax Pro",
    power: "110 TH/s",
    efficiency: "30 W/TH",
    price: 9200,
    rewards: "0.00048 BTC",
    image: "/miner3.png",
  },
  {
    id: 4,
    name: "CryptoMiner T2",
    power: "90 TH/s",
    efficiency: "35 W/TH",
    price: 7500,
    rewards: "0.00040 BTC",
    image: "/miner4.png",
  },
  {
    id: 5,
    name: "BitDragon X9",
    power: "105 TH/s",
    efficiency: "31 W/TH",
    price: 8800,
    rewards: "0.00046 BTC",
    image: "/miner5.png",
  },
  {
    id: 6,
    name: "MiningBeam P7",
    power: "98 TH/s",
    efficiency: "33 W/TH",
    price: 8200,
    rewards: "0.00043 BTC",
    image: "/miner6.png",
  },
];

// 过滤选项
const filters = {
  price: [
    { label: "All Prices", value: "all" },
    { label: "Under $5,000", value: "under5k" },
    { label: "5,000 - 8,000", value: "5k-8k" },
    { label: "8,000 - 10,000", value: "8k-10k" },
    { label: "Over $10,000", value: "over10k" },
  ],
  power: [
    { label: "All Hashrates", value: "all" },
    { label: "Under 90 TH/s", value: "under90" },
    { label: "90 - 100 TH/s", value: "90-100" },
    { label: "Over 100 TH/s", value: "over100" },
  ],
};

export default function MarketplaceContent() {
  // 过滤和排序状态
  const [priceFilter, setPriceFilter] = useState("all");
  const [powerFilter, setPowerFilter] = useState("all");
  const [sortBy, setSortBy] = useState("price-asc");

  // 获取筛选后的矿机列表
  const filteredMiners = miners
    .filter((miner) => {
      // 价格筛选
      if (priceFilter === "under5k" && miner.price >= 5000) return false;
      if (priceFilter === "5k-8k" && (miner.price < 5000 || miner.price > 8000)) return false;
      if (priceFilter === "8k-10k" && (miner.price < 8000 || miner.price > 10000)) return false;
      if (priceFilter === "over10k" && miner.price <= 10000) return false;

      // 算力筛选
      const power = parseInt(miner.power);
      if (powerFilter === "under90" && power >= 90) return false;
      if (powerFilter === "90-100" && (power < 90 || power > 100)) return false;
      if (powerFilter === "over100" && power <= 100) return false;

      return true;
    })
    .sort((a, b) => {
      // 排序
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "power-asc") return parseInt(a.power) - parseInt(b.power);
      if (sortBy === "power-desc") return parseInt(b.power) - parseInt(a.power);
      return 0;
    });

  return (
    <div className="py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>
            <p className="text-gray-600 mt-1">
              Browse and purchase miners to grow your mining farm
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#7b4ddc] focus:border-transparent cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="power-asc">Power: Low to High</option>
                <option value="power-desc">Power: High to Low</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>
            <div className="space-y-2">
              {filters.price.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="price"
                    value={option.value}
                    checked={priceFilter === option.value}
                    onChange={() => setPriceFilter(option.value)}
                    className="text-[#7b4ddc] focus:ring-[#7b4ddc]"
                  />
                  <span className="ml-2 text-gray-600">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-700 mb-3">Hashrate</h3>
            <div className="space-y-2">
              {filters.power.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="power"
                    value={option.value}
                    checked={powerFilter === option.value}
                    onChange={() => setPowerFilter(option.value)}
                    className="text-[#7b4ddc] focus:ring-[#7b4ddc]"
                  />
                  <span className="ml-2 text-gray-600">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-700 mb-3">Quick Facts</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L8 11.586l4.293-4.293a1 1 0 011.414 1.414z"></path>
                </svg>
                Daily BTC rewards
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L8 11.586l4.293-4.293a1 1 0 011.414 1.414z"></path>
                </svg>
                No electricity costs
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L8 11.586l4.293-4.293a1 1 0 011.414 1.414z"></path>
                </svg>
                No maintenance required
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L8 11.586l4.293-4.293a1 1 0 011.414 1.414z"></path>
                </svg>
                Transparent payouts
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#7b4ddc] to-[#9161e8] p-4 rounded-lg text-white flex flex-col justify-between">
            <div>
              <h3 className="font-medium mb-2">Need Help Choosing?</h3>
              <p className="text-sm opacity-90 mb-4">
                Our experts can help you select the best miner for your investment goals.
              </p>
            </div>
            <Button className="bg-white text-[#7b4ddc] hover:bg-gray-100">
              Contact Support
            </Button>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredMiners.length} of {miners.length} miners
          </p>
        </div>

        {/* Miners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMiners.map((miner) => (
            <div key={miner.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
              <div className="p-6 flex items-center justify-center bg-gray-50 h-48">
                <div className="bg-[#7b4ddc10] rounded-full p-4 w-32 h-32 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <rect x="20" y="20" width="60" height="60" rx="5" fill="#f9f9f9" stroke="#e0e0e0" strokeWidth="2" />
                    <rect x="25" y="25" width="50" height="10" rx="2" fill="#7b4ddc" fillOpacity="0.7" />
                    <rect x="25" y="40" width="50" height="5" rx="1" fill="#7b4ddc" fillOpacity="0.5" />
                    <rect x="25" y="50" width="50" height="5" rx="1" fill="#7b4ddc" fillOpacity="0.5" />
                    <rect x="25" y="60" width="50" height="5" rx="1" fill="#7b4ddc" fillOpacity="0.5" />
                    <circle cx="40" cy="30" r="3" fill="#27bd9e" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{miner.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Hashrate:</span>
                    <span className="font-medium text-gray-900">{miner.power}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Efficiency:</span>
                    <span className="font-medium text-gray-900">{miner.efficiency}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Daily rewards:</span>
                    <span className="font-medium text-gray-900">{miner.rewards}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="text-[#7b4ddc] font-bold text-xl">${miner.price.toLocaleString()}</div>
                  <Button className="bg-[#7b4ddc] hover:bg-[#6a3dcb]">Buy Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

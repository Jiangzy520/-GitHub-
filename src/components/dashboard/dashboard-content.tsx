"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// 模拟数据
const statistics = {
  totalMiners: 3,
  totalHashrate: "280 TH/s",
  dailyRewards: "0.00130 BTC",
  monthlyRewards: "0.03900 BTC",
  totalEarned: "0.12450 BTC",
  bitcoinPrice: 63250,
};

// 收益历史
const rewardsHistory = [
  { date: "2023-06-20", amount: 0.00130, btcPrice: 63250 },
  { date: "2023-06-19", amount: 0.00128, btcPrice: 62890 },
  { date: "2023-06-18", amount: 0.00135, btcPrice: 64100 },
  { date: "2023-06-17", amount: 0.00131, btcPrice: 63500 },
  { date: "2023-06-16", amount: 0.00129, btcPrice: 63100 },
  { date: "2023-06-15", amount: 0.00127, btcPrice: 62500 },
  { date: "2023-06-14", amount: 0.00130, btcPrice: 63300 },
];

// 我的矿机
const myMiners = [
  {
    id: 1,
    name: "ASICminer X100",
    power: "100 TH/s",
    efficiency: "32 W/TH",
    rewards: "0.00045 BTC",
    status: "active",
    purchased: "2023-05-15",
  },
  {
    id: 2,
    name: "BitPower S19",
    power: "95 TH/s",
    efficiency: "34 W/TH",
    rewards: "0.00042 BTC",
    status: "active",
    purchased: "2023-04-22",
  },
  {
    id: 3,
    name: "HashMax Pro",
    power: "85 TH/s",
    efficiency: "36 W/TH",
    rewards: "0.00043 BTC",
    status: "active",
    purchased: "2023-03-10",
  },
];

export default function DashboardContent() {
  const [timeRange, setTimeRange] = useState("week");

  // 计算BTC总价值
  const dailyRewardsValue = parseFloat(statistics.dailyRewards.replace(" BTC", ""));
  const btcValue = (dailyRewardsValue * statistics.bitcoinPrice).toFixed(2);

  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Monitor your mining performance and rewards
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Miners</p>
                <h3 className="text-2xl font-bold mt-1">{statistics.totalMiners}</h3>
              </div>
              <div className="bg-purple-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-[#7b4ddc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-gray-500 text-sm">Total Hashrate</p>
              <p className="text-lg font-semibold mt-1">{statistics.totalHashrate}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm">Daily Rewards</p>
                <h3 className="text-2xl font-bold mt-1">{statistics.dailyRewards}</h3>
                <p className="text-gray-600 text-sm mt-1">${btcValue}</p>
              </div>
              <div className="bg-green-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-gray-500 text-sm">Monthly Estimated</p>
              <p className="text-lg font-semibold mt-1">{statistics.monthlyRewards}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Earned</p>
                <h3 className="text-2xl font-bold mt-1">{statistics.totalEarned}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  ${(parseFloat(statistics.totalEarned.replace(" BTC", "")) * statistics.bitcoinPrice).toFixed(2)}
                </p>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">BTC Price</p>
                <p className="text-lg font-semibold mt-1">${statistics.bitcoinPrice.toLocaleString()}</p>
              </div>
              <div className="text-green-500 font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
                1.2%
              </div>
            </div>
          </div>
        </div>

        {/* Rewards History */}
        <div className="mb-8 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 pb-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Rewards History</h2>
              <div className="mt-2 sm:mt-0 inline-flex bg-gray-100 rounded-lg p-1">
                <button
                  className={`px-3 py-1 text-sm rounded-md ${
                    timeRange === "week" ? "bg-white shadow-sm" : "text-gray-600"
                  }`}
                  onClick={() => setTimeRange("week")}
                >
                  Week
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-md ${
                    timeRange === "month" ? "bg-white shadow-sm" : "text-gray-600"
                  }`}
                  onClick={() => setTimeRange("month")}
                >
                  Month
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-md ${
                    timeRange === "year" ? "bg-white shadow-sm" : "text-gray-600"
                  }`}
                  onClick={() => setTimeRange("year")}
                >
                  Year
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    BTC Rewards
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    USD Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    BTC Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {rewardsHistory.map((reward, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(reward.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {reward.amount.toFixed(5)} BTC
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${(reward.amount * reward.btcPrice).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${reward.btcPrice.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* My Miners */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">My Miners</h2>
            <Link href="/marketplace">
              <Button className="bg-[#7b4ddc] hover:bg-[#6a3dcb]">
                Add New Miner
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myMiners.map((miner) => (
              <div key={miner.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">{miner.name}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {miner.status}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Purchased: {formatDate(miner.purchased)}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Hashrate</p>
                      <p className="font-medium">{miner.power}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Efficiency</p>
                      <p className="font-medium">{miner.efficiency}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Daily Rewards</p>
                      <p className="font-medium">{miner.rewards}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">USD Value</p>
                      <p className="font-medium">
                        ${(parseFloat(miner.rewards.replace(" BTC", "")) * statistics.bitcoinPrice).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

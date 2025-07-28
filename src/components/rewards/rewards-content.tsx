"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedPageContainer, AnimatedCard, AnimatedOnScroll } from "@/components/ui/animated-containers";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, Legend } from 'recharts';

// 模拟收益数据
const rewardsData = [
  { date: "Apr 1", rewards: 0.00045, usdValue: 28.45 },
  { date: "Apr 2", rewards: 0.00048, usdValue: 30.24 },
  { date: "Apr 3", rewards: 0.00042, usdValue: 26.46 },
  { date: "Apr 4", rewards: 0.00044, usdValue: 27.72 },
  { date: "Apr 5", rewards: 0.00047, usdValue: 29.61 },
  { date: "Apr 6", rewards: 0.00049, usdValue: 30.87 },
  { date: "Apr 7", rewards: 0.00051, usdValue: 32.13 },
  { date: "Apr 8", rewards: 0.00046, usdValue: 28.98 },
  { date: "Apr 9", rewards: 0.00043, usdValue: 27.09 },
  { date: "Apr 10", rewards: 0.00045, usdValue: 28.35 },
  { date: "Apr 11", rewards: 0.00047, usdValue: 29.61 },
  { date: "Apr 12", rewards: 0.00050, usdValue: 31.50 },
  { date: "Apr 13", rewards: 0.00052, usdValue: 32.76 },
  { date: "Apr 14", rewards: 0.00048, usdValue: 30.24 },
];

// 月度收益
const monthlyData = [
  { month: "Jan", rewards: 0.0146, usdValue: 920.00 },
  { month: "Feb", rewards: 0.0142, usdValue: 894.60 },
  { month: "Mar", rewards: 0.0151, usdValue: 951.30 },
  { month: "Apr", rewards: 0.0148, usdValue: 932.40 },
];

// 矿机收益贡献
const minerContributions = [
  { name: "ASICminer X100", rewards: 0.00051, percentage: 42 },
  { name: "BitPower S19", rewards: 0.00038, percentage: 31 },
  { name: "HashMax Pro", rewards: 0.00033, percentage: 27 },
];

// 自定义Tooltip的类型定义
type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    name: string;
    color: string;
  }>;
  label?: string;
};

export default function RewardsContent() {
  const [timeRange, setTimeRange] = useState("daily");
  const [viewMode, setViewMode] = useState("chart");

  // 计算总收益
  const totalDailyRewards = rewardsData.reduce((total, day) => total + day.rewards, 0);
  const totalUsdValue = rewardsData.reduce((total, day) => total + day.usdValue, 0);

  // 预计月收益
  const estimatedMonthlyRewards = totalDailyRewards * 30 / rewardsData.length;
  const estimatedMonthlyUsdValue = totalUsdValue * 30 / rewardsData.length;

  // 可提取收益
  const withdrawableRewards = 0.00536;
  const withdrawableUsdValue = 337.68;

  // 自定义图表tooltip
  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
          <p className="font-medium text-gray-900 dark:text-gray-100">{label}</p>
          <p className="text-[#7b4ddc]">
            <span className="font-medium">{payload[0].value.toFixed(5)} BTC</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            ${payload[1].value.toFixed(2)} USD
          </p>
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    if (timeRange === "daily") {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={rewardsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRewards" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7b4ddc" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#7b4ddc" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorUsd" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#27bd9e" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#27bd9e" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="date" tick={{ fill: '#666' }} />
            <YAxis yAxisId="left" tick={{ fill: '#666' }} />
            <YAxis yAxisId="right" orientation="right" tick={{ fill: '#666' }} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="rewards"
              stroke="#7b4ddc"
              fillOpacity={1}
              fill="url(#colorRewards)"
              yAxisId="left"
            />
            <Area
              type="monotone"
              dataKey="usdValue"
              stroke="#27bd9e"
              fillOpacity={1}
              fill="url(#colorUsd)"
              yAxisId="right"
            />
          </AreaChart>
        </ResponsiveContainer>
      );
    } else if (timeRange === "monthly") {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" tick={{ fill: '#666' }} />
            <YAxis yAxisId="left" tick={{ fill: '#666' }} />
            <YAxis yAxisId="right" orientation="right" tick={{ fill: '#666' }} />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="rewards" fill="#7b4ddc" name="BTC Rewards" />
            <Bar yAxisId="right" dataKey="usdValue" fill="#27bd9e" name="USD Value" />
          </BarChart>
        </ResponsiveContainer>
      );
    } else {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={minerContributions} layout="vertical" margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis type="number" tick={{ fill: '#666' }} />
            <YAxis dataKey="name" type="category" tick={{ fill: '#666' }} width={120} />
            <Tooltip />
            <Bar dataKey="rewards" fill="#7b4ddc" name="BTC Rewards" />
            <Bar dataKey="percentage" fill="#27bd9e" name="Contribution %" />
          </BarChart>
        </ResponsiveContainer>
      );
    }
  };

  return (
    <AnimatedPageContainer className="py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Rewards</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track and withdraw your mining rewards
          </p>
        </div>

        {/* Rewards Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <AnimatedCard className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-sm text-gray-500 dark:text-gray-400 uppercase font-medium">Daily Rewards</h3>
            <div className="mt-2">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{(totalDailyRewards / rewardsData.length).toFixed(5)} BTC</div>
              <div className="text-gray-600 dark:text-gray-400">${(totalUsdValue / rewardsData.length).toFixed(2)} USD</div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">Last payout</span>
                <span className="text-sm font-medium">6 hours ago</span>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-sm text-gray-500 dark:text-gray-400 uppercase font-medium">Monthly Estimate</h3>
            <div className="mt-2">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{estimatedMonthlyRewards.toFixed(5)} BTC</div>
              <div className="text-gray-600 dark:text-gray-400">${estimatedMonthlyUsdValue.toFixed(2)} USD</div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">Growth</span>
                <span className="text-sm font-medium text-green-500">+2.4% this month</span>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard className="bg-gradient-to-br from-[#7b4ddc] to-[#9161e8] rounded-lg shadow-sm p-6 text-white">
            <h3 className="text-sm uppercase font-medium opacity-90">Available to Withdraw</h3>
            <div className="mt-2">
              <div className="text-2xl font-bold">{withdrawableRewards.toFixed(5)} BTC</div>
              <div className="opacity-90">${withdrawableUsdValue.toFixed(2)} USD</div>
            </div>
            <div className="mt-4">
              <Button
                className="bg-white text-[#7b4ddc] hover:bg-gray-100 w-full"
              >
                Withdraw Rewards
              </Button>
            </div>
          </AnimatedCard>
        </div>

        {/* Chart Section */}
        <AnimatedOnScroll className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-0">Rewards History</h2>
            <div className="flex space-x-2">
              <div className="inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  className={`px-3 py-1 text-sm rounded-md ${
                    timeRange === "daily" ? "bg-white dark:bg-gray-600 shadow-sm" : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setTimeRange("daily")}
                >
                  Daily
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-md ${
                    timeRange === "monthly" ? "bg-white dark:bg-gray-600 shadow-sm" : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setTimeRange("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-md ${
                    timeRange === "by-miner" ? "bg-white dark:bg-gray-600 shadow-sm" : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setTimeRange("by-miner")}
                >
                  By Miner
                </button>
              </div>
              <div className="inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  className={`px-3 py-1 text-sm rounded-md ${
                    viewMode === "chart" ? "bg-white dark:bg-gray-600 shadow-sm" : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setViewMode("chart")}
                >
                  Chart
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-md ${
                    viewMode === "table" ? "bg-white dark:bg-gray-600 shadow-sm" : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setViewMode("table")}
                >
                  Table
                </button>
              </div>
            </div>
          </div>

          {viewMode === "chart" ? (
            <div className="mt-4">
              {renderChart()}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      {timeRange === "by-miner" ? "Miner" : "Date"}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      BTC Rewards
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      USD Value
                    </th>
                    {timeRange === "by-miner" && (
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Contribution %
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {timeRange === "daily" && rewardsData.map((day, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                        {day.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200 font-medium">
                        {day.rewards.toFixed(5)} BTC
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                        ${day.usdValue.toFixed(2)}
                      </td>
                    </tr>
                  ))}

                  {timeRange === "monthly" && monthlyData.map((month, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                        {month.month}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200 font-medium">
                        {month.rewards.toFixed(5)} BTC
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                        ${month.usdValue.toFixed(2)}
                      </td>
                    </tr>
                  ))}

                  {timeRange === "by-miner" && minerContributions.map((miner, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                        {miner.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200 font-medium">
                        {miner.rewards.toFixed(5)} BTC
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                        ${(miner.rewards * 63000).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                        {miner.percentage}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </AnimatedOnScroll>

        {/* Withdrawal History */}
        <AnimatedOnScroll className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Withdrawal History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    USD Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                    Mar 15, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200 font-medium">
                    0.02450 BTC
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                    $1,543.50
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                    Feb 12, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200 font-medium">
                    0.01890 BTC
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                    $1,190.70
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                    Jan 8, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200 font-medium">
                    0.02100 BTC
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                    $1,323.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimatedOnScroll>
      </div>
    </AnimatedPageContainer>
  );
}

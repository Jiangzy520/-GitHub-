"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedPageContainer, AnimatedCard, AnimatedOnScroll, AnimatedButton } from "@/components/ui/animated-containers";
import { motion } from "framer-motion";

// 模拟我的矿机数据
const myMiners = [
  {
    id: 1,
    name: "ASICminer X100",
    power: "100 TH/s",
    efficiency: "32 W/TH",
    rewards: "0.00045 BTC",
    price: 8500,
    status: "active",
    purchased: "2023-05-15",
    image: "/miner1.png",
  },
  {
    id: 2,
    name: "BitPower S19",
    power: "95 TH/s",
    efficiency: "34 W/TH",
    rewards: "0.00042 BTC",
    price: 7900,
    status: "active",
    purchased: "2023-04-22",
    image: "/miner2.png",
  },
  {
    id: 3,
    name: "HashMax Pro",
    power: "85 TH/s",
    efficiency: "36 W/TH",
    rewards: "0.00043 BTC",
    price: 7500,
    status: "active",
    purchased: "2023-03-10",
    image: "/miner3.png",
  },
];

// 模拟销售历史
const salesHistory = [
  {
    id: 101,
    name: "CryptoMiner T2",
    power: "90 TH/s",
    soldPrice: 7200,
    soldDate: "2023-02-10",
    buyer: "0x7a2...9f4d",
  },
  {
    id: 102,
    name: "BitDragon X9",
    power: "105 TH/s",
    soldPrice: 8800,
    soldDate: "2023-01-05",
    buyer: "0x3c5...1e8b",
  },
];

export default function SellingContent() {
  const [selectedMiner, setSelectedMiner] = useState<number | null>(null);
  const [listingPrice, setListingPrice] = useState<string>("");
  const [step, setStep] = useState(1);

  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // 处理选择矿机
  const handleSelectMiner = (id: number) => {
    setSelectedMiner(id);
    const miner = myMiners.find(m => m.id === id);
    if (miner) {
      setListingPrice(miner.price.toString());
    }
    setStep(2);
  };

  // 处理价格输入
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListingPrice(e.target.value);
  };

  // 提交列表
  const handleSubmitListing = () => {
    // 在实际应用中，这里会将矿机上架到市场
    setStep(3);
  };

  // 渲染当前步骤
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Select a miner to sell</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myMiners.map((miner) => (
                <motion.div
                  key={miner.id}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#7b4ddc]"
                  onClick={() => handleSelectMiner(miner.id)}
                >
                  <div className="p-6 flex items-center justify-center bg-gray-50 dark:bg-gray-900 h-48">
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
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{miner.name}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Hashrate:</span>
                        <span className="font-medium text-gray-900 dark:text-gray-200">{miner.power}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Efficiency:</span>
                        <span className="font-medium text-gray-900 dark:text-gray-200">{miner.efficiency}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Daily rewards:</span>
                        <span className="font-medium text-gray-900 dark:text-gray-200">{miner.rewards}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Purchase date:</span>
                        <span className="font-medium text-gray-900 dark:text-gray-200">{formatDate(miner.purchased)}</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Purchase price:</span>
                        <span className="font-bold text-gray-900 dark:text-white">${miner.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 2:
        const selectedMinerData = myMiners.find(m => m.id === selectedMiner);

        return (
          <div className="space-y-6">
            <Button
              variant="outline"
              className="mb-4"
              onClick={() => setStep(1)}
            >
              &larr; Back to selection
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Set your selling price</h2>

                {selectedMinerData && (
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#7b4ddc10] rounded-full p-2 w-10 h-10 flex items-center justify-center mr-3">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                          <rect x="4" y="4" width="16" height="16" rx="2" fill="#7b4ddc" fillOpacity="0.2" />
                          <path d="M12 8v8M8 12h8" stroke="#7b4ddc" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{selectedMinerData.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{selectedMinerData.power}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Listing Price (USD)
                        </label>
                        <div className="relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 dark:text-gray-400 sm:text-sm">$</span>
                          </div>
                          <input
                            type="number"
                            name="price"
                            id="price"
                            value={listingPrice}
                            onChange={handlePriceChange}
                            className="block w-full pl-7 pr-12 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b4ddc] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="0.00"
                          />
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Market Information</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">Purchase price:</span>
                            <span className="font-medium text-gray-900 dark:text-gray-200">${selectedMinerData.price.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">Market average:</span>
                            <span className="font-medium text-gray-900 dark:text-gray-200">${(selectedMinerData.price * 0.95).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">Platform fee (2.5%):</span>
                            <span className="font-medium text-gray-900 dark:text-gray-200">${(parseFloat(listingPrice) * 0.025).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">You'll receive:</span>
                            <span className="font-bold text-gray-900 dark:text-white">${(parseFloat(listingPrice) * 0.975).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <AnimatedButton className="w-full">
                  <Button
                    className="w-full bg-[#7b4ddc] hover:bg-[#6a3dcb]"
                    onClick={handleSubmitListing}
                  >
                    List for Sale
                  </Button>
                </AnimatedButton>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Listing Preview</h2>

                {selectedMinerData && (
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <div className="p-6 flex items-center justify-center bg-gray-50 dark:bg-gray-900 h-48">
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
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{selectedMinerData.name}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Hashrate:</span>
                          <span className="font-medium text-gray-900 dark:text-gray-200">{selectedMinerData.power}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Efficiency:</span>
                          <span className="font-medium text-gray-900 dark:text-gray-200">{selectedMinerData.efficiency}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Daily rewards:</span>
                          <span className="font-medium text-gray-900 dark:text-gray-200">{selectedMinerData.rewards}</span>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex justify-between items-center">
                          <span className="text-[#7b4ddc] font-bold text-xl">${listingPrice}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Ready to list</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="max-w-lg mx-auto text-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Miner Listed Successfully!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Your miner has been listed on the marketplace. You'll be notified when it sells.
              </p>
              <div className="flex space-x-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                >
                  List Another Miner
                </Button>
                <Button
                  className="bg-[#7b4ddc] hover:bg-[#6a3dcb]"
                  onClick={() => window.location.href = "/marketplace"}
                >
                  View Marketplace
                </Button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <AnimatedPageContainer className="py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Selling</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Sell your miners on the marketplace
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          {renderStep()}
        </div>

        {/* Sales History */}
        {step !== 3 && (
          <AnimatedOnScroll className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Sales History</h2>
            {salesHistory.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Miner
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Hashrate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Sale Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Date Sold
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Buyer
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {salesHistory.map((sale) => (
                      <tr key={sale.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200 font-medium">
                          {sale.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          {sale.power}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          ${sale.soldPrice.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          {formatDate(sale.soldDate)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          {sale.buyer}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">You haven't sold any miners yet.</p>
              </div>
            )}
          </AnimatedOnScroll>
        )}
      </div>
    </AnimatedPageContainer>
  );
}

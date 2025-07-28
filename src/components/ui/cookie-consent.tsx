"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  // 在组件挂载后检查cookie同意状态
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setIsVisible(false);
  };

  const customize = () => {
    // 实际应用中，这里会打开一个更详细的cookie设置面板
    localStorage.setItem("cookie-consent", "customized");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="mx-auto max-w-4xl bg-white dark:bg-[#0e1525] rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-full mr-3">
                  <svg className="h-6 w-6 text-[#7b4ddc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                    <path d="M12 16V12" strokeLinecap="round" />
                    <circle cx="12" cy="8" r="1" fill="currentColor" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold">Cookies</h2>
                <button
                  onClick={() => setIsVisible(false)}
                  className="ml-auto text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We use cookies to enhance your experience, personalize content, analyze site traffic, and provide social media features. Cookies help us understand how you interact with our website, allowing us to improve its functionality. All cookies are accepted by default.
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                <Link href="/privacy" className="text-[#7b4ddc] hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-[#7b4ddc] hover:underline">
                  Terms of Use
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  onClick={customize}
                  variant="outline"
                  className="border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Customize
                </Button>
                <Button
                  onClick={acceptNecessary}
                  variant="outline"
                  className="border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Accept necessary
                </Button>
                <Button
                  onClick={acceptAll}
                  className="bg-[#7b4ddc] hover:bg-[#6a3dcb] text-white"
                >
                  Accept all
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

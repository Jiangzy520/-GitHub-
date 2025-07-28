"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center max-w-3xl mx-auto">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        className="mb-8 relative"
      >
        {/* Main miner image */}
        <Image
          src="https://app.gomining.com/assets/images/nft/board/miners-empty.png"
          alt="Mining Rig"
          width={400}
          height={400}
          className="z-10 relative"
        />

        {/* Lightning and stars effects */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Purple lightning bolt - top right */}
          <motion.div
            className="absolute top-[20%] right-[15%] z-20"
            animate={{
              opacity: [0.7, 1, 0.7],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L10 30H20L2.5 60L37.5 22.5H20L30 0H20Z" fill="#7b4ddc" />
            </svg>
          </motion.div>

          {/* Purple star - top left */}
          <motion.div
            className="absolute top-[15%] left-[20%] z-20"
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L12.3 7.7L20 10L12.3 12.3L10 20L7.7 12.3L0 10L7.7 7.7L10 0Z" fill="#7b4ddc" />
            </svg>
          </motion.div>

          {/* Purple lightning bolt - bottom left */}
          <motion.div
            className="absolute bottom-[40%] left-[10%] z-20"
            animate={{
              opacity: [0.5, 1, 0.5],
              rotate: [0, -3, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <svg width="50" height="70" viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 0L12.5 35H25L3.125 70L46.875 26.25H25L37.5 0H25Z" fill="#7b4ddc" />
            </svg>
          </motion.div>

          {/* Purple star - right side */}
          <motion.div
            className="absolute top-[40%] right-[15%] z-20"
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L12.3 7.7L20 10L12.3 12.3L10 20L7.7 12.3L0 10L7.7 7.7L10 0Z" fill="#7b4ddc" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="space-y-6 max-w-lg mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-3xl font-bold text-gray-800"
        >
          Grow your mining farm
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-gray-600 mb-8 text-lg"
        >
          Create your first miner to start earning BTC. The bigger your mining farm, the higher your rewards!
        </motion.p>

        <motion.div
          className="flex justify-center pt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <Link href="/login">
            <Button
              className="bg-[#7b4ddc] hover:bg-[#6a3dcb] rounded-full px-10 py-6 h-12 text-base font-medium"
              size="lg"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 5L21 12L13 19M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Get started
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

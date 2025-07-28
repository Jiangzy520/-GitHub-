"use client"

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MiningRig3D() {
  const [isActive, setIsActive] = useState(true);
  const [sparkles, setSparkles] = useState(true);

  useEffect(() => {
    // Add a simple animation timer
    const timer = setInterval(() => {
      setIsActive(prev => !prev);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative w-full h-[400px] flex items-center justify-center">
        {/* Lightning effects */}
        <motion.div
          className="absolute top-8 right-20 z-10"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isActive ? [0.4, 1, 0.4] : 0,
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 0L20 60H40L5 120L75 45H40L60 0H40Z" fill="#8a5cf6" />
          </svg>
        </motion.div>

        {/* Sparkle effects */}
        {sparkles && (
          <>
            <motion.div
              className="absolute top-10 left-16 z-10"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0L18.5 11.5L30 15L18.5 18.5L15 30L11.5 18.5L0 15L11.5 11.5L15 0Z" fill="#8a5cf6" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute bottom-10 right-20 z-10"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0L18.5 11.5L30 15L18.5 18.5L15 30L11.5 18.5L0 15L11.5 11.5L15 0Z" fill="#8a5cf6" />
              </svg>
            </motion.div>
          </>
        )}

        {/* Main mining rig */}
        <motion.div
          className="relative z-0"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* SVG version of the mining rig */}
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main case */}
            <rect x="80" y="80" width="140" height="140" rx="8" fill="#E8E8E8" stroke="#D0D0D0" strokeWidth="2" />
            <rect x="82" y="82" width="136" height="136" rx="6" fill="#F5F5F5" />

            {/* Top panel - wave display */}
            <rect x="90" y="90" width="120" height="35" rx="4" fill="#333" />
            <motion.path
              d="M100,107 Q110,97 120,107 T140,107 T160,107"
              stroke="#8a5cf6"
              strokeWidth="2"
              fill="none"
              animate={{
                d: [
                  "M100,107 Q110,97 120,107 T140,107 T160,107",
                  "M100,107 Q110,117 120,107 T140,107 T160,107",
                  "M100,107 Q110,97 120,107 T140,117 T160,107",
                  "M100,107 Q110,107 120,97 T140,107 T160,107"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Middle section - display */}
            <rect x="90" y="135" width="60" height="60" rx="4" fill="#333" />
            <motion.rect
              x="100"
              y="145"
              width="40"
              height="40"
              rx="2"
              fill="#22c55e"
              animate={{
                opacity: isActive ? [0.6, 1, 0.6] : 0.3,
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.path
              d="M110 165L120 155M120 155L130 165M120 155L120 175"
              stroke="#333"
              strokeWidth="2"
              animate={{
                opacity: isActive ? 1 : 0.5,
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />

            {/* Right panel - controls */}
            <rect x="160" y="135" width="50" height="60" rx="4" fill="#333" />
            <circle cx="175" cy="150" r="5" fill="#666" />
            <circle cx="195" cy="150" r="5" fill="#666" />
            {[...Array(6)].map((_, i) => (
              <motion.rect
                key={i}
                x={165 + (i % 3) * 15}
                y={165 + Math.floor(i / 3) * 15}
                width="10"
                height="5"
                rx="1"
                fill="#444"
                animate={{
                  fill: (isActive && i % 2 === 0) ? ['#444', '#555', '#444'] : '#444'
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            ))}

            {/* Bottom section - fans */}
            <rect x="90" y="205" width="120" height="45" rx="4" fill="#333" />

            {/* Left fan */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: '120px 227px' }}
            >
              <motion.circle
                cx="120"
                cy="227"
                r="18"
                fill="#8a5cf6"
                animate={{
                  opacity: isActive ? [0.7, 1, 0.7] : 0.3,
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {[...Array(6)].map((_, i) => (
                <rect
                  key={i}
                  x="119"
                  y="209"
                  width="2"
                  height="16"
                  fill="white"
                  fillOpacity="0.6"
                  style={{
                    transformOrigin: '120px 227px',
                    transform: `rotate(${i * 60}deg)`
                  }}
                />
              ))}
              <circle cx="120" cy="227" r="5" fill="#333" />
            </motion.g>

            {/* Right fan */}
            <motion.g
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: '180px 227px' }}
            >
              <motion.circle
                cx="180"
                cy="227"
                r="18"
                fill="#8a5cf6"
                animate={{
                  opacity: isActive ? [0.7, 1, 0.7] : 0.3,
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              {[...Array(6)].map((_, i) => (
                <rect
                  key={i}
                  x="179"
                  y="209"
                  width="2"
                  height="16"
                  fill="white"
                  fillOpacity="0.6"
                  style={{
                    transformOrigin: '180px 227px',
                    transform: `rotate(${i * 60}deg)`
                  }}
                />
              ))}
              <circle cx="180" cy="227" r="5" fill="#333" />
            </motion.g>

            {/* Right side - pickaxe icon */}
            <g transform="translate(230, 150) rotate(-15)">
              <rect x="-10" y="-15" width="5" height="30" rx="1" fill="#8a5cf6" />
              <rect x="-10" y="-15" width="12" height="5" rx="1" fill="#8a5cf6" />
              <circle cx="10" cy="5" r="8" fill="#fcd34d" />
            </g>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

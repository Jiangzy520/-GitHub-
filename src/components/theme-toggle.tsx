"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export function AnimatedThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: isDark ? 'rgba(123, 77, 220, 0.15)' : 'rgba(123, 77, 220, 0.1)'
      }}
    >
      {/* Stars for dark mode */}
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isDark ? [0, 1, 0] : 0,
              scale: isDark ? [0.8, 1.2, 0.8] : 0.8,
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5 + Math.random(),
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Sun with rays */}
      <motion.div
        className="absolute"
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
          opacity: { duration: 0.2 }
        }}
      >
        <motion.div
          className="relative"
          animate={{ rotate: isDark ? 0 : 360 }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear"
          }}
        >
          <div className="w-5 h-5 rounded-full bg-yellow-500 shadow-lg" />
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-2 bg-yellow-500"
              style={{
                top: '50%',
                left: '50%',
                marginLeft: '-0.5px',
                marginTop: '-1px',
                transformOrigin: '50% 0',
                transform: `rotate(${i * 45}deg) translateY(-4px)`,
              }}
              animate={{
                scaleY: [1, 1.3, 1],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Moon */}
      <motion.div
        className="absolute"
        animate={{
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
          opacity: { duration: 0.2 }
        }}
      >
        <div className="w-5 h-5 rounded-full bg-gray-200 shadow-inner relative overflow-hidden">
          {/* Moon crater */}
          <div
            className="absolute w-2 h-2 rounded-full bg-gray-300"
            style={{ top: '30%', left: '20%' }}
          />
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-gray-300"
            style={{ top: '50%', left: '60%' }}
          />
          {/* Shadow part of the moon */}
          <div
            className="absolute w-3 h-5 rounded-full bg-gray-800 opacity-10"
            style={{ top: '-10%', right: '-10%' }}
          />
        </div>
      </motion.div>
    </motion.button>
  )
}

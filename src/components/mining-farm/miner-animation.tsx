"use client"

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function MinerAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布尺寸
    canvas.width = 300;
    canvas.height = 300;

    // 矿机基本颜色
    const colors = {
      case: '#f0f0f0',
      caseShadow: '#d0d0d0',
      accent: '#7b4ddc',
      highlight: '#a77ef2',
      fan: '#444',
      fanBlade: '#555',
      led: '#4ade80',
      ledOff: '#202020',
      circuit: '#333',
      bolts: '#888',
      shadow: 'rgba(0,0,0,0.1)',
    };

    // 动画状态
    let frame = 0;
    let fanRotation = 0;
    let powerPulse = 0;
    let ledState = true;
    let ledTimer = 0;
    let dataFlowTimer = 0;

    // 绘制矿机外壳
    const drawCase = () => {
      // 外壳阴影
      ctx.fillStyle = colors.shadow;
      ctx.beginPath();
      ctx.roundRect(85, 85, 140, 140, 5);
      ctx.fill();

      // 主体外壳
      ctx.fillStyle = colors.caseShadow;
      ctx.beginPath();
      ctx.roundRect(82, 82, 140, 140, 5);
      ctx.fill();

      ctx.fillStyle = colors.case;
      ctx.beginPath();
      ctx.roundRect(80, 80, 140, 140, 5);
      ctx.fill();

      // 边框
      ctx.strokeStyle = '#ddd';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(80, 80, 140, 140, 5);
      ctx.stroke();

      // 通风口和散热
      ctx.fillStyle = '#111';
      ctx.fillRect(90, 100, 10, 100);
      ctx.fillRect(200, 100, 10, 100);

      // 机身细节
      ctx.fillStyle = '#eaeaea';
      ctx.fillRect(105, 85, 90, 10);

      // 品牌标志
      ctx.fillStyle = colors.accent;
      ctx.beginPath();
      ctx.arc(140, 90, 3, 0, Math.PI * 2);
      ctx.fill();

      // 机箱细节线条
      ctx.strokeStyle = '#e0e0e0';
      ctx.beginPath();
      ctx.moveTo(105, 195);
      ctx.lineTo(195, 195);
      ctx.stroke();
    };

    // 绘制风扇
    const drawFan = () => {
      const fanX = 150;
      const fanY = 150;
      const fanRadius = 30;

      // 风扇背景
      ctx.fillStyle = colors.fan;
      ctx.beginPath();
      ctx.arc(fanX, fanY, fanRadius, 0, Math.PI * 2);
      ctx.fill();

      // 风扇叶片
      ctx.fillStyle = colors.fanBlade;
      for (let i = 0; i < 5; i++) {
        ctx.save();
        ctx.translate(fanX, fanY);
        ctx.rotate(fanRotation + (i * Math.PI * 2) / 5);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-15, -10);
        ctx.lineTo(-5, -25);
        ctx.lineTo(5, -25);
        ctx.lineTo(15, -10);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      // 风扇中心
      ctx.fillStyle = '#333';
      ctx.beginPath();
      ctx.arc(fanX, fanY, 8, 0, Math.PI * 2);
      ctx.fill();

      // 风扇边缘高光
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(fanX, fanY, fanRadius, 0, Math.PI * 2);
      ctx.stroke();
    };

    // 绘制电路和LED
    const drawElectronics = () => {
      // 电路板
      ctx.fillStyle = colors.circuit;
      ctx.fillRect(100, 110, 100, 20);

      // 绘制LED灯
      const ledSize = 5;
      ctx.fillStyle = ledState ? colors.led : colors.ledOff;
      ctx.beginPath();
      ctx.arc(110, 120, ledSize, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = ledState ? colors.accent : colors.ledOff;
      ctx.beginPath();
      ctx.arc(130, 120, ledSize, 0, Math.PI * 2);
      ctx.fill();

      // 添加闪烁效果
      if (ledState) {
        ctx.fillStyle = ledState ? 'rgba(74, 222, 128, 0.2)' : 'rgba(0, 0, 0, 0)';
        ctx.beginPath();
        ctx.arc(110, 120, ledSize * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = ledState ? 'rgba(123, 77, 220, 0.2)' : 'rgba(0, 0, 0, 0)';
        ctx.beginPath();
        ctx.arc(130, 120, ledSize * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // 散热片
      for (let i = 0; i < 6; i++) {
        ctx.fillStyle = colors.bolts;
        ctx.fillRect(105 + i * 15, 140, 10, 40);
      }

      // 数据流动效果
      drawDataFlow();
    };

    // 数据流动效果
    const drawDataFlow = () => {
      dataFlowTimer += 0.2;
      const yPos = 120;

      // 数据线
      ctx.strokeStyle = '#444';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(140, yPos - 10);
      ctx.lineTo(190, yPos - 10);
      ctx.stroke();

      // 数据包
      const packetPos = (dataFlowTimer % 50);
      if (packetPos < 50) {
        ctx.fillStyle = colors.accent;
        ctx.beginPath();
        ctx.arc(140 + packetPos, yPos - 10, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // 绘制能量脉冲
    const drawPowerPulse = () => {
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 2;

      const pulseSize = 20 + powerPulse * 30;
      const alpha = 1 - powerPulse;

      ctx.globalAlpha = alpha * 0.5;
      ctx.beginPath();
      ctx.arc(150, 150, pulseSize, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(150, 150, pulseSize * 0.7, 0, Math.PI * 2);
      ctx.stroke();

      ctx.globalAlpha = 1;
    };

    // 绘制闪电效果
    const drawLightning = () => {
      if (Math.random() > 0.93) {
        ctx.strokeStyle = colors.highlight;
        ctx.lineWidth = 2;

        // 随机闪电起点
        const startX = 120 + Math.random() * 60;
        const startY = 70;

        ctx.beginPath();
        ctx.moveTo(startX, startY);

        let x = startX;
        let y = startY;

        // 创建锯齿形闪电路径
        for (let i = 0; i < 5; i++) {
          const newX = x + (Math.random() * 30 - 15);
          const newY = y + 10 + Math.random() * 10;

          ctx.lineTo(newX, newY);
          x = newX;
          y = newY;
        }

        // 确保闪电连接到矿机
        ctx.lineTo(150, 80);
        ctx.stroke();

        // 闪电发光效果
        ctx.save();
        ctx.strokeStyle = 'rgba(167, 126, 242, 0.3)';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        x = startX;
        y = startY;
        for (let i = 0; i < 5; i++) {
          const newX = x + (Math.random() * 30 - 15);
          const newY = y + 10 + Math.random() * 10;
          ctx.lineTo(newX, newY);
          x = newX;
          y = newY;
        }
        ctx.lineTo(150, 80);
        ctx.stroke();
        ctx.restore();
      }
    };

    // 绘制挖矿符号
    const drawMiningSymbol = () => {
      if (Math.random() > 0.97) {
        const x = 90 + Math.random() * 120;
        const y = 200 + Math.random() * 30;

        ctx.fillStyle = 'rgba(123, 77, 220, 0.7)';
        ctx.font = '10px monospace';
        ctx.fillText('₿', x, y);

        // 币符号向上浮动动画效果
        setTimeout(() => {
          ctx.clearRect(x-5, y-10, 10, 10);
        }, 500);
      }
    };

    // 动画循环
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 背景
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 绘制所有元素
      drawCase();
      drawElectronics();
      drawFan();
      drawLightning();
      drawPowerPulse();
      drawMiningSymbol();

      // 更新动画状态
      fanRotation += 0.05;
      powerPulse += 0.01;
      if (powerPulse > 1) powerPulse = 0;

      ledTimer++;
      if (ledTimer > 30) {
        ledTimer = 0;
        if (Math.random() > 0.7) ledState = !ledState;
      }

      frame++;
      requestAnimationFrame(animate);
    };

    // 开始动画
    animate();

    // 清理
    return () => {
      // 如果需要清理的话
    };
  }, []);

  return (
    <div className="relative w-72 h-72 mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ maxWidth: '300px', maxHeight: '300px' }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-40 h-40 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full blur-md" />
        </motion.div>
      </motion.div>
    </div>
  );
}

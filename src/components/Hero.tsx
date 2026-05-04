import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-widest text-sm md:text-base opacity-80 mb-4">Автоматическая скупка</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ПРОДАЙ<br />АККАУНТ
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 mb-10">
          Бот выкупает Telegram-аккаунты мгновенно — без ожидания, без посредников, выплата сразу.
        </p>
        <a
          href="https://t.me/TGbiyskyp_bot"
          className="inline-block px-8 py-3 uppercase tracking-wide text-sm font-semibold transition-colors duration-300"
          style={{ background: "#2AABEE", color: "#fff" }}
        >
          Запустить бота →
        </a>
      </div>
    </div>
  );
}
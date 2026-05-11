import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2670&auto=format&fit=crop" 
          alt="Matiz Wine Bar Vibe" 
          className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-matiz-bg" />
      </motion.div>

      <div className="relative z-10 text-center px-4">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="uppercase text-white tracking-[0.4em] text-[10px] md:text-sm font-medium mb-4 block">
            Madrid · Wine & Kitchen
          </span>
          <h1 className="serif text-white text-7xl md:text-[12vw] leading-none font-extralight tracking-tighter">
            Matiz
          </h1>
          <p className="serif italic text-white/80 text-xl md:text-3xl mt-6 font-light max-w-2xl mx-auto">
            El tiempo se mide en copas, y la noche fluye sin prisa.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-white/30 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 80] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
        <span className="uppercase text-white/50 text-[8px] tracking-[0.3em]">Vertical Scroll</span>
      </motion.div>
    </section>
  );
}

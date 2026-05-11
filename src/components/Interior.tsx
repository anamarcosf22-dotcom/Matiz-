import { motion } from 'motion/react';

export default function Interior() {
  return (
    <section id="espacio" className="py-32 px-8 md:px-24 bg-matiz-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="uppercase text-matiz-accent text-[10px] tracking-[0.5em] font-bold block mb-4"
          >
            El Espacio
          </motion.span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="serif text-5xl md:text-7xl leading-[1.1] font-light text-matiz-ink">
              Todo está pensado para que te quedes <span className="italic">un poco más.</span>
            </h2>
            <p className="serif italic text-2xl text-matiz-muted/80 font-light tracking-wide">
              Sin prisa. Sin más.
            </p>
            <div className="w-12 h-[1px] bg-matiz-sand mt-12" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[3/4] md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-matiz-ink/5"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1n0xy-T38JY2vYDK16beAcd3nU_cEt_jd" 
              alt="Ambiente Matiz" 
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 transition-transform duration-[3s] hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Overlay for subtle elegant depth */}
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

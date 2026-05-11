import { motion } from 'motion/react';

export default function Concept() {
  return (
    <section id="espacio" className="py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="serif text-5xl md:text-7xl font-light leading-tight">
              La calma de <br /> <span className="italic">lo natural</span>.
            </h2>
            <p className="text-matiz-muted text-lg font-light leading-relaxed max-w-lg">
              Matiz nace del deseo de crear un refugio donde el diseño y la calidez se encuentran sin esfuerzo. Un espacio pensado para quienes valoran los detalles sutiles, la luz tenue y la compañía sin prisas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
             <motion.img 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               src="https://lh3.googleusercontent.com/d/12fzW4sEepEIDWn0RyKkvjc3-yczpV2B9" 
               className="rounded-full aspect-[2/3] object-cover mt-12"
               referrerPolicy="no-referrer"
             />
             <motion.img 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               src="https://lh3.googleusercontent.com/d/1KnQnR9mtT5wBgh5X-BjQfVC2s8KZml_i" 
               className="rounded-full aspect-[2/3] object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>

        {/* Materials Bento */}
        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-[#D4B996]/10 p-12 rounded-3xl flex flex-col justify-between aspect-square">
              <span className="serif italic text-2xl">Maderas Claras</span>
              <p className="text-xs uppercase tracking-widest text-matiz-muted">Texturas naturales y cálidas que abrazan cada conversación.</p>
           </div>
           <div className="bg-[#6B1D21]/5 p-12 rounded-3xl flex flex-col justify-between aspect-square">
              <span className="serif italic text-2xl">Lino y Cerámica</span>
              <p className="text-xs uppercase tracking-widest text-matiz-muted">Tactilidad orgánica. Detalles cuidados, nunca pretenciosos.</p>
           </div>
           <div className="bg-matiz-ink p-12 rounded-3xl flex flex-col justify-between aspect-square text-white">
              <span className="serif italic text-2xl text-matiz-sand">Luz Difusa</span>
              <p className="text-xs uppercase tracking-widest opacity-60">Sombras suaves y velas que marcan el pulso de la noche.</p>
           </div>
        </div>
      </div>
    </section>
  );
}

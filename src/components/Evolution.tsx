import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const MOMENTS = [
  {
    id: 'citas',
    title: 'Citas',
    subtitle: 'El rincón perfecto',
    description: 'Luz baja y una mesa tranquila. El sitio ideal para hablar sin prisas mientras las horas pasan solas y la conversación fluye.',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 'amigos',
    title: 'Con amigos',
    subtitle: 'Compartir es la clave',
    description: 'Copas que se cruzan y platos al centro. Risas que suben de tono y esa sensación de que, simplemente, aquí se está muy bien.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop',
  },
  {
    id: 'improvisado',
    title: 'Sin plan',
    subtitle: 'Pasar y quedarse',
    description: 'Dejarse llevar por el momento. Pasar sin reserva, sentarse en la barra y disfrutar de un buen vino mientras la noche decide el resto.',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=2576&auto=format&fit=crop',
  }
];

export default function Evolution() {
  const [activeMoment, setActiveMoment] = useState(MOMENTS[0]);

  return (
    <section id="evolucion" className="py-24 px-8 md:px-24 bg-matiz-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="uppercase text-matiz-accent text-xs tracking-widest font-semibold mb-4 block">Momentos</span>
            <h2 className="serif text-5xl md:text-7xl font-light mb-8 italic">Como tú quieras</h2>
            
            <div className="flex gap-4 mb-12">
              {MOMENTS.map((moment) => (
                <button
                  key={moment.id}
                  onClick={() => setActiveMoment(moment)}
                  className={`px-6 py-2 border rounded-full text-[10px] uppercase tracking-widest transition-all duration-500 ${
                    activeMoment.id === moment.id 
                    ? 'bg-matiz-ink text-white border-matiz-ink' 
                    : 'border-matiz-sand text-matiz-ink hover:border-matiz-ink'
                  }`}
                >
                  {moment.title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMoment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="max-w-md"
              >
                <h3 className="serif text-3xl font-light mb-4">{activeMoment.subtitle}</h3>
                <p className="text-matiz-muted leading-relaxed font-light mb-8">
                   {activeMoment.description}
                </p>
                <div className="w-12 h-[1px] bg-matiz-accent" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeMoment.id}
                src={activeMoment.image}
                alt={activeMoment.title}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.05, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

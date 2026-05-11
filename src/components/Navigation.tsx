import { motion } from 'motion/react';
import { Wine, MapPin, Instagram } from 'lucide-react';

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference"
    >
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative flex items-center justify-center">
          <span className="serif text-white text-2xl font-light tracking-tighter z-10">MJ</span>
          <motion.div 
            initial={{ rotate: -15, y: 5 }}
            whileHover={{ rotate: 0, y: -2 }}
            className="absolute -top-3 -right-2 opacity-80"
          >
            <Wine className="w-5 h-5 text-white" strokeWidth={1} />
          </motion.div>
        </div>
        <span className="serif text-white text-lg tracking-[0.3em] uppercase font-light border-l border-white/20 pl-4 ml-1">Matiz</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-white uppercase text-[10px] tracking-[0.2em] font-medium">
        <a href="#espacio" className="hover:opacity-60 transition-opacity">El Espacio</a>
        <a href="#evolucion" className="hover:opacity-60 transition-opacity">Evolución</a>
        <a href="#carta" className="hover:opacity-60 transition-opacity">La Carta</a>
        <a href="#reserva" className="hover:opacity-60 transition-opacity">Reservar</a>
      </div>

      <div className="flex gap-4">
        <Instagram className="w-4 h-4 text-white hover:opacity-60 cursor-pointer transition-opacity" />
        <MapPin className="w-4 h-4 text-white hover:opacity-60 cursor-pointer transition-opacity" />
      </div>
    </motion.nav>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycby6qBBdH2N_Abp2izr_6CeKMO2hDxuvL58BneCTdHKrZZNt3rd-4m2GOPoHY0Aon1Qy/exec';
      
      const params = new URLSearchParams();
      params.append('nombre', formData.nombre);
      params.append('email', formData.email);
      params.append('mensaje', formData.mensaje);
      params.append('fecha', new Date().toLocaleString());

      // We use a form-like submission header which is the most reliable for Apps Script e.parameter
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      // Verification: Since no-cors hides the result, we assume success if no error is thrown
      setStatus('success');
      setFormData({ nombre: '', email: '', mensaje: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error!', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contacto" className="py-24 px-8 md:px-24 bg-white border-t border-matiz-sand/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="uppercase text-matiz-accent text-[10px] tracking-[0.4em] font-bold mb-4 block"
          >
            Contacto
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="serif text-4xl md:text-6xl font-light italic"
          >
            Escríbenos <span className="not-italic">unas líneas.</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-matiz-bg p-8 md:p-12 rounded-[2.5rem] shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="nombre" className="text-[10px] uppercase tracking-widest text-matiz-muted ml-1">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full bg-white border border-matiz-sand/30 rounded-2xl px-6 py-4 outline-none focus:border-matiz-accent transition-colors serif italic text-lg"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-matiz-muted ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-matiz-sand/30 rounded-2xl px-6 py-4 outline-none focus:border-matiz-accent transition-colors serif italic text-lg"
                  placeholder="hola@ejemplo.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="mensaje" className="text-[10px] uppercase tracking-widest text-matiz-muted ml-1">Mensaje</label>
              <textarea
                id="mensaje"
                required
                rows={4}
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full bg-white border border-matiz-sand/30 rounded-2xl px-6 py-4 outline-none focus:border-matiz-accent transition-colors serif italic text-lg resize-none"
                placeholder="Cuéntanos..."
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`
                  relative overflow-hidden px-12 py-4 rounded-full uppercase text-[10px] tracking-[0.3em] font-bold transition-all duration-500
                  ${status === 'success' ? 'bg-green-600 text-white' : 'bg-matiz-ink text-white hover:bg-matiz-accent'}
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                <div className="flex items-center gap-3">
                  <AnimatePresence mode="wait">
                    {status === 'loading' ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, rotate: 0 }}
                        animate={{ opacity: 1, rotate: 360 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Loader2 className="w-4 h-4" />
                      </motion.div>
                    ) : status === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Send className="w-4 h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span>{status === 'success' ? 'Enviado con éxito' : status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}</span>
                </div>
              </button>
            </div>
            
            {status === 'error' && (
              <p className="text-center text-red-500 text-xs mt-4">Hubo un error. Por favor, inténtalo de nuevo.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

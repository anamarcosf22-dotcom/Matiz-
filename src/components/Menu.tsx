import React, { useState } from 'react';
import { motion } from 'motion/react';

const MENU_DATA = {
  empezar: [
    { name: 'Gilda Clásica', desc: 'Gordal, anchoa del Cantábrico y piparra.', price: '2.5', note: 'Ideal con blancos frescos' },
    { name: 'Nuestra Gilda Especial', desc: 'Atún rojo, aceituna rellena y un toque cítrico.', price: '4.5' },
    { name: 'Anchoas "00"', desc: 'En aceite de oliva virgen extra (6 filetes seleccionados).', price: '16' },
    { name: 'Pan con Tomate', desc: 'Masa madre tostada, tomate de colgar ralliado y AOVE.', price: '6' }
  ],
  quesos: [
    { name: 'Tabla de Quesos (Pequeña)', desc: 'Tres variedades de temporada, frutos secos y picos.', price: '14' },
    { name: 'Tabla Matiz (Grande)', desc: 'Cinco selecciones artesanas de pequeños productores.', price: '22', note: 'Acompáñala de un tinto ligero' },
    { name: 'Brie con Trufa', desc: 'Cremoso, intenso, servido con tostadas de centeno.', price: '12' }
  ],
  embutidos: [
    { name: 'Jamón Ibérico de Bellota', desc: 'Corte artesano, 100% raza ibérica.', price: '24' },
    { name: 'Lomo Ibérico', desc: 'Curación lenta, suave y aromático.', price: '18' },
    { name: 'Tabla Mixta Ibérica', desc: 'Jamón, lomo y queso curado de oveja.', price: '26' }
  ],
  compartir: [
    { name: 'Steak Tartar Matiz', desc: 'Vaca madurada, aliño clásico y yema campera.', price: '21', note: 'Pídelo con un tinto de Madrid' },
    { name: 'Burrata & Tomate', desc: 'Tomate de huerta, albahaca fresca y aceite de albahaca.', price: '15' },
    { name: 'Tomates Aliñados', desc: 'Variedad de temporada, cebolleta fina y sal de escamas.', price: '9' },
    { name: 'Carpaccio de Vaca', desc: 'Cortes finos, lascas de parmesano y rúcula selvática.', price: '17' }
  ],
  dulce: [
    { name: 'Tarta de Queso', desc: 'Receta artesana, cremosa y con base de galleta salada.', price: '7.5' },
    { name: 'Chocolate, Aceite & Sal', desc: 'Ganache 70% negro, Arbequina y flor de sal.', price: '6.5' }
  ],
  vinos: [
    { cat: 'Blancos Frescos', items: [
      { name: 'Luz de Día (Verdejo)', desc: 'Rueda, 2023. Vibrante y floral.', price: '5 / 24' },
      { name: 'Mar de Fondo (Albariño)', desc: 'Rías Baixas, 2022. Salino, atlántico.', price: '6 / 28' }
    ]},
    { cat: 'Tintos Ligeros', items: [
      { name: 'Tierra Roja (Garnacha)', desc: 'Madrid, 2022. Fruta roja, fácil, ligero.', price: '5.5 / 26' },
      { name: 'Bailarín (Pinot Noir)', desc: 'Borgoña, 2021. Elegante, sutil.', price: '8 / 38' }
    ]},
    { cat: 'Algo Distinto', items: [
      { name: 'Naranja Pétnat', desc: 'Natural, burbuja fina, notas a piel de naranja.', price: '7 / 32' }
    ]}
  ]
};

export default function Menu() {
  const [activeCat, setActiveCat] = useState('todo');

  return (
    <section id="carta" className="py-32 px-8 md:px-24 bg-matiz-bg overflow-hidden border-t border-matiz-sand/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 space-y-8">
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="uppercase text-matiz-accent text-[10px] tracking-[0.4em] font-bold block"
            >
              La Carta
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="serif text-6xl md:text-8xl font-light italic"
            >
              Sencillez <span className="not-italic">Pura.</span>
            </motion.h2>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-matiz-muted font-light serif text-lg italic opacity-80 leading-relaxed">
              "Elije libremente. Si te apetece, podemos sugerirte algo que encaje o recomendarte con qué acompañar tu copa si tienes dudas."
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-matiz-accent/60 font-medium">
               <span>— Si dudas, te recomendamos qué pedir</span>
               <span>— Podemos acompañarlo con algo ligero</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-16">
          {/* Left Column: Snacks & Starters */}
          <div className="md:col-span-5 space-y-24">
            <div>
              <h3 className="serif text-xs uppercase tracking-[0.3em] text-matiz-muted border-b border-matiz-sand/30 pb-4 mb-8">01. Para Empezar</h3>
              <div className="space-y-10">
                {MENU_DATA.empezar.map((item) => (
                  <MenuItem key={item.name} name={item.name} desc={item.desc} price={item.price} note={item.note} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="serif text-xs uppercase tracking-[0.3em] text-matiz-muted border-b border-matiz-sand/30 pb-4 mb-8">02. Quesos & Embutidos</h3>
              <div className="space-y-10">
                <span className="serif text-lg italic block opacity-60 mb-6">Artesanía en corte</span>
                {MENU_DATA.quesos.map((item) => (
                  <MenuItem key={item.name} name={item.name} desc={item.desc} price={item.price} note={item.note} />
                ))}
                <div className="pt-4 space-y-10">
                  {MENU_DATA.embutidos.map((item) => (
                    <MenuItem key={item.name} name={item.name} desc={item.desc} price={item.price} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mains & Drinks */}
          <div className="md:col-span-7 space-y-24">
             <div>
              <h3 className="serif text-xs uppercase tracking-[0.3em] text-matiz-muted border-b border-matiz-sand/30 pb-4 mb-8">03. Para Compartir</h3>
              <div className="grid grid-cols-1 gap-10">
                {MENU_DATA.compartir.map((item) => (
                  <MenuItem key={item.name} name={item.name} desc={item.desc} price={item.price} note={item.note} />
                ))}
              </div>
            </div>

            <div className="bg-matiz-ink text-white p-12 rounded-[2rem] space-y-12 shadow-2xl shadow-matiz-ink/20">
               <div className="space-y-2">
                 <h3 className="serif text-3xl italic text-matiz-sand">Nuestra Bodega</h3>
                 <p className="text-[10px] uppercase tracking-widest opacity-40 font-light">Pregúntanos si buscas algo específico fuera de carta</p>
               </div>
               {MENU_DATA.vinos.map((cat) => (
                 <div key={cat.cat} className="space-y-6">
                    <span className="uppercase text-[9px] tracking-widest opacity-40 font-bold border-l-2 border-matiz-accent pl-4">{cat.cat}</span>
                    <div className="space-y-6">
                      {cat.items.map((item) => (
                        <div key={item.name} className="flex justify-between items-start group cursor-default">
                           <div>
                              <p className="serif text-lg leading-tight group-hover:text-matiz-sand transition-colors">{item.name}</p>
                              <p className="text-[10px] uppercase opacity-40 mt-1">{item.desc}</p>
                           </div>
                           <span className="font-mono text-xs opacity-60 italic whitespace-nowrap">{item.price}€</span>
                        </div>
                      ))}
                    </div>
                 </div>
               ))}
            </div>

            <div>
              <h3 className="serif text-xs uppercase tracking-[0.3em] text-matiz-muted border-b border-matiz-sand/30 pb-4 mb-8">04. Algo Dulce</h3>
              <div className="grid grid-cols-1 gap-8">
                {MENU_DATA.dulce.map((item) => (
                  <MenuItem key={item.name} name={item.name} desc={item.desc} price={item.price} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 flex flex-col items-center gap-6">
           <div className="flex items-center gap-4 text-matiz-muted opacity-40">
              <div className="w-12 h-[1px] bg-matiz-muted" />
              <span className="serif italic text-sm">IVA incluido. Pan de masa madre incluido en tablas.</span>
              <div className="w-12 h-[1px] bg-matiz-muted" />
           </div>
           <p className="text-[10px] uppercase tracking-[0.2em] text-matiz-muted max-w-xs text-center font-light">
             Si tienes alguna intolerancia, por favor háznoslo saber. Nuestro equipo te guiará con gusto.
           </p>
        </div>
      </div>
    </section>
  );
}

function MenuItem({ name, desc, price, note }: { name: string, desc: string, price: string, note?: string, key?: React.Key }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="group"
    >
      <div className="flex justify-between items-baseline gap-4 mb-2">
        <h4 className="serif text-2xl group-hover:italic transition-all duration-300 transform group-hover:translate-x-1">{name}</h4>
        <div className="flex-1 border-b border-matiz-sand/20 translate-y-[-4px] mx-2" />
        <span className="font-mono text-sm opacity-60 italic">{price}€</span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-matiz-muted text-xs font-light tracking-wide uppercase leading-relaxed max-w-sm">
          {desc}
        </p>
        {note && (
          <span className="text-[9px] uppercase tracking-[0.2em] text-matiz-accent/60 font-semibold italic">
            — {note}
          </span>
        )}
      </div>
    </motion.div>
  );
}

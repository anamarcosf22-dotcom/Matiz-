export default function Footer() {
  return (
    <footer id="reserva" className="bg-matiz-bg py-24 px-8 md:px-24 border-t border-matiz-sand/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        <div>
           <h4 className="serif text-3xl mb-8 font-light italic">Visítanos</h4>
           <p className="text-matiz-muted font-light leading-relaxed">
             Calle del Conde Duque, 14<br />
             28004, Madrid<br />
             España
           </p>
        </div>
        
        <div>
           <h4 className="serif text-3xl mb-8 font-light italic">Horarios</h4>
           <ul className="text-matiz-muted font-light space-y-2 uppercase text-[10px] tracking-widest">
             <li>Martes — Jueves: 18:00 - 00:00</li>
             <li>Viernes — Sábado: 13:00 - 02:00</li>
             <li>Domingo: 13:00 - 18:00</li>
             <li className="text-matiz-accent pt-2 italic underline underline-offset-4 pointer-events-none lowercase tracking-normal text-sm">Lunes cerrado</li>
           </ul>
        </div>

        <div className="flex flex-col justify-between">
           <h4 className="serif text-3xl mb-8 font-light italic">Únete</h4>
           <div className="space-y-6">
              <p className="text-matiz-muted font-light text-sm italic">"Donde lo estético se vuelve social."</p>
              <div className="flex gap-4">
                 <button className="bg-matiz-ink text-white px-8 py-3 rounded-full uppercase text-[10px] tracking-widest font-bold hover:bg-matiz-accent transition-colors">
                   Reservar Mesa
                 </button>
              </div>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-matiz-sand/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-matiz-muted">
        <span>© 2024 Matiz Wine Bar Madrid</span>
        <div className="flex gap-8">
           <a href="#" className="hover:text-matiz-ink">Legal</a>
           <a href="#" className="hover:text-matiz-ink">Cookies</a>
           <a href="#" className="hover:text-matiz-ink">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Search } from 'lucide-react';

const Services = () => {
  const services = [
    { id: 1, title: "Photographie Professionnelle", provider: "natte sabwe", desc: "Photos d'événements, portraits, administratif.", cat: "Photographie" },
    { id: 2, title: "Design Graphique", provider: "gradi mukoka", desc: "Logos, affiches et maquettes UI/UX.", cat: "Design" }
  ];

  return (
    <div className="space-y-8">
      <div className="relative">
        <input type="text" placeholder="Rechercher un service..." className="w-full p-5 pl-14 bg-white border border-slate-100 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0e223f]/10" />
        <Search className="absolute left-5 top-5 text-slate-300" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map(s => (
          <div key={s.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">{s.cat}</span>
            <h3 className="text-xl font-bold text-[#0e223f] mt-3">{s.title}</h3>
            <p className="text-slate-500 text-sm mt-2">{s.desc}</p>
            <div className="mt-6 flex items-center justify-between border-t pt-4">
              <span className="text-sm font-bold text-[#0e223f] italic">Par {s.provider}</span>
              <button className="text-[#0e223f] font-black text-xs uppercase tracking-widest hover:underline">Contacter</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
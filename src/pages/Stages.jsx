import React from 'react';
import { Briefcase, MapPin, Clock, ChevronRight, Search } from 'lucide-react';

const Stages = () => {
  const offres = [
    { id: 1, titre: "Stage en Développement Web", entreprise: "TechMaroc Solutions", ville: "Casablanca", duree: "3 mois", date: "20/03/2026", tag: "Technologie" },
    { id: 2, titre: "Assistant Marketing Digital", entreprise: "Maroc Digital Agency", ville: "Rabat", duree: "4 mois", date: "22/03/2026", tag: "Marketing" },
    { id: 3, titre: "Analyste de Données Junior", entreprise: "Data Consulting", ville: "Tanger", duree: "6 mois", date: "25/03/2026", tag: "Analyse" }
  ];

  return (
    <div className="space-y-6">
      <div className="relative">
        <input type="text" placeholder="Rechercher un stage (ex: React, Marketing)..." className="w-full p-4 pl-12 bg-white border border-slate-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0e223f]/5" />
        <Search className="absolute left-4 top-4 text-slate-300" size={20} />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {offres.map((stage) => (
          <div key={stage.id} className="bg-white p-6 rounded-[24px] border border-slate-50 shadow-sm hover:shadow-md transition-all group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#0e223f] group-hover:bg-[#0e223f] group-hover:text-white transition-colors">
                  <Briefcase size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{stage.tag}</span>
                  <h3 className="text-lg font-bold text-[#0e223f] leading-tight">{stage.titre}</h3>
                  <p className="text-sm font-medium text-slate-500 italic">{stage.entreprise}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-slate-400 text-xs">
                <span className="flex items-center gap-1"><MapPin size={14}/> {stage.ville}</span>
                <span className="flex items-center gap-1"><Clock size={14}/> {stage.duree}</span>
              </div>

              <button className="px-6 py-3 bg-[#0e223f] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#1a3a63] transition flex items-center gap-2 justify-center">
                Détails <ChevronRight size={14}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stages;
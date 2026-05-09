import React from 'react';
import { Briefcase, Globe, CreditCard, GraduationCap, Cake, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Accueil = () => {
  return (
    <div className="space-y-6 pb-10">
      
      {/* STAT CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
         <StatCard title="Statut" value="Actif" />
         <StatCard title="Stages" value="05" />
         <div className="hidden md:block">
            <StatCard title="Services" value="06" />
         </div>
      </div>
      
      <h3 className="font-black text-[#0e223f] uppercase text-[10px] tracking-widest flex items-center gap-2">
        Accès rapide <span className="h-[1px] bg-slate-100 flex-1"></span>
      </h3>

      {/* GRILLE D'ACCÈS RAPIDE */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
         <QuickLink to="/profil" icon={<User/>} label="Mon Profil" />
         <QuickLink to="/admin" icon={<GraduationCap/>} label="Admin" />
         <QuickLink to="/stages" icon={<Briefcase/>} label="Stages" />
         <QuickLink to="/services" icon={<Globe/>} label="Services" />
         <QuickLink to="/carte" icon={<CreditCard/>} label="Ma carte" />
         <QuickLink to="/anniversaires" icon={<Cake/>} label="anniversaires" />
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-50 shadow-sm">
    <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mb-1">{title}</p>
    <p className="text-2xl font-black text-[#0e223f] italic tracking-tighter">{value}</p>
  </div>
);

const QuickLink = ({ to, icon, label }) => (
  <Link to={to} className="bg-white p-6 rounded-[24px] border border-slate-50 shadow-sm flex flex-col items-center gap-3 hover:bg-[#0e223f] transition-all transform hover:-translate-y-1 group">
    <div className="text-[#0e223f] group-hover:text-white transition-colors">{icon}</div>
    <span className="text-[10px] font-black uppercase tracking-tighter text-[#0e223f] group-hover:text-white transition-colors text-center">{label}</span>
  </Link>
);

export default Accueil;
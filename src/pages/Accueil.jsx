import React from 'react';
import { 
  Users, CreditCard, Briefcase, GraduationCap, 
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Accueil = () => {
  return (
    <div className="space-y-8 pb-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
         <StatCard title="Membres" value="128" color="text-blue-600" />
         <StatCard title="Demandes" value="12" color="text-orange-500" />
         <StatCard title="Offres Stage" value="08" color="text-green-600" />
      </div>

      <div className="space-y-4">
        <h3 className="font-black text-[#0e223f] uppercase text-[10px] tracking-[0.3em] flex items-center gap-2">
          Accès Rapide Administration <span className="h-[1px] bg-slate-100 flex-1"></span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <QuickLink to="/utilisateurs" icon={<Users/>} label="Utilisateurs" />
          <QuickLink to="/demandes-cartes" icon={<CreditCard/>} label="Cartes Membres" />
          <QuickLink to="/stages" icon={<Briefcase/>} label="Gestion Stages" />
          <QuickLink to="/admin" icon={<GraduationCap/>} label="Infos Admin" />
          <QuickLink to="/services" icon={<Globe/>} label="Services UESCOM" />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color }) => (
  <div className="bg-white p-6 rounded-[28px] border border-slate-50 shadow-sm">
    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">{title}</p>
    <p className={`text-3xl font-black italic tracking-tighter ${color}`}>{value}</p>
  </div>
);

const QuickLink = ({ to, icon, label }) => (
  <Link to={to} className="bg-white p-6 rounded-[30px] border border-slate-50 shadow-sm flex flex-col items-center gap-4 hover:bg-[#0e223f] transition-all group hover:-translate-y-2">
    <div className="text-[#0e223f] group-hover:text-white transition-colors p-3 bg-slate-50 group-hover:bg-white/10 rounded-2xl">
      {icon}
    </div>
    <span className="text-[10px] font-black uppercase tracking-tighter text-[#0e223f] group-hover:text-white text-center italic">{label}</span>
  </Link>
);

export default Accueil;
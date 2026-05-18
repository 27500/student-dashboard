import React from 'react';
import { Users, CreditCard, Briefcase, GraduationCap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Accueil = () => {
  return (
    <div className="space-y-8 pb-10">
      {/* SECTION CARTES STATS - COULEURS UNIFIÉES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <StatCard title="Membres Enregistrés" value="128" subtitle="Utilisateurs actifs" />
         <StatCard title="Demandes de Cartes" value="12" subtitle="En attente de revue" />
         <StatCard title="Offres de Stages" value="08" subtitle="Opportunités publiées" />
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-[#0e223f] uppercase text-xs tracking-wider flex items-center gap-2">
          Accès Rapide Administration <span className="h-[1px] bg-slate-200 flex-1"></span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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

const StatCard = ({ title, value, subtitle }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-1">
    <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">{title}</p>
    <p className="text-3xl font-bold tracking-tight text-[#0e223f]">{value}</p>
    <p className="text-xs text-slate-400 font-medium">{subtitle}</p>
  </div>
);

const QuickLink = ({ to, icon, label }) => (
  <Link to={to} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 hover:bg-[#0e223f] transition-all group hover:-translate-y-1">
    <div className="text-[#0e223f] group-hover:text-white transition-colors p-3 bg-slate-50 group-hover:bg-white/10 rounded-xl">
      {icon}
    </div>
    <span className="text-xs font-semibold uppercase tracking-tight text-[#0e223f] group-hover:text-white text-center">{label}</span>
  </Link>
);

export default Accueil;
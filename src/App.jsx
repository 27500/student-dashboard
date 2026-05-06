import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, GraduationCap, Briefcase, Globe, 
  CreditCard, Cake, Users, Settings, Bell, Search 
} from 'lucide-react';

const App = () => {
  const [userData, setUserData] = useState({
    prenom: "Blessing", 
    nom: "Mingenge",    
    universite: "Génie Biologique",
    date: new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
  });

  return (
    <div className="flex h-screen bg-[#f0f9fa] font-sans text-slate-800">
      
      {/* --- SIDEBAR AQUA --- */}
      <aside className="w-72 bg-[#00ced1] text-white flex flex-col p-6 shadow-xl">
        <div className="mb-10 px-2 text-center md:text-left">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 border border-white/30 mx-auto md:mx-0">
            <LayoutDashboard size={28} />
          </div>
          <h2 className="text-xl font-bold leading-tight uppercase tracking-wide">
            {userData.prenom} {userData.nom}
          </h2>
          <p className="text-cyan-100 text-sm italic mt-1">{userData.universite}</p>
        </div>

        <nav className="flex-1 space-y-1">
          <NavItem icon={<LayoutDashboard size={18}/>} label="Accueil" active />
          <NavItem icon={<GraduationCap size={18}/>} label="Infos admin" alert />
          <NavItem icon={<Briefcase size={18}/>} label="Stages" />
          <NavItem icon={<Globe size={18}/>} label="Services" />
          <NavItem icon={<CreditCard size={18}/>} label="Ma carte" />
          <NavItem icon={<Cake size={18}/>} label="Anniversaires" />
          <NavItem icon={<Users size={18}/>} label="Communauté" />
        </nav>

        <div className="pt-6 border-t border-white/20">
          <NavItem icon={<Settings size={18}/>} label="Paramètres" />
        </div>
      </aside>

      {/* --- CONTENU PRINCIPAL --- */}
      <main className="flex-1 overflow-y-auto p-10">
        
        <header className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Bienvenue, {userData.prenom} !</h1>
            <p className="text-cyan-600 mt-1 font-semibold uppercase text-xs tracking-widest">{userData.universite} — {userData.date}</p>
          </div>
          <div className="flex gap-3 items-center">
             <button className="p-2.5 bg-white border border-cyan-100 rounded-xl shadow-sm hover:bg-cyan-50 transition text-cyan-500">
              <Search size={20} />
            </button>
            <button className="p-2.5 bg-white border border-cyan-100 rounded-xl shadow-sm hover:bg-cyan-50 transition relative">
              <Bell size={20} className="text-orange-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-11 h-11 bg-[#00ced1] rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-200 border-2 border-white">
              {userData.prenom[0]}{userData.nom[0]}
            </div>
          </div>
        </header>

        {/* Stats en mode Aqua */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard title="Carte étudiante" value="Active" subValue="Expire : Juin 2027" color="text-[#008b8b]" />
          <StatCard title="Stages disponibles" value="12" subValue="3 nouvelles offres" />
          <StatCard title="Messages non lus" value="03" subValue="Dernier reçu à 10h30" />
        </div>

        {/* Accès Rapide */}
        <section className="mb-10">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-700">
            Accès rapide <span className="w-8 h-1 bg-[#00ced1] rounded-full"></span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <QuickLink icon={<GraduationCap className="text-cyan-600"/>} label="Infos Admin" bg="bg-cyan-50" />
            <QuickLink icon={<Briefcase className="text-cyan-600"/>} label="Stages" bg="bg-cyan-50" />
            <QuickLink icon={<Globe className="text-cyan-600"/>} label="Services" bg="bg-cyan-50" />
            <QuickLink icon={<CreditCard className="text-cyan-600"/>} label="Ma Carte" bg="bg-cyan-50" />
            <QuickLink icon={<Cake className="text-cyan-600"/>} label="Anniversaires" bg="bg-cyan-50" />
            <QuickLink icon={<Users className="text-cyan-600"/>} label="Communauté" bg="bg-cyan-50" />
          </div>
        </section>

      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active = false, alert = false }) => (
  <a href="#" className={`flex items-center justify-between p-3.5 rounded-xl transition-all duration-200 group ${active ? 'bg-white/20 text-white shadow-md' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
    <div className="flex items-center gap-3">
      <span>{icon}</span>
      <span className="font-bold text-sm tracking-wide">{label}</span>
    </div>
    {alert && <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse shadow-lg"></div>}
  </a>
);

const StatCard = ({ title, value, subValue, color = "text-slate-900" }) => (
  <div className="bg-white p-6 rounded-2xl border border-cyan-50 shadow-sm hover:border-cyan-200 transition-colors">
    <p className="text-cyan-600 text-[10px] uppercase tracking-widest font-black mb-1">{title}</p>
    <p className={`text-3xl font-black ${color}`}>{value}</p>
    <p className="text-xs text-slate-400 mt-2 font-medium">{subValue}</p>
  </div>
);

const QuickLink = ({ icon, label, bg }) => (
  <div className="bg-white p-6 rounded-2xl border border-cyan-50 shadow-sm flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
    <div className={`w-16 h-16 ${bg} rounded-2xl flex items-center justify-center mb-3 group-hover:bg-cyan-100 transition-colors`}>
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <span className="text-sm font-black text-slate-700 tracking-tight uppercase">{label}</span>
  </div>
);

export default App;
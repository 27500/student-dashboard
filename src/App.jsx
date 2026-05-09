import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { 
  LayoutDashboard, GraduationCap, Briefcase, Globe, 
  CreditCard, Cake, Users, User, Menu, X 
} from 'lucide-react';

// Imports des pages
import Login from './pages/Login';
import Accueil from './pages/Accueil';
import Profil from './pages/Profil';
import InfosAdmin from './pages/InfosAdmin';
import Stages from './pages/Stages';
import Services from './pages/Services';
import Anniversaires from './pages/Anniversaires';
import Communaute from './pages/Communaute';

const App = () => {
  // L'état pour savoir si l'utilisateur est connecté ou non
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Si l'utilisateur n'est pas connecté, on affiche uniquement la page Login
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Router>
      <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-800 overflow-hidden">
        
        {/* SIDEBAR (PC) */}
        <aside className="hidden md:flex w-72 bg-[#0e223f] text-white flex-col p-6 shadow-2xl">
          <h1 className="text-xl font-black italic mb-10 tracking-tighter uppercase border-b border-white/10 pb-4">UESCOM-APP</h1>
          <nav className="flex-1 space-y-1">
            <NavItem to="/" icon={<LayoutDashboard size={18}/>} label="Accueil" />
            <NavItem to="/profil" icon={<User size={18}/>} label="Mon Profil" />
            <NavItem to="/admin" icon={<GraduationCap size={18}/>} label="Infos admin" />
            <NavItem to="/stages" icon={<Briefcase size={18}/>} label="Stages" />
            <NavItem to="/services" icon={<Globe size={18}/>} label="Services" />
            <NavItem to="/anniversaires" icon={<Cake size={18}/>} label="Anniversaires" />
          </nav>
          
          {/* Bouton de déconnexion optionnel */}
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="mt-auto p-4 text-xs font-bold text-red-400 hover:text-red-300 text-left"
          >
            Déconnexion
          </button>
        </aside>

        {/* CONTENU PRINCIPAL */}
        <main className="flex-1 flex flex-col h-full relative">
          <Header onLogout={() => setIsLoggedIn(false)} />
          
          <section className="flex-1 overflow-y-auto px-6 md:px-10 pb-24 md:pb-10">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/admin" element={<InfosAdmin />} />
              <Route path="/stages" element={<Stages />} />
              <Route path="/services" element={<Services />} />
              <Route path="/anniversaires" element={<Anniversaires />} />
              <Route path="/communaute" element={<Communaute />} />
              <Route path="/carte" element={<MaCarte />} />
              {/* Redirection si la page n'existe pas */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </section>

          {/* NAV BASSE (Mobile) */}
          <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 flex justify-between items-center shadow-2xl z-50">
            <MobileTab to="/" icon={<LayoutDashboard size={20}/>} />
            <MobileTab to="/profil" icon={<User size={20}/>} />
            <MobileTab to="/stages" icon={<Briefcase size={20}/>} />
            <MobileTab to="/admin" icon={<GraduationCap size={20}/>} />
          </nav>
        </main>
      </div>
    </Router>
  );
};

// --- COMPOSANTS DE SUPPORT ---

const NavItem = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${isActive ? 'bg-white text-[#0e223f] font-bold shadow-lg translate-x-2' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
      {icon} <span className="text-sm">{label}</span>
    </Link>
  );
};

const MobileTab = ({ to, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`p-2 rounded-xl transition-all ${isActive ? 'text-[#0e223f] bg-slate-50 scale-110' : 'text-slate-300'}`}>
      {icon}
    </Link>
  );
};

const Header = () => {
  const location = useLocation();
  const getTitle = () => {
    if (location.pathname === "/") return "ACCUEIL";
    return location.pathname.substring(1).toUpperCase().replace("-", " ");
  };

  return (
    <header className="p-6 md:p-10 flex justify-between items-center">
      <div>
        <h1 className="text-2xl md:text-4xl font-black text-[#0e223f] tracking-tight italic uppercase">{getTitle()}</h1>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Tableau de Bord</p>
      </div>
      <Link to="/profil" className="w-10 h-10 md:w-12 md:h-12 bg-[#0e223f] rounded-xl flex items-center justify-center text-white font-black italic shadow-lg border-2 border-white">BM</Link>
    </header>
  );
};

const MaCarte = () => (
    <div className="flex justify-center p-4">
        <div className="w-full max-w-sm bg-[#0e223f] p-6 rounded-[32px] text-white shadow-2xl relative overflow-hidden">
            <p className="text-[10px] font-black tracking-widest opacity-50 uppercase mb-4 italic">Carte de Membre</p>
            <div className="flex gap-4 items-center mb-8">
                <div className="w-16 h-16 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center text-[10px] italic font-bold">PHOTO</div>
                <div>
                    <h3 className="text-lg font-black text-white">Blessing Mingenge</h3>
                    <p className="text-[10px] opacity-70 italic text-blue-200">Génie Biologique</p>
                </div>
            </div>
            <div className="pt-4 border-t border-white/10 flex justify-between items-end font-mono">
                <span className="text-[10px] opacity-50">#MC-2026-001234</span>
                <div className="w-10 h-10 bg-white rounded-lg"></div>
            </div>
        </div>
    </div>
);

export default App;
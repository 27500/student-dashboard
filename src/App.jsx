import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { 
  LayoutDashboard, GraduationCap, Briefcase, Globe, 
  CreditCard, Users, Menu, X, Bell, LogOut 
} from 'lucide-react';

import Login from './pages/Login';
import Inscription from './pages/Inscription';
import Accueil from './pages/Accueil';
import Utilisateurs from './pages/Utilisateurs';
import InfosAdmin from './pages/InfosAdmin';
import Stages from './pages/Stages';
import Services from './pages/Services';
import DemandesCartes from './pages/DemandesCartes';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!isLoggedIn) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  }

  // --- PARTIE APPLICATION PRINCIPALE ---
  return (
    <Router>
      <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-800 overflow-hidden">
        
        {/* SIDEBAR  */}
        <aside className="hidden md:flex w-72 bg-[#0e223f] text-white flex-col p-6 shadow-2xl">
          <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center font-black italic text-xs text-white">U</div>
            <h1 className="text-xl font-black italic tracking-tighter uppercase">UESCOM-APP</h1>
          </div>
          
          <nav className="flex-1 space-y-1">
            <NavItem to="/" icon={<LayoutDashboard size={18}/>} label="Tableau de Bord" />
            <NavItem to="/utilisateurs" icon={<Users size={18}/>} label="Utilisateurs" />
            <NavItem to="/demandes-cartes" icon={<CreditCard size={18}/>} label="Demandes Cartes" />
            <NavItem to="/stages" icon={<Briefcase size={18}/>} label="Gestion Stages" />
            <NavItem to="/admin" icon={<GraduationCap size={18}/>} label="Infos admin" />
            <NavItem to="/services" icon={<Globe size={18}/>} label="Services" />
          </nav>

          <button onClick={() => setIsLoggedIn(false)} className="mt-auto p-4 text-[10px] font-black text-red-400 hover:bg-red-500/10 rounded-xl uppercase tracking-widest text-left flex items-center gap-2">
            <LogOut size={14}/> Déconnexion
          </button>
        </aside>

        {/* MENU MOBILE OVERLAY */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-[#0e223f] z-[100] p-6 flex flex-col md:hidden animate-in fade-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-12">
               <h2 className="text-white font-black italic uppercase">Menu Admin</h2>
               <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2 bg-white/10 rounded-xl"><X size={24}/></button>
            </div>
            <nav className="space-y-2 flex-1">
              <MobileMenuItem to="/" icon={<LayoutDashboard/>} label="Accueil" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileMenuItem to="/utilisateurs" icon={<Users/>} label="Utilisateurs" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileMenuItem to="/demandes-cartes" icon={<CreditCard/>} label="Cartes Membres" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileMenuItem to="/stages" icon={<Briefcase/>} label="Stages" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileMenuItem to="/admin" icon={<GraduationCap/>} label="Infos Admin" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileMenuItem to="/services" icon={<Globe/>} label="Services" onClick={() => setIsMobileMenuOpen(false)} />
            </nav>
            <button onClick={() => setIsLoggedIn(false)} className="w-full p-5 bg-red-500/20 text-red-400 rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-3">
              <LogOut size={18}/> Se déconnecter
            </button>
          </div>
        )}

        <main className="flex-1 flex flex-col h-full relative">
          {/* HEADER */}
          <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
          
          <section className="flex-1 overflow-y-auto px-6 md:px-10 pb-10">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/utilisateurs" element={<Utilisateurs />} />
              <Route path="/demandes-cartes" element={<DemandesCartes />} />
              <Route path="/stages" element={<Stages />} />
              <Route path="/admin" element={<InfosAdmin />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
};



const NavItem = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${isActive ? 'bg-white text-[#0e223f] font-bold shadow-lg' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
      {icon} <span className="text-sm">{label}</span>
    </Link>
  );
};

const MobileMenuItem = ({ to, icon, label, onClick }) => (
  <Link to={to} onClick={onClick} className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl text-white/80 font-bold uppercase text-xs hover:bg-white/10 transition-all">
    <span className="text-orange-500">{icon}</span>
    {label}
  </Link>
);

const Header = ({ onOpenMobileMenu }) => {
  const location = useLocation();
  const getTitle = () => {
    switch(location.pathname) {
      case '/': return 'TABLEAU DE BORD';
      case '/utilisateurs': return 'GESTION UTILISATEURS';
      case '/demandes-cartes': return 'CARTES DE MEMBRES';
      case '/stages': return 'OFFRES DE STAGES';
      case '/admin': return 'ADMINISTRATION';
      case '/services': return 'SERVICES';
      default: return 'UESCOM';
    }
  };

  return (
    <header className="p-6 md:p-10 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button onClick={onOpenMobileMenu} className="md:hidden p-2 bg-[#0e223f] text-white rounded-xl">
          <Menu size={20}/>
        </button>
        <h1 className="text-xl md:text-3xl font-black text-[#0e223f] tracking-tighter italic uppercase leading-none">{getTitle()}</h1>
      </div>
      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0e223f] rounded-2xl flex items-center justify-center text-white font-black italic border-2 border-white">BM</div>
    </header>
  );
};

export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { 
  LayoutDashboard, GraduationCap, Briefcase, Globe, 
  CreditCard, Users, Menu, X, LogOut 
} from 'lucide-react';

import Login from './pages/Login';
import Accueil from './pages/Accueil';
import Utilisateurs from './pages/Utilisateurs';
import InfosAdmin from './pages/InfosAdmin';
import Stages from './pages/Stages';
import Services from './pages/Services';
import DemandesCartes from './pages/DemandesCartes';

// Importation du logo pour la Sidebar
import logo from './assets/logo.jpeg';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!isLoggedIn) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="flex h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden">
        
        {/* SIDEBAR AVEC LOGO OFFICIEL */}
        <aside className="hidden md:flex w-72 bg-[#0e223f] text-white flex-col p-6 shadow-xl border-r border-slate-800">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-5">
            <img 
              src={logo} 
              alt="UESCOM" 
              className="w-9 w-9 object-contain bg-white rounded-full p-0.5"
            />
            <h1 className="text-md font-bold tracking-tight uppercase">UESCOM Portal</h1>
          </div>
          
          <nav className="flex-1 space-y-1">
            <NavItem to="/" icon={<LayoutDashboard size={18}/>} label="Tableau de Bord" />
            <NavItem to="/utilisateurs" icon={<Users size={18}/>} label="Utilisateurs" />
            <NavItem to="/demandes-cartes" icon={<CreditCard size={18}/>} label="Demandes Cartes" />
            <NavItem to="/stages" icon={<Briefcase size={18}/>} label="Gestion Stages" />
            <NavItem to="/admin" icon={<GraduationCap size={18}/>} label="Infos Admin" />
            <NavItem to="/services" icon={<Globe size={18}/>} label="Services" />
          </nav>

          <button 
            onClick={() => setIsLoggedIn(false)} 
            className="mt-auto p-3 text-xs font-semibold text-slate-400 hover:bg-white/5 hover:text-white rounded-xl uppercase tracking-wider text-left flex items-center gap-2 transition-colors"
          >
            <LogOut size={14}/> Déconnexion
          </button>
        </aside>

        {/* MENU MOBILE */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-[#0e223f] z-[100] p-6 flex flex-col md:hidden animate-in fade-in duration-200">
            <div className="flex justify-between items-center mb-8">
               <div className="flex items-center gap-3">
                 <img src={logo} alt="UESCOM" className="w-8 h-8 object-contain bg-white rounded-full p-0.5" />
                 <h2 className="text-white font-bold uppercase tracking-wide text-sm">Menu Principal</h2>
               </div>
               <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2 bg-white/10 rounded-xl"><X size={22}/></button>
            </div>
            <nav className="space-y-2 flex-1">
              <MobileMenuItem to="/" icon={<LayoutDashboard size={18}/>} label="Accueil" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileMenuItem to="/utilisateurs" icon={<Users size={18}/>} label="Utilisateurs" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileMenuItem to="/demandes-cartes" icon={<CreditCard size={18}/>} label="Cartes Membres" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileMenuItem to="/stages" icon={<Briefcase size={18}/>} label="Stages" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileMenuItem to="/admin" icon={<GraduationCap size={18}/>} label="Infos Admin" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileMenuItem to="/services" icon={<Globe size={18}/>} label="Services" onClick={() => setIsMobileMenuOpen(false)} />
            </nav>
            <button onClick={() => setIsLoggedIn(false)} className="w-full p-4 bg-white/10 text-white rounded-xl font-bold uppercase text-xs flex items-center justify-center gap-2 border border-white/20">
              <LogOut size={16}/> Se déconnecter
            </button>
          </div>
        )}

        <main className="flex-1 flex flex-col h-full relative overflow-hidden">
          <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
          
          <section className="flex-1 overflow-y-auto px-8 md:px-12 pb-12">
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
    <Link to={to} className={`w-full flex items-center gap-3 p-3.5 rounded-xl transition-all ${isActive ? 'bg-white text-[#0e223f] font-semibold shadow-md' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
      {icon} <span className="text-sm">{label}</span>
    </Link>
  );
};

const MobileMenuItem = ({ to, icon, label, onClick }) => (
  <Link to={to} onClick={onClick} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl text-white/90 font-medium uppercase text-xs hover:bg-white/10 transition-all">
    <span className="text-slate-300">{icon}</span>
    {label}
  </Link>
);

const Header = ({ onOpenMobileMenu }) => {
  const location = useLocation();
  const getTitle = () => {
    switch(location.pathname) {
      case '/': return 'TABLEAU DE BORD';
      case '/utilisateurs': return 'GESTION DES UTILISATEURS';
      case '/demandes-cartes': return 'CARTES DE MEMBRES';
      case '/stages': return 'OFFRES DE STAGES';
      case '/admin': return 'ADMINISTRATION';
      case '/services': return 'SERVICES';
      default: return 'UESCOM';
    }
  };

  return (
    <header className="p-8 md:p-12 flex justify-between items-center bg-transparent">
      <div className="flex items-center gap-4">
        <button onClick={onOpenMobileMenu} className="md:hidden p-2.5 bg-[#0e223f] text-white rounded-xl shadow-sm">
          <Menu size={20}/>
        </button>
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-[#0e223f] tracking-tight uppercase">{getTitle()}</h1>
          <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1">Espace de gestion connecté</p>
        </div>
      </div>
      <div className="w-10 h-10 md:w-11 md:h-11 bg-[#0e223f] rounded-xl flex items-center justify-center text-white font-bold border border-slate-200 shadow-sm overflow-hidden">
        <img src={logo} alt="User" className="w-full h-full object-cover" />
      </div>
    </header>
  );
};

export default App;
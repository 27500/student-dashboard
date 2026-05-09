import React, { useState } from 'react';
import { 
  LayoutDashboard, GraduationCap, Briefcase, Globe, 
  CreditCard, Cake, Users, Settings, Bell, Search, Menu, X
} from 'lucide-react';

import Login from './pages/Login';
import Services from './pages/Services';
import Anniversaires from './pages/Anniversaires';
import Stages from './pages/Stages';
import Communaute from './pages/Communaute';
import InfosAdmin from './pages/InfosAdmin'; // Nouvel import

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('Accueil');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [userData] = useState({
    prenom: "Blessing", 
    nom: "Mingenge",    
    universite: "Génie Biologique",
    matricule: "#MC-2026-001234",
    date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
  });

  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  const renderContent = () => {
    switch (activeTab) {
      case 'Services': return <Services />;
      case 'Anniversaires': return <Anniversaires />;
      case 'Communauté': return <Communaute />;
      case 'Stages': return <Stages />; // Correction : un seul case Stages ici
      case 'Infos admin': return <InfosAdmin />;
      case 'Ma carte': return (
        <div className="flex justify-center p-4">
            <div className="w-full max-w-sm bg-[#0e223f] p-6 rounded-[32px] text-white shadow-2xl relative overflow-hidden">
                <p className="text-[10px] font-black tracking-widest opacity-50 uppercase mb-4 italic">Carte de Membre</p>
                <div className="flex gap-4 items-center mb-8">
                    <div className="w-16 h-16 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center text-[10px] italic">PHOTO</div>
                    <div>
                        <h3 className="text-lg font-black">{userData.prenom} {userData.nom}</h3>
                        <p className="text-[10px] opacity-70 italic">{userData.universite}</p>
                    </div>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between items-end font-mono">
                    <span className="text-[10px] opacity-50">{userData.matricule}</span>
                    <div className="w-10 h-10 bg-white rounded-lg"></div>
                </div>
            </div>
        </div>
      );
      default: return (
        <div className="space-y-6 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             <StatCard title="Statut" value="Actif" />
             <StatCard title="Stages" value="05" />
             <div className="hidden md:block"><StatCard title="Services" value="06" /></div>
          </div>
          
          <h3 className="font-black text-[#0e223f] uppercase text-xs tracking-widest flex items-center gap-2">
            Accès rapide <span className="h-[1px] bg-slate-100 flex-1"></span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             <QuickLink onClick={() => setActiveTab('Stages')} icon={<Briefcase/>} label="Stages" />
             <QuickLink onClick={() => setActiveTab('Services')} icon={<Globe/>} label="Services" />
             <QuickLink onClick={() => setActiveTab('Ma carte')} icon={<CreditCard/>} label="Carte" />
             <QuickLink onClick={() => setActiveTab('Infos admin')} icon={<GraduationCap/>} label="Admin" />
             <QuickLink onClick={() => setActiveTab('Anniversaires')} icon={<Cake/>} label="Fêtes" />
             <QuickLink onClick={() => setActiveTab('Communauté')} icon={<Users/>} label="Social" />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-800 overflow-hidden">
      
      <aside className="hidden md:flex w-72 bg-[#0e223f] text-white flex-col p-6 shadow-2xl">
        <h1 className="text-xl font-black italic mb-10 tracking-tighter uppercase border-b border-white/10 pb-4">UESCOM-APP</h1>
        <nav className="flex-1 space-y-1">
          <NavItem onClick={() => setActiveTab('Accueil')} icon={<LayoutDashboard size={18}/>} label="Accueil" active={activeTab === 'Accueil'} />
          <NavItem onClick={() => setActiveTab('Infos admin')} icon={<GraduationCap size={18}/>} label="Infos admin" active={activeTab === 'Infos admin'} />
          <NavItem onClick={() => setActiveTab('Stages')} icon={<Briefcase size={18}/>} label="Stages" active={activeTab === 'Stages'} />
          <NavItem onClick={() => setActiveTab('Services')} icon={<Globe size={18}/>} label="Services" active={activeTab === 'Services'} />
          <NavItem onClick={() => setActiveTab('Ma carte')} icon={<CreditCard size={18}/>} label="Ma carte" active={activeTab === 'Ma carte'} />
          <NavItem onClick={() => setActiveTab('Anniversaires')} icon={<Cake size={18}/>} label="Anniversaires" active={activeTab === 'Anniversaires'} />
          <NavItem onClick={() => setActiveTab('Communauté')} icon={<Users size={18}/>} label="Communauté" active={activeTab === 'Communauté'} />
        </nav>
      </aside>

      <main className="flex-1 flex flex-col h-full relative">
        <header className="p-6 md:p-10 flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-[#0e223f] tracking-tight italic uppercase">{activeTab}</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{userData.date}</p>
          </div>
          <div className="flex gap-2 items-center">
             <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0e223f] rounded-xl flex items-center justify-center text-white font-black italic shadow-lg border-2 border-white">
                {userData.prenom[0]}{userData.nom[0]}
             </div>
          </div>
        </header>

        <section className="flex-1 overflow-y-auto px-6 md:px-10 pb-24 md:pb-10">
          {renderContent()}
        </section>

        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 flex justify-between items-center shadow-2xl z-50">
          <MobileTab icon={<LayoutDashboard size={20}/>} active={activeTab === 'Accueil'} onClick={() => setActiveTab('Accueil')} />
          <MobileTab icon={<Briefcase size={20}/>} active={activeTab === 'Stages'} onClick={() => setActiveTab('Stages')} />
          <MobileTab icon={<GraduationCap size={20}/>} active={activeTab === 'Infos admin'} onClick={() => setActiveTab('Infos admin')} />
          <MobileTab icon={<CreditCard size={20}/>} active={activeTab === 'Ma carte'} onClick={() => setActiveTab('Ma carte')} />
          <MobileTab icon={<Users size={20}/>} active={activeTab === 'Communauté'} onClick={() => setActiveTab('Communauté')} />
        </nav>
      </main>
    </div>
  );
};

// Composants de style
const NavItem = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${active ? 'bg-white text-[#0e223f] font-bold shadow-lg translate-x-2' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
    {icon} <span className="text-sm tracking-tight">{label}</span>
  </button>
);

const MobileTab = ({ icon, active, onClick }) => (
  <button onClick={onClick} className={`p-2 rounded-xl transition-all ${active ? 'text-[#0e223f] bg-slate-50 scale-110 shadow-inner' : 'text-slate-300'}`}>
    {icon}
  </button>
);

const StatCard = ({ title, value }) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-50 shadow-sm">
    <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mb-1">{title}</p>
    <p className="text-2xl font-black text-[#0e223f] italic tracking-tighter">{value}</p>
  </div>
);

const QuickLink = ({ icon, label, onClick }) => (
  <button onClick={onClick} className="bg-white p-6 rounded-[24px] border border-slate-50 shadow-sm flex flex-col items-center gap-3 hover:bg-[#0e223f] hover:text-white group transition-all transform hover:-translate-y-1">
    <div className="text-[#0e223f] group-hover:text-white transition-colors">{icon}</div>
    <span className="text-[9px] font-black uppercase tracking-tighter">{label}</span>
  </button>
);

export default App;
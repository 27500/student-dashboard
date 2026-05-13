import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn, ShieldCheck } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation de connexion
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-[#0e223f] flex items-center justify-center p-6 font-sans">
      {/* CARD PRINCIPALE */}
      <div className="w-full max-w-md bg-white rounded-[40px] p-10 shadow-2xl relative overflow-hidden">
        
        {/* ÉLÉMENT DÉCORATIF */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        
        {/* HEADER DU LOGIN */}
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-[#0e223f] rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg -rotate-3 transition-transform hover:rotate-0 cursor-pointer">
            <LogIn size={28}/>
          </div>
          <h2 className="text-3xl font-black text-[#0e223f] italic tracking-tighter uppercase leading-none">
            Espace <br/> Administratif
          </h2>
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-3">UESCOM Management System</p>
        </div>

        {/* FORMULAIRE */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative group">
            <div className="absolute left-5 top-5 text-slate-300 group-focus-within:text-[#0e223f] transition-colors">
              <Mail size={20}/>
            </div>
            <input 
              required
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email institutionnel" 
              className="w-full pl-14 p-5 bg-slate-50 rounded-2xl border-none text-sm font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-[#0e223f] transition-all outline-none"
            />
          </div>

          <div className="relative group">
            <div className="absolute left-5 top-5 text-slate-300 group-focus-within:text-[#0e223f] transition-colors">
              <Lock size={20}/>
            </div>
            <input 
              required
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe" 
              className="w-full pl-14 p-5 bg-slate-50 rounded-2xl border-none text-sm font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-[#0e223f] transition-all outline-none"
            />
          </div>

          <div className="flex justify-end px-2">
            <button type="button" className="text-[10px] font-black text-slate-400 uppercase hover:text-[#0e223f] transition-colors">
              Mot de passe oublié ?
            </button>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#0e223f] text-white p-5 rounded-2xl font-black uppercase italic tracking-widest text-xs shadow-xl hover:scale-[1.02] transition-transform active:scale-95 mt-4 flex items-center justify-center gap-2"
          >
            <ShieldCheck size={16}/> Se connecter
          </button>
        </form>

        {/* LIEN VERS INSCRIPTION */}
        <div className="mt-10 pt-6 border-t border-slate-50 text-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
            Vous n'avez pas encore de compte ? 
            <Link 
              to="/inscription" 
              className="text-[#0e223f] underline ml-2 hover:text-orange-500 transition-colors font-black"
            >
              Inscrivez-vous ici
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
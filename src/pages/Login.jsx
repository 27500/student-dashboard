import React from 'react';
import { Globe } from 'lucide-react';

const Login = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[32px] shadow-2xl p-10 border border-slate-100">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-[#0e223f] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <Globe size={32} className="text-blue-300" />
          </div>
          <h1 className="text-2xl font-black text-[#0e223f] tracking-tight">UESCOM-APP</h1>
          <p className="text-slate-400 text-sm font-medium">Connectez-vous à votre espace</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Email</label>
            <input type="email" placeholder="votre@email.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-[#0e223f] transition-all" />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Mot de passe</label>
            <input type="password" placeholder="••••••••" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-[#0e223f] transition-all" />
          </div>
          <button type="submit" className="w-full py-4 bg-[#0e223f] text-white rounded-2xl font-bold shadow-xl hover:bg-[#1a3a63] transition-all transform hover:-translate-y-1">
            Se connecter
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400">Pas encore de compte ? <span className="text-[#0e223f] font-bold cursor-pointer">S'inscrire</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
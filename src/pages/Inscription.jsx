import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ArrowLeft, Mail, Lock, User } from 'lucide-react';

const Inscription = () => {
  return (
    <div className="min-h-screen bg-[#0e223f] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-[40px] p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        
        <Link to="/login" className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase mb-8 hover:text-[#0e223f] transition-colors">
          <ArrowLeft size={14}/> Retour à la connexion
        </Link>

        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-[#0e223f] rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg rotate-3">
            <UserPlus size={28}/>
          </div>
          <h2 className="text-3xl font-black text-[#0e223f] italic tracking-tighter uppercase leading-none">Rejoindre <br/> L'UESCOM</h2>
        </div>

        <form className="space-y-4">
          <InputField icon={<User/>} type="text" placeholder="Nom complet" />
          <InputField icon={<Mail/>} type="email" placeholder="Email institutionnel" />
          <InputField icon={<Lock/>} type="password" placeholder="Mot de passe" />
          
          <button className="w-full bg-[#0e223f] text-white p-5 rounded-2xl font-black uppercase italic tracking-widest text-xs shadow-xl hover:scale-[1.02] transition-transform active:scale-95 mt-6">
            Créer mon compte
          </button>
        </form>

        <p className="text-center mt-8 text-[10px] font-bold text-slate-400 uppercase">
          Déjà inscrit ? <Link to="/login" className="text-[#0e223f] underline ml-1">Connectez-vous</Link>
        </p>
      </div>
    </div>
  );
};

const InputField = ({ icon, type, placeholder }) => (
  <div className="relative group">
    <div className="absolute left-5 top-5 text-slate-300 group-focus-within:text-[#0e223f] transition-colors">{icon}</div>
    <input 
      type={type} 
      placeholder={placeholder} 
      className="w-full pl-14 p-5 bg-slate-50 rounded-2xl border-none text-sm font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-[#0e223f] transition-all"
    />
  </div>
);

export default Inscription;
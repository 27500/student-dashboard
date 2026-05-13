import React, { useState } from 'react';
import { CreditCard, Check, X, User, ShieldCheck, AlertCircle } from 'lucide-react';

const DemandesCartes = () => {
  const [demandes, setDemandes] = useState([
    { id: 1, nom: "nathan milungu", filiere: "Génie Civil", photo: "IM", date: "12/05/2026" },
    { id: 2, nom: "Merdy ipondo", filiere: "Informatique", photo: "MK", date: "11/05/2026" },
    { id: 3, nom: "Sarah Luvumbu", filiere: "Génie Biologique", photo: "SL", date: "10/05/2026" },
  ]);

  const [carteGeneree, setCarteGeneree] = useState(null);

  const handleAccepter = (demande) => {
    setCarteGeneree(demande); // On affiche la carte générée
    setDemandes(demandes.filter(d => d.id !== demande.id)); // On retire de la liste
  };

  const handleRefuser = (id) => {
    setDemandes(demandes.filter(d => d.id !== id));
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-black text-[#0e223f] italic uppercase tracking-tighter">Demandes de Cartes</h2>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Validation des adhésions</p>
        </div>
        <div className="bg-orange-50 text-orange-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase flex items-center gap-2">
          <AlertCircle size={14}/> {demandes.length} En attente
        </div>
      </div>

      {/* ZONE DE GÉNÉRATION (S'affiche quand on accepte) */}
      {carteGeneree && (
        <div className="bg-green-50 border-2 border-green-200 p-6 rounded-[32px] animate-in zoom-in-95 duration-300 relative overflow-hidden">
          <button onClick={() => setCarteGeneree(null)} className="absolute top-4 right-4 text-green-600 hover:rotate-90 transition-transform">
            <X size={20}/>
          </button>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-green-700 font-black text-[10px] uppercase mb-4">
              <ShieldCheck size={14}/> Carte générée avec succès pour {carteGeneree.nom}
            </div>
            
            {/* APERÇU DE LA CARTE CRÉÉE */}
            <div className="w-full max-w-sm bg-[#0e223f] p-6 rounded-[24px] text-white shadow-2xl relative">
               <div className="flex justify-between items-start mb-6">
                 <p className="text-[8px] font-black tracking-[0.3em] opacity-50 uppercase italic">Membre Officiel UESCOM</p>
                 <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center italic font-black text-[8px]">UES</div>
               </div>
               <div className="flex gap-4 items-center mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-xl font-black italic border border-white/20">
                    {carteGeneree.photo}
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase italic tracking-tighter leading-none">{carteGeneree.nom}</h3>
                    <p className="text-[10px] text-blue-300 font-bold uppercase mt-1">{carteGeneree.filiere}</p>
                  </div>
               </div>
               <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <p className="text-[8px] font-mono opacity-40 uppercase tracking-widest italic">ID: {Math.floor(Math.random() * 90000) + 10000}</p>
                  <div className="w-8 h-8 bg-white rounded-md"></div>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* LISTE DES DEMANDES */}
      <div className="grid gap-3">
        {demandes.length > 0 ? demandes.map((d) => (
          <div key={d.id} className="bg-white p-5 rounded-[24px] border border-slate-50 shadow-sm flex items-center justify-between group hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-[18px] flex items-center justify-center text-[#0e223f] font-black text-sm italic">
                {d.photo}
              </div>
              <div>
                <p className="font-black text-[#0e223f] text-sm uppercase italic leading-none">{d.nom}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{d.filiere} • {d.date}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={() => handleRefuser(d.id)}
                className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
              >
                <X size={18} />
              </button>
              <button 
                onClick={() => handleAccepter(d)}
                className="p-3 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all shadow-sm flex items-center gap-2"
              >
                <Check size={18} />
                <span className="text-[10px] font-black uppercase hidden md:block">Accepter</span>
              </button>
            </div>
          </div>
        )) : (
          <div className="text-center py-20 bg-slate-50 rounded-[32px] border-2 border-dashed border-slate-200">
             <CreditCard size={40} className="mx-auto text-slate-300 mb-3 opacity-50"/>
             <p className="text-sm font-black text-slate-400 uppercase italic">Aucune demande en attente</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemandesCartes;
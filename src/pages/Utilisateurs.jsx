import React, { useState } from 'react';
import { Users, User, Mail, MapPin, ChevronRight, GraduationCap, ArrowLeft } from 'lucide-react';

const Utilisateurs = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const users = [
    { id: 1, prenom: "Blessing", nom: "Mingenge", filiere: "Génie Biologique", ville: "Settat", email: "b.mingenge@student.ma", tel: "+212 600", statut: "Admin" },
    { id: 2, prenom: "luche", nom: "dan", filiere: "Génie Civil", ville: "Settat", email: "luchedan@student.ma", tel: "+212 611", statut: "Étudiant" },
    { id: 3, prenom: "fortunat", nom: "Kadima", filiere: "Informatique", ville: "Settat", email: "fortunakadima@student.ma", tel: "+212 622", statut: "Étudiant" },
    { id: 4, prenom: "obed", nom: "kapia", filiere: "Génie Biologique", ville: "Settat", email: "obedkapia@student.ma", tel: "+212 633", statut: "Étudiant" },
    { id: 5, prenom: "emmanuel", nom: "lutu", filiere: "Électronique", ville: "Casablanca", email: "emmalutu@student.ma", tel: "+212 644", statut: "Étudiant" },
    { id: 6, prenom: "moise", nom: "mitundukidi", filiere: "Procédés", ville: "Settat", email: "moisemitundukidi@student.ma", tel: "+212 655", statut: "Étudiant" },
    { id: 7, prenom: "eli", nom: "Mukendi", filiere: "Mathématiques", ville: "Settat", email: "elimukendi@student.ma", tel: "+212 666", statut: "Étudiant" },
    { id: 8, prenom: "Prisca", nom: "Kabasele", filiere: "Génie Biologique", ville: "Marrakech", email: "p.kabasele@student.ma", tel: "+212 677", statut: "Étudiant" },
  ];

  if (selectedUser) {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <button onClick={() => setSelectedUser(null)} className="flex items-center gap-2 text-[#0e223f] font-black text-xs uppercase hover:underline">
          <ArrowLeft size={16} /> Retour à l'annuaire
        </button>
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-50">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-[#0e223f] rounded-2xl flex items-center justify-center text-white text-2xl font-black italic shadow-lg">
              {selectedUser.prenom[0]}{selectedUser.nom[0]}
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#0e223f] uppercase italic">{selectedUser.prenom} {selectedUser.nom}</h2>
              <p className="text-slate-400 font-bold text-xs tracking-widest uppercase">{selectedUser.filiere}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Contact</p>
                <p className="text-sm font-bold text-[#0e223f]">{selectedUser.email}</p>
                <p className="text-sm text-slate-500">{selectedUser.tel}</p>
             </div>
             <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Localisation</p>
                <p className="text-sm font-bold text-[#0e223f]">{selectedUser.ville}, Maroc</p>
                <p className="text-sm text-slate-500">FST de Settat</p>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-black text-[#0e223f] italic uppercase">Membres UESCOM ({users.length})</h2>
      <div className="bg-white rounded-[24px] shadow-sm border border-slate-50 overflow-hidden">
        {users.map((u) => (
          <div key={u.id} onClick={() => setSelectedUser(u)} className="flex items-center justify-between p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-[#0e223f] font-bold text-xs uppercase">{u.prenom[0]}{u.nom[0]}</div>
              <div>
                <p className="font-black text-[#0e223f] text-sm uppercase italic">{u.prenom} {u.nom}</p>
                <p className="text-[9px] text-slate-400 font-bold uppercase">{u.filiere}</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Utilisateurs;
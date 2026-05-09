import React from 'react';
import { User, Mail, Phone, MapPin, GraduationCap, FileText, Edit, ShieldCheck } from 'lucide-react';

const Profil = () => {
  // Données basées sur ton profil actuel
  const user = {
    prenom: "Blessing",
    nom: "Mingenge",
    email: "blessing.milungu@student.ma", // Exemple basé sur ton nom
    tel: "+212 6 00 00 00 00",
    ville: "Settat",
    universite: "Faculté des Sciences et Techniques (FST)",
    filiere: "Génie Biologique",
    statut: "Membre actif"
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
      {/* SECTION ENTÊTE PROFIL */}
      <div className="bg-white p-8 rounded-[32px] border border-slate-50 shadow-sm text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-[#0e223f] to-blue-900 opacity-10"></div>
        
        <div className="relative">
          <div className="w-24 h-24 bg-[#0e223f] rounded-3xl mx-auto flex items-center justify-center text-white text-3xl font-black italic border-4 border-white shadow-xl mb-4">
            {user.prenom[0]}{user.nom[0]}
          </div>
          <h2 className="text-2xl font-black text-[#0e223f]">{user.prenom} {user.nom}</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">{user.email}</p>
          
          <div className="flex justify-center gap-2">
            <span className="bg-green-100 text-green-600 text-[10px] font-black px-3 py-1 rounded-full uppercase flex items-center gap-1">
              <ShieldCheck size={12}/> {user.statut}
            </span>
            <span className="bg-slate-100 text-slate-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">
              {user.ville}
            </span>
          </div>
        </div>

        <button className="mt-6 flex items-center gap-2 mx-auto bg-[#0e223f] text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-blue-900 transition-colors">
          <Edit size={14}/> Modifier le profil
        </button>
      </div>

      {/* GRILLE D'INFORMATIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Infos Personnelles */}
        <div className="bg-white p-6 rounded-[24px] border border-slate-50 shadow-sm">
          <h3 className="text-[#0e223f] font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
            <User size={16}/> Informations personnelles
          </h3>
          <div className="space-y-4">
            <InfoItem label="Nom complet" value={`${user.prenom} ${user.nom}`} />
            <InfoItem label="Email" value={user.email} />
            <InfoItem label="Téléphone" value={user.tel} />
            <InfoItem label="Ville" value={user.ville} />
          </div>
        </div>

        {/* Scolarité */}
        <div className="bg-white p-6 rounded-[24px] border border-slate-50 shadow-sm">
          <h3 className="text-[#0e223f] font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
            <GraduationCap size={16}/> Études & Documents
          </h3>
          <div className="space-y-4">
            <InfoItem label="Université" value={user.universite} />
            <InfoItem label="Filière" value={user.filiere} />
            
            <div className="pt-2">
              <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Documents joints</p>
              <div className="flex gap-2">
                <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-dashed border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-600">Passeport.pdf</span>
                  <FileText size={14} className="text-[#0e223f]"/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">{label}</p>
    <p className="text-sm font-bold text-[#0e223f]">{value}</p>
  </div>
);

export default Profil;
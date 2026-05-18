import React, { useState, useEffect } from 'react';
import { Plus, Briefcase, Building2, Send, X, MapPin, Link as LinkIcon, Image as ImageIcon, AlignLeft, Globe } from 'lucide-react';
import { apiService } from '../services/api';

const Stages = () => {
  const [showForm, setShowForm] = useState(false);
  const [offres, setOffres] = useState([
    { 
      id: 1, 
      entreprise: "OCP Group", 
      poste: "Stagiaire Laboratoire", 
      type: "PFE",
      ville: "Jorf Lasfar",
      url: "https://www.ocpgroup.ma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/OCP_Group_Logo.png",
      description: "Analyse des échantillons de phosphate et suivi des protocoles qualité au sein du département bio-industriel.",
      date: "17/05/2026" 
    }
  ]);

  const [newOffre, setNewOffre] = useState({ 
    entreprise: '', poste: '', description: '', type: 'PFE', ville: '', url: '', logo: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const localStage = { id: Date.now(), ...newOffre, date: new Date().toLocaleDateString() };
    setOffres([localStage, ...offres]);
    setNewOffre({ entreprise: '', poste: '', description: '', type: 'PFE', ville: '', url: '', logo: '' });
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-xl font-bold text-[#0e223f] uppercase tracking-tight">Opportunities Portal</h2>
          <p className="text-xs text-slate-400 font-medium">Diffusion et indexation des offres partenaires</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)} 
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-sm ${showForm ? 'bg-slate-200 text-slate-700' : 'bg-[#0e223f] text-white hover:bg-[#09172c]'}`}
        >
          {showForm ? <X size={14}/> : <Plus size={14}/>} {showForm ? "Fermer" : "Nouvelle offre"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 animate-in bypass-fade duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">Nom de l'Entreprise</label>
              <div className="relative"><Building2 size={15} className="absolute left-4 top-3.5 text-slate-400"/><input required value={newOffre.entreprise} onChange={(e) => setNewOffre({...newOffre, entreprise: e.target.value})} type="text" className="w-full pl-11 p-3 bg-slate-50 rounded-xl text-sm border border-transparent focus:border-slate-300 focus:bg-white focus:ring-0 transition-all outline-none" /></div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">Intitulé du Poste</label>
              <div className="relative"><Briefcase size={15} className="absolute left-4 top-3.5 text-slate-400"/><input required value={newOffre.poste} onChange={(e) => setNewOffre({...newOffre, poste: e.target.value})} type="text" className="w-full pl-11 p-3 bg-slate-50 rounded-xl text-sm border border-transparent focus:border-slate-300 focus:bg-white focus:ring-0 transition-all outline-none" /></div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">Ville</label>
              <div className="relative"><MapPin size={15} className="absolute left-4 top-3.5 text-slate-400"/><input required value={newOffre.ville} onChange={(e) => setNewOffre({...newOffre, ville: e.target.value})} type="text" className="w-full pl-11 p-3 bg-slate-50 rounded-xl text-sm border border-transparent focus:border-slate-300 focus:bg-white focus:ring-0 transition-all outline-none" /></div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">Site Web de l'entreprise</label>
              <div className="relative"><LinkIcon size={15} className="absolute left-4 top-3.5 text-slate-400"/><input value={newOffre.url} onChange={(e) => setNewOffre({...newOffre, url: e.target.value})} type="url" placeholder="https://..." className="w-full pl-11 p-3 bg-slate-50 rounded-xl text-sm border border-transparent focus:border-slate-300 focus:bg-white focus:ring-0 transition-all outline-none" /></div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">URL du Logo</label>
              <div className="relative"><ImageIcon size={15} className="absolute left-4 top-3.5 text-slate-400"/><input value={newOffre.logo} onChange={(e) => setNewOffre({...newOffre, logo: e.target.value})} type="url" placeholder="https://..." className="w-full pl-11 p-3 bg-slate-50 rounded-xl text-sm border border-transparent focus:border-slate-300 focus:bg-white focus:ring-0 transition-all outline-none" /></div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">Type de Contrat</label>
              <select value={newOffre.type} onChange={(e) => setNewOffre({...newOffre, type: e.target.value})} className="w-full p-3 bg-slate-50 rounded-xl text-sm border border-transparent focus:border-slate-300 focus:bg-white focus:ring-0 transition-all outline-none font-medium">
                <option value="PFE">Stage de Fin d'Études (PFE)</option>
                <option value="Technique">Stage Technique</option>
                <option value="Immersion">Stage d'Immersion</option>
              </select>
            </div>

            <div className="md:col-span-2 space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">Description du poste</label>
              <div className="relative"><AlignLeft size={15} className="absolute left-4 top-4 text-slate-400"/><textarea required rows="4" value={newOffre.description} onChange={(e) => setNewOffre({...newOffre, description: e.target.value})} className="w-full pl-11 p-3 bg-slate-50 rounded-xl text-sm border border-transparent focus:border-slate-300 focus:bg-white focus:ring-0 transition-all outline-none"></textarea></div>
            </div>
          </div>
          <button type="submit" className="w-full bg-[#0e223f] text-white p-3.5 rounded-xl font-bold uppercase text-xs shadow-sm hover:bg-[#09172c] transition-colors flex items-center justify-center gap-2"><Send size={14}/> Diffuser l'offre</button>
        </form>
      )}

      {/* COMPOSANT DE LISTE SANS COULEUR VERT/ORANGE */}
      <div className="space-y-4">
        {offres.map((o) => (
          <div key={o.id} className="bg-white rounded-xl border border-slate-200 p-5 md:p-6 shadow-sm flex flex-col md:flex-row gap-5 items-start border-l-4 border-l-[#0e223f]">
            <div className="w-14 h-14 bg-slate-50 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden border border-slate-100 p-1">
              {o.logo ? <img src={o.logo} alt="" className="w-full h-full object-contain" /> : <Briefcase size={22} className="text-slate-300"/>}
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-lg font-bold text-[#0e223f] uppercase tracking-tight">{o.poste}</h3>
                {/* Le badge est maintenant sobre et gris/bleu marine discret */}
                <span className="bg-slate-100 text-[#0e223f] text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-200 uppercase tracking-wide">{o.type}</span>
              </div>
              
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-medium text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-600"><Building2 size={13}/> {o.entreprise}</span>
                <span className="flex items-center gap-1.5 text-slate-600"><MapPin size={13}/> {o.ville}</span>
                <span className="flex items-center gap-1.5"><Globe size={13}/> {o.date}</span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100 font-normal">
                {o.description}
              </p>

              {o.url && (
                <div className="pt-2">
                  <a href={o.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-[#0e223f] font-semibold hover:underline transition-colors">
                    Visiter le site de l'entreprise <LinkIcon size={12} className="ml-1"/>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stages;
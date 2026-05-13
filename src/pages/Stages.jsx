import React, { useState } from 'react';
import { Plus, Briefcase, Building2, Send, X, MapPin, Link as LinkIcon, Image as ImageIcon, AlignLeft, Globe } from 'lucide-react';

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
      logo: "https://thfvnext.bing.com/th/id/OIP.B_z1x4p5hOKYkhmvWDdtAgHaHW?r=0&o=7&cb=thfvnextrm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Analyse des échantillons de phosphate et suivi des protocoles qualité au sein du département bio-industriel.",
      date: "13/05/2026" 
    }
  ]);

  const [newOffre, setNewOffre] = useState({ 
    entreprise: '', poste: '', description: '', type: 'PFE', ville: '', url: '', logo: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const stage = { id: Date.now(), ...newOffre, date: new Date().toLocaleDateString() };
    setOffres([stage, ...offres]);
    setNewOffre({ entreprise: '', poste: '', description: '', type: 'PFE', ville: '', url: '', logo: '' });
    setShowForm(false);
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-black text-[#0e223f] italic uppercase tracking-tighter">Opportunités de Stages</h2>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Diffusion et gestion des offres</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)} 
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-[10px] font-black transition-all shadow-lg ${showForm ? 'bg-red-500 text-white' : 'bg-[#0e223f] text-white'}`}
        >
          {showForm ? <X size={16}/> : <Plus size={16}/>} {showForm ? "FERMER" : "AJOUTER UNE OFFRE"}
        </button>
      </div>

      {/* FORMULAIRE D'AJOUT */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[32px] border-2 border-[#0e223f] shadow-2xl space-y-6 animate-in zoom-in-95 duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-2 text-white">Nom de l'Entreprise</label>
              <div className="relative"><Building2 size={16} className="absolute left-4 top-3.5 text-slate-400"/><input required value={newOffre.entreprise} onChange={(e) => setNewOffre({...newOffre, entreprise: e.target.value})} type="text" className="w-full pl-12 p-3.5 bg-slate-50 rounded-2xl text-sm border-none focus:ring-2 focus:ring-[#0e223f]" /></div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-2">Intitulé du Poste</label>
              <div className="relative"><Briefcase size={16} className="absolute left-4 top-3.5 text-slate-400"/><input required value={newOffre.poste} onChange={(e) => setNewOffre({...newOffre, poste: e.target.value})} type="text" className="w-full pl-12 p-3.5 bg-slate-50 rounded-2xl text-sm border-none focus:ring-2 focus:ring-[#0e223f]" /></div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-2">Ville / Localisation</label>
              <div className="relative"><MapPin size={16} className="absolute left-4 top-3.5 text-slate-400"/><input required value={newOffre.ville} onChange={(e) => setNewOffre({...newOffre, ville: e.target.value})} type="text" placeholder="Ex: Settat, Casablanca..." className="w-full pl-12 p-3.5 bg-slate-50 rounded-2xl text-sm border-none focus:ring-2 focus:ring-[#0e223f]" /></div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-2">Lien Site Web</label>
              <div className="relative"><LinkIcon size={16} className="absolute left-4 top-3.5 text-slate-400"/><input value={newOffre.url} onChange={(e) => setNewOffre({...newOffre, url: e.target.value})} type="url" placeholder="https://..." className="w-full pl-12 p-3.5 bg-slate-50 rounded-2xl text-sm border-none focus:ring-2 focus:ring-[#0e223f]" /></div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-2">URL du Logo</label>
              <div className="relative"><ImageIcon size={16} className="absolute left-4 top-3.5 text-slate-400"/><input value={newOffre.logo} onChange={(e) => setNewOffre({...newOffre, logo: e.target.value})} type="url" className="w-full pl-12 p-3.5 bg-slate-50 rounded-2xl text-sm border-none focus:ring-2 focus:ring-[#0e223f]" /></div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-2">Type de Stage</label>
              <select value={newOffre.type} onChange={(e) => setNewOffre({...newOffre, type: e.target.value})} className="w-full p-3.5 bg-slate-50 rounded-2xl text-sm border-none focus:ring-2 focus:ring-[#0e223f] font-bold">
                <option value="PFE">PFE</option>
                <option value="Technique">Stage Technique</option>
                <option value="Immersion">Stage d'Immersion</option>
              </select>
            </div>

            <div className="md:col-span-2 space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-2">Description complète du poste</label>
              <div className="relative"><AlignLeft size={16} className="absolute left-4 top-4 text-slate-400"/><textarea required rows="4" value={newOffre.description} onChange={(e) => setNewOffre({...newOffre, description: e.target.value})} className="w-full pl-12 p-4 bg-slate-50 rounded-2xl text-sm border-none focus:ring-2 focus:ring-[#0e223f]"></textarea></div>
            </div>
          </div>
          <button type="submit" className="w-full bg-[#0e223f] text-white p-4 rounded-2xl font-black uppercase text-xs shadow-xl flex items-center justify-center gap-2 italic hover:scale-[1.01] transition-transform"><Send size={16}/> Publier l'offre sur le portail</button>
        </form>
      )}

      {/* AFFICHAGE DES OFFRES DÉTAILLÉES */}
      <div className="grid gap-6">
        {offres.map((o) => (
          <div key={o.id} className="bg-white rounded-[32px] border border-slate-50 shadow-sm overflow-hidden group hover:shadow-xl transition-all border-l-8 border-l-[#0e223f]">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo & Header */}
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden border border-slate-100">
                  {o.logo ? <img src={o.logo} alt="Logo" className="w-full h-full object-contain p-2" /> : <Building2 size={30} className="text-slate-200"/>}
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-black text-[#0e223f] uppercase italic leading-none">{o.poste}</h3>
                    <span className="bg-orange-100 text-orange-600 text-[8px] font-black px-2 py-1 rounded-md uppercase italic tracking-tighter">{o.type}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-[11px] font-bold uppercase text-slate-400">
                    <span className="flex items-center gap-1.5"><Building2 size={14} className="text-[#0e223f]"/> {o.entreprise}</span>
                    <span className="flex items-center gap-1.5 text-blue-600"><MapPin size={14}/> {o.ville}</span>
                    <span className="flex items-center gap-1.5"><Globe size={14}/> {o.date}</span>
                  </div>

                  {/* La description est maintenant visible directement */}
                  <div className="pt-4 border-t border-slate-50">
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {o.description}
                    </p>
                  </div>

                  {o.url && (
                    <div className="pt-2">
                      <a href={o.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#0e223f] text-[10px] font-black uppercase italic border-b-2 border-[#0e223f] pb-0.5 hover:text-orange-500 hover:border-orange-500 transition-all">
                        Consulter le site de l'entreprise <LinkIcon size={12}/>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stages;
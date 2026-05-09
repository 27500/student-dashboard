import React from 'react';
import { FileText, CheckCircle, AlertCircle, Info } from 'lucide-react';

const InfosAdmin = () => {
  const docs = [
    { title: "Carte de Séjour", status: "Important", desc: "Dépôt 2 mois avant l'expiration.", items: ["Passeport", "Certificat de scolarité", "Attestation d'hébergement"] },
    { title: "Bourse d'étude", status: "Ouvert", desc: "Renouvellement annuel pour le semestre 2.", items: ["Relevé de notes", "Copie de carte de membre"] }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-[#0e223f] p-4 rounded-r-xl">
        <div className="flex items-center gap-3">
          <AlertCircle className="text-[#0e223f]" size={20} />
          <p className="text-sm font-bold text-[#0e223f]">Rappel : Les bureaux sont fermés le vendredi après-midi.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {docs.map((doc, i) => (
          <div key={i} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-[#0e223f]">{doc.title}</h3>
              <span className="bg-[#0e223f]/10 text-[#0e223f] text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">{doc.status}</span>
            </div>
            <p className="text-sm text-slate-500 mb-4">{doc.desc}</p>
            <div className="space-y-2">
              {doc.items.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <CheckCircle size={14} className="text-green-500" /> {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfosAdmin;
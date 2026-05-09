import React from 'react';
import { MessageSquare, Users, Heart, Share2 } from 'lucide-react';

const Communaute = () => {
  const posts = [
    { id: 1, user: "Jean Mukendi", role: "Étudiant FST", content: "Quelqu'un aurait les notes du cours de thermodynamique de lundi dernier ? Merci d'avance !", likes: 12, comments: 4 },
    { id: 2, user: "Sarah K.", role: "Membre UESCOM", content: "N'oubliez pas la réunion d'accueil pour les nouveaux arrivants ce samedi à 15h !", likes: 45, comments: 8 }
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white p-4 rounded-[24px] shadow-sm border border-slate-100">
        <textarea placeholder="Partagez quelque chose avec la communauté..." className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-0 text-sm h-24 resize-none"></textarea>
        <div className="flex justify-end mt-2">
          <button className="px-6 py-2 bg-[#0e223f] text-white rounded-xl font-bold text-xs uppercase">Publier</button>
        </div>
      </div>

      {posts.map(post => (
        <div key={post.id} className="bg-white p-6 rounded-[24px] shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-[#0e223f] italic border-2 border-white shadow-sm">
              {post.user[0]}
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0e223f]">{post.user}</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{post.role}</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">{post.content}</p>
          <div className="flex items-center gap-6 border-t pt-4 text-slate-400">
             <button className="flex items-center gap-2 hover:text-red-500 transition-colors"><Heart size={18}/> <span className="text-xs font-bold">{post.likes}</span></button>
             <button className="flex items-center gap-2 hover:text-blue-500 transition-colors"><MessageSquare size={18}/> <span className="text-xs font-bold">{post.comments}</span></button>
             <button className="flex items-center gap-2 hover:text-slate-600 transition-colors"><Share2 size={18}/></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Communaute;
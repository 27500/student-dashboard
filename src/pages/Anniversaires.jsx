import React from 'react';
import { Cake, Gift } from 'lucide-react';

const Anniversaires = () => {
  const users = [
    { name: "christ mbuli", role: "Chef club uescom valley", date: "09 mai", color: "bg-pink-100 text-pink-600" },
    { name: "blessng mingenge", role: "Membre", date: "21 juin", color: "bg-blue-100 text-blue-600" }
  ];

  return (
    <div className="space-y-4">
      {users.map((u, i) => (
        <div key={i} className="bg-white p-5 rounded-[24px] shadow-sm border border-slate-100 flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className={`w-12 h-12 ${u.color} rounded-xl flex items-center justify-center`}><Cake size={20}/></div>
            <div>
              <h4 className="font-bold text-[#0e223f]">{u.name}</h4>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{u.role}</p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-500">{u.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Anniversaires;
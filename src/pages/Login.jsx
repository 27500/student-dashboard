import React, { useState } from 'react';
import { Mail, ArrowRight, Loader2, AlertCircle, KeyRound } from 'lucide-react';

import logo from '../assets/logo.jpeg';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1); // Étape 1: Saisie Email, Étape 2: Saisie Code OTP
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Étape 1 : Simulation de la soumission de l'adresse email (Sans Backend)
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Veuillez saisir votre adresse e-mail.");
      return;
    }

    setIsSubmitting(true);
    setError('');

    // On simule un temps de chargement de 1,5 seconde (comme si le serveur répondait)
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Mode démo : Un faux code de vérification  vous a été envoyé.");
      setStep(2); // On bascule directement sur le champ OTP
    }, 1500);
  };

  // Étape 2 : Simulation de la vérification du code OTP (Sans Backend)
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (!otpCode.trim() || otpCode.length !== 6) {
      setError("Le code doit contenir exactement 6 chiffres.");
      return;
    }

    setIsSubmitting(true);
    setError('');

    // On simule un petit temps de chargement de 1 seconde
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Mode démo : on accepte n'importe quel code à 6 chiffres pour faciliter tes tests
      if (otpCode.length === 6) {
        onLogin(); // Redirection ou activation immédiate du Dashboard dans le frontend
      } else {
        setError('Code incorrect ou expiré.');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6 text-center">
        

        {/* LOGO DE L'APPLICATION */}
        <div className="flex justify-center">
          <img 
            src={logo} 
            alt="Logo UESCOM" 
            className="w-32 h-32 object-contain rounded-full border border-slate-100 p-1 bg-white shadow-inner"
            onError={(e) => {
              console.error("Erreur de chargement du logo UESCOM");
            }}
          />
        </div>

        <div className="space-y-1">
          <h2 className="text-xl font-bold text-[#0e223f] uppercase tracking-tight">Portail UESCOM</h2>
          <p className="text-xs text-slate-400 font-medium">
            {step === 1 
              ? "Saisissez votre email pour recevoir votre code de connexion" 
              : "Saisissez le code à 6 chiffres reçu par e-mail"}
          </p>
        </div>

        {/* AFFICHAGE DES ERREURS */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-xs font-semibold p-3.5 rounded-xl flex items-center gap-2 text-left">
            <AlertCircle size={16} className="flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* AFFICHAGE DU MESSAGE DE SUCCÈS SIMULÉ */}
        {successMessage && !error && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold p-3 rounded-xl text-center">
            {successMessage}
          </div>
        )}

        {/* FORMULAIRE ÉTAPE 1 : ENVOI DE L'EMAIL (SIMULÉ) */}
        {step === 1 ? (
          <form onSubmit={handleEmailSubmit} className="space-y-4 text-left">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Adresse Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-3.5 text-slate-400" />
                <input 
                  required 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@uescom.com"
                  className="w-full pl-11 p-3 bg-slate-50 rounded-xl text-sm border border-transparent focus:border-slate-300 focus:bg-white focus:ring-0 transition-all outline-none" 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#0e223f] text-white p-3.5 rounded-xl font-bold uppercase text-xs shadow-sm hover:bg-[#09172c] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" /> Connexion au serveur démo...
                </>
              ) : (
                <>
                  Recevoir le code <ArrowRight size={14} />
                </>
              )}
            </button>
          </form>
        ) : (
          /* FORMULAIRE ÉTAPE 2 : Saisie du faux code OTP */
          <form onSubmit={handleOtpSubmit} className="space-y-4 text-left">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Code de vérification (Tapez 6 chiffres)</label>
              <div className="relative">
                <KeyRound size={16} className="absolute left-4 top-3.5 text-slate-400" />
                <input 
                  required 
                  type="text" 
                  maxLength={6}
                  pattern="[0-9]*"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="123456"
                  className="w-full tracking-[0.5em] text-center font-bold p-3 bg-slate-50 rounded-xl text-base border border-transparent focus:border-slate-300 focus:bg-white focus:ring-0 transition-all outline-none" 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#0e223f] text-white p-3.5 rounded-xl font-bold uppercase text-xs shadow-sm hover:bg-[#09172c] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" /> Validation du code...
                </>
              ) : (
                <>
                  Confirmer et Connexion <ArrowRight size={14} />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => { setStep(1); setOtpCode(''); setSuccessMessage(''); setError(''); }}
              className="w-full text-center text-xs text-slate-400 hover:text-slate-600 transition-colors pt-2 font-medium"
            >
              Modifier l'adresse e-mail
            </button>
          </form>
        )}

        <div className="text-[10px] text-slate-400 font-medium pt-4 border-t border-slate-100 uppercase tracking-wider">
          Union des Étudiants et Stagiaires Congolais au Maroc
        </div>
      </div>
    </div>
  );
};

export default Login;
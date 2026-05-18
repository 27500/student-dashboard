const BASE_URL = 'http://localhost:5000/api/v1'; 

export const apiService = {
  auth: {
    // Étape 1 : Envoyer l'email pour recevoir l'OTP
    login: async (email) => {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Une erreur est survenue lors de la demande du code.');
      }

      return await response.json();
    },

    // Étape 2 : Envoyer l'email + le code à 6 chiffres pour se connecter
    verifyOtp: async (email, code) => {
      const response = await fetch(`${BASE_URL}/auth/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Code incorrect ou expiré.');
      }

      return await response.json();
    }
  },

  stages: {
    getAll: async () => {
      const response = await fetch(`${BASE_URL}/stages`);
      if (!response.ok) throw new Error('Erreur lors de la récupération des stages');
      return await response.json();
    }
  }
};
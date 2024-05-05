import axios from 'axios';

const http = axios.create(
    {
        baseURL: 'https://teamsuperhero.codeo.mg/api/'
    }
)

http.interceptors.request.use(
    (config) => {
      // Récupérer le token du stockage local
      const token = localStorage.getItem('access_token');
      
      // Ajouter le token à l'en-tête de la requête
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default http;
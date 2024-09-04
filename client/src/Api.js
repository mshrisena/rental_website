import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';


const Api = axios.create({
 // baseURL:"http://localhost:3001", 
 baseURL :'https://rental-website-mwfy.onrender.com'
});


Api.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('token');

    if (authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
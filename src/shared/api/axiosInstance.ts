// todo:  read more => https://axios-http.com/docs/instance

import axios from 'axios';
import { CONFIG } from '../config';

export const api = axios.create({
  baseURL: CONFIG.VITE_DB_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

// api.interceptors.request.use(request => {
//   const accessToken = localStorage.getItem('accessToken');
//   if (accessToken) {
//     request.headers["Authorization"] = `Bearer ${accessToken}`
//   }
//   console.log("📤 Запрос отправлен:", request);
//   return request; // обязательно возвращаем request
// },
//   (error) => Promise.reject(error)
// )


// api.interceptors.response.use(
//   (response) => {
//     console.log("📥 Ответ получен:", response);
//     return response.data; // Можно сразу вернуть только data
//   },
//   (error) => {
//     // Если ошибка 401 (не авторизован) — можно перенаправить на логин
//     if (error.response && error.response.status === 401) {
//       console.warn("Не авторизован! Перенаправление на логин...");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );
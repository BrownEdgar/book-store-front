import axios from 'axios'
import { CONFIG } from '@/shared/config'

export const fetchGenresData = async () => {
  const res = await axios.get(CONFIG.VITE_DB_URL + '/books/get-genres'); 
  
  return res.data;
};

export const getUnicualGeanre = async () => {
  const res = await axios.get(CONFIG.VITE_DB_URL + '/books/get-unicGeanre'); 
  
  return res.data;
};
import axios from 'axios'
import { CONFIG } from '@/shared/config'

export const fetchGenresData = async () => {
  const res = await axios.get(CONFIG.VITE_DB_URL + '/books/get-genres');

  return res.data;
};


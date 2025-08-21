import axios from 'axios'
import { CONFIG } from '@/shared/config'

export const fetchAuthorsData = async () => {
  const res = await axios.get(CONFIG.VITE_DB_URL + "/authors" + "/get-authors");
  return res.data
}

import axios from 'axios'
import { CONFIG } from '@/shared/config'

export const fetchAuthorsData = async () => {
  const res = await axios.get(CONFIG.VITE_DB_URL + "/authors" + "/get-authors");
  return res.data
}

export const fetchSpecialAuthorData = async (id : string) => {
  const res = await axios.get(CONFIG.VITE_DB_URL + "/authors" + "/specialAuthor/" + id);
  
  return res.data[0]
}

export const deleteFetchData = async (id : string) => {
  const res = await axios.delete(CONFIG.VITE_DB_URL + "/authors/" + id);
  return res.data
}
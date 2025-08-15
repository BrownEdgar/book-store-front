import axios from 'axios'
import type { IBooksData } from '@/types/interfaces.d'
import { CONFIG } from '@/shared/config'

export const fetchBooksData = async (): Promise<IBooksData[]> => {
  const res = await axios.get(CONFIG.VITE_DB_URL + "/books");
  return res.data as IBooksData[]
}
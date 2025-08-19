import axios from 'axios'
import type { IBooksData } from '@/types/interfaces.d'
import { CONFIG } from '@/shared/config'

export const fetchBooksData = async (): Promise<IBooksData[]> => {
  const res = await axios.get(CONFIG.VITE_DB_URL + "/books");
  return res.data as IBooksData[]
}

export const deleteBookById = async (id: any) => {
  console.log(id);
  const res = await axios.delete(CONFIG.VITE_DB_URL + "/books" + '/' + id)
  return res
}

export const filterBooksByPrice = async () => {
  
  
  const res = await axios.get(CONFIG.VITE_DB_URL + "/books/filter")
  return res.data
}
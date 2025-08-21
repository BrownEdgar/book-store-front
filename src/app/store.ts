import { configureStore } from '@reduxjs/toolkit'
import booksSlice from '@/features/books/bookSlice'
import authorReducer from '@/features/authors/authorSlice'
import geanreSlice  from '@/features/geanres/geanresSlice'



export const store = configureStore({
  reducer: {
    books: booksSlice,
    autors: authorReducer, 
    geanres: geanreSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

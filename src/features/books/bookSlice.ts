import type { IBooksData } from '@/types/interfaces.d'
import { asyncThunkCreator, buildCreateSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchBooksData } from './booksApi'

interface BookState {
  data: any[]
}

const createBooksSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})




const initialState: BookState = {
  data: [],
}

export const booksSlice = createBooksSlice({
  name: 'books',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: (create) => ({
    fetchBooks: create.asyncThunk(
      async () => {
        const data: IBooksData[] = await fetchBooksData()
        return data
      },
      {
        rejected: (_, action) => {
          console.log('action', action)
        },
        fulfilled: (state, action: PayloadAction<IBooksData[]>) => {
          return {
            data: action.payload
          }
        },
      }
    ),
    selectors: {

    }
  })
})
export const { fetchBooks } = booksSlice.actions
// export const { } = booksSlice.selectors


export default booksSlice.reducer
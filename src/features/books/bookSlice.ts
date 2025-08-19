import type { IBooksData } from '@/types/interfaces.d'
import { asyncThunkCreator, buildCreateSlice, type PayloadAction, type ReducerCreators } from '@reduxjs/toolkit'
import { deleteBookById, fetchBooksData, filterBooksByPrice } from './booksApi'

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
        fulfilled: (_, action: PayloadAction<IBooksData[]>) => {
          return {
            data: action.payload
          }
        },
      }
    ),
    deleteBook: create.asyncThunk(
      async (bookID) => {
        console.log(bookID);

        const data = await deleteBookById(bookID)
        return data
      }),
    filterBooks: create.asyncThunk(
      async () => {
        const data = await filterBooksByPrice()
        return data
      },
      {
        fulfilled: (_, action: PayloadAction<IBooksData[]>) => { /// filtery gptic
          return {
            data: action.payload
          }
        }
      }
    ),
    selectors: {
    }
  })
})


export const { fetchBooks } = booksSlice.actions
export const { deleteBook } = booksSlice.actions
export const { filterBooks } = booksSlice.actions

export default booksSlice.reducer
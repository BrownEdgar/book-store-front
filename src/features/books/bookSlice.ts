import type { IBook, IBooksData } from '@/types/interfaces.d'
import { asyncThunkCreator, buildCreateSlice, type PayloadAction } from '@reduxjs/toolkit'
import { deleteBookById, fetchBooksData, filterBooksByPrice } from './booksApi'

interface BookState {
  data: IBook[],
  filterName: string[]
  specialBook: Partial<IBook>,
}

const createBooksSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})


const initialState: BookState = {
  data: [],
  filterName: [],
  specialBook: {}
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
            data: action.payload,
            filterName: [],
          }
        },
      }
    ),
    deleteBook: create.asyncThunk(
      async (bookID) => {
        const data = await deleteBookById(bookID)
        return data
      }),
    filterBooks: create.asyncThunk(
      async () => {
        const data = await filterBooksByPrice()
        return data
      },
      {
        fulfilled: (_, action: PayloadAction<IBooksData[]>) => {
          return {
            data: action.payload,
            filterName: [],
          }
        }
      }
    ),
    changeFilter: (state, { payload: { name, checked } }) => {
      if (checked) {
        state.filterName.push(name)
      } else {
        state.filterName = state.filterName.filter(elem => elem !== name)
      }
      return state
    }
  }),
  selectors: {
    getBooksByFilter: (state) => {
      if (state.filterName.length === 0) {
        return state.data
      }
      return state.data.filter((book) => state.filterName.includes(book.genre))
    }
  }
})


export const { fetchBooks, deleteBook, filterBooks, changeFilter } = booksSlice.actions
export const { getBooksByFilter } = booksSlice.selectors

export default booksSlice.reducer
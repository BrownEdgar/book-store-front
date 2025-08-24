import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { deleteFetchData, fetchAuthorsData, fetchSpecialAuthorData } from './authorApi'
import type { IAuthor } from '@/types/interfaces'




interface AuthorsState {
  data: any[],
    specialAuthor: Partial<IAuthor>,
}

const initialState: AuthorsState = {
  data: [],
  specialAuthor : {}
}

const createAuthorsSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

export const authorSlice = createAuthorsSlice({
  name: 'authors',
  initialState,
  reducers: (create) => ({
    fetchAuthors: create.asyncThunk(
      async () => {
        const data = await fetchAuthorsData()
        return data
      },
      {
        pending: (_) => {
          console.log('Loading authors...')
        },
        fulfilled: (state, action) => {
          state.data = action.payload
        },
        rejected: (_, action) => {
          console.error('Error loading authors', action.error)
        },
      }
    ),
    fetchSpecialAuthor: create.asyncThunk(
      async (id : string) => {
        const data = await fetchSpecialAuthorData(id)
        return data
      },
      {
        pending: (_) => {
          console.log('Loading author...')
        },
        fulfilled: (state, action) => {
          state.specialAuthor = action.payload
        },
        rejected: (_, action) => {
          console.error('Error loading author', action.error)
        },
      }
    ),
    deleteFetch: create.asyncThunk(
      async (id : string) => {
        const data = await deleteFetchData(id)
        return data
      },
      {
        pending: (_) => {
          console.log('Loading author...')
        },
        fulfilled: (state, action) => {
          state.data = action.payload
        },
        rejected: (_, action) => {
          console.error('Error loading author', action.error)
        },
      }
    ),
  }),
})


export const { fetchAuthors, fetchSpecialAuthor, deleteFetch } = authorSlice.actions

export default authorSlice.reducer

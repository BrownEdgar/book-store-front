import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { fetchAuthorsData } from './authorApi'




interface AuthorsState {
  data: any[]
}

const initialState: AuthorsState = {
  data: [],
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
  }),
})


export const { fetchAuthors } = authorSlice.actions

export default authorSlice.reducer

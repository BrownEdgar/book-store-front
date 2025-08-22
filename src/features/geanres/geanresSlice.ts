import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { fetchGenresData } from './geanresApi'



interface GeanreState {
  all: { count: number, geanre: 'string' }[]
}

const initialState: GeanreState = {
  all: []
}

const createGeanresSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

export const geanreSlice = createGeanresSlice({
  name: 'geanres',
  initialState,
  reducers: (create) => ({
    fetchGeanres: create.asyncThunk(
      async () => {
        const data = await fetchGenresData()
        return data
      },
      {
        fulfilled: (state, action) => {
          console.log(action.payload);

          state.all = action.payload
        },
      }
    )
  }),
})


export const { fetchGeanres } = geanreSlice.actions

export default geanreSlice.reducer

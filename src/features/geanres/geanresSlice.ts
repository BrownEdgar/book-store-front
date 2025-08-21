import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { fetchGenresData, getUnicualGeanre } from './geanresApi'



interface GeanreState {
  all: any[]
  unique: any[]
}

const initialState: GeanreState = {
  all: [],
  unique: [],
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
      state.all = action.payload
    },
  }
),
getUnicGeanre: create.asyncThunk(
  async () => {
    const data = await getUnicualGeanre()
    return data
  },
  {
    fulfilled: (state, action) => {
      state.unique = action.payload
    },
  }
),
  }),
})


export const { fetchGeanres, getUnicGeanre } = geanreSlice.actions

export default geanreSlice.reducer

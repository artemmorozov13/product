import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { addTimeReserveAdapter } from '../adapters/addTimeReserveAdapter'
import { postTimeIntervals } from '../services/postTimeIntervals'
import { TimeIntervalsStateSchema } from '../../types/timeIntervalsSchema'

const initialState = addTimeReserveAdapter.getInitialState<TimeIntervalsStateSchema>({
  isLoading: false,
  error: null,
  date: null,
  ids: [],
  entities: {}
})

export const AddTimeIntervalSlice = createSlice({
  name: 'addTimeIntervalSlice',
  initialState,
  reducers: {
    setTimeIntervalDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload
    },
    setReservationTime: (state, action) => {
      addTimeReserveAdapter.addOne(state, action.payload)
    },
    setReservationStartTimeById: (state, action) => {
      addTimeReserveAdapter.updateOne(state, action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postTimeIntervals.pending, (state) => {
      state.isLoading = true,
      state.error = null
    }),
    builder.addCase(postTimeIntervals.rejected, (state, action) => {
      state.isLoading = false,
      state.error = action.error.message
    }),
    builder.addCase(postTimeIntervals.fulfilled, (state) => {
      state.isLoading = false,
      state.error = null
    })
  }
})

export const { actions: addTimeIntervalsActions } = AddTimeIntervalSlice
export const { reducer: addTimeIntervalsReducer } = AddTimeIntervalSlice

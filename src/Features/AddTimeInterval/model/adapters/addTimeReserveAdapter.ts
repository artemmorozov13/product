import { createEntityAdapter } from '@reduxjs/toolkit'
import { TimeIntervalsType } from '../../types/timeIntervalsSchema'

export const addTimeReserveAdapter = createEntityAdapter<TimeIntervalsType>({
  selectId: (reserve) => reserve.id
})

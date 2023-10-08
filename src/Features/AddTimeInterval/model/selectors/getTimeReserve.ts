import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'
import { addTimeReserveAdapter } from '../adapters/addTimeReserveAdapter'

export const getTimeIntervals = addTimeReserveAdapter.getSelectors<StateSchema>(
  (state) => state.timeIntervalsSchema || addTimeReserveAdapter.getInitialState()
)

export const getTimeIntervalsDate = (staet: StateSchema) => {
  return staet?.timeIntervalsSchema?.date || null
}

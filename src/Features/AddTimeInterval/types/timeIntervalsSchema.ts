import { EntityState } from '@reduxjs/toolkit'

export interface TimeIntervalsStateSchema extends EntityState<TimeIntervalsType> {
  isLoading: boolean
  error: string | null
  date: string | null
}

export interface TimeIntervalsType {
  id: string
  start: string
  end: string
  isAvailable: boolean
  reserverPhone?: string | null
}

export interface TimeIntervalsFormSchema {
  date: string
  intervals: TimeIntervalsType[]
}

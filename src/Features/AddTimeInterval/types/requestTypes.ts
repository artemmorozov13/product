import { TimeIntervalsType } from './timeIntervalsSchema'

export interface TimeIntervalsPostData {
  date: string
  intervals: TimeIntervalsType[]
}

export interface TimeIntervalsResponse {
  id: number
  userId: number
  date: string
  intervals: TimeIntervalsType[]
}

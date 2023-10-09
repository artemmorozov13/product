import { TimeIntervalsType } from "Features/AddTimeInterval/types/timeIntervalsSchema"

export interface SharedBoardStateSchema {
    isLoading: boolean
    error: string | null
    data: SharedBoardDataType[] | null
}

export interface SharedBoardDataType {
    id: number,
    userId: number,
    date: string,
    intervals: TimeIntervalsType[]
}
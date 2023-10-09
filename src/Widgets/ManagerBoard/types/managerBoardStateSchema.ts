import { TimeIntervalsType } from "Features/AddTimeInterval/types/timeIntervalsSchema"

export interface ManagerBoardStateSchema {
    isLoading: boolean
    error: string | null
    data: ManagerBoardDataType[] | null
}

export interface ManagerBoardDataType {
    id: number,
    userId: number,
    date: string,
    intervals: TimeIntervalsType[]
}
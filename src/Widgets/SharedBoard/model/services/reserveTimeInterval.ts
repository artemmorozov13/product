import { TimeIntervalsType } from "Features/AddTimeInterval"
import { API } from "Shared/api/api"

export interface ReserveTimeIntervalOptions {
    serviceId: string
    data: {
        id: string
        userId: string
        date: string
        intervals: TimeIntervalsType[]
    }
}

export const reserveTimeInterval = async (options: ReserveTimeIntervalOptions) => {
    const { serviceId, data } = options

    const url = `/services/${serviceId}`
    
    API.put(url, data)
}
import { API } from "Shared/api/api"
import { SelectedDate } from "../ui/AddDateReservation"

export interface PostSelectedDataOptions {
    userId: number
    data: SelectedDate[]
}

export const postSelectedData = async (options: PostSelectedDataOptions) => {
    const { data, userId } = options

    const body = data.map(item => ({
        ...item,
        userId
    }))

    try {
        const response = await API.post(`http://localhost:1488/dates`, body)

        if (!response) {
            throw new Error("Ошибка при сохранении")
        }
    } catch (error) {
        return error.message
    }
}
import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";
import { SharedBoardDataType } from "../../types/sharedBoardStateSchema";

export const getSharedBoardData = (state: StateSchema) => {
    return state.sharedBoardSchema?.data || null
}

export const getIntervalsById = (boardData: SharedBoardDataType[], serviceId: string) => {
    return boardData?.find(item => item.id === Number(serviceId))?.intervals
}
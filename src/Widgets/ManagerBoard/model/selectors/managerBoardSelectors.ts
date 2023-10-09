import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";
import { ManagerBoardDataType } from "../../types/managerBoardStateSchema";

export const getManagerBoardData = (state: StateSchema) => {
    return state.managerBoardSchema?.data || null
}

export const getIntervalsById = (boardData: ManagerBoardDataType[], serviceId: string) => {
    return boardData?.find(item => item.id === Number(serviceId))?.intervals
}
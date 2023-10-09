import { DynamicModuleLoader, ReducersList } from "Shared/lib/components/DynamicModuleLoader"
import { managerReducer } from "../../model/slice/managerBoardSlice"
import { FC, useEffect } from "react"
import { useAppDispatch } from "Shared"
import { useSelector } from "react-redux"
import { getUserId } from "Entities/User"
import { fetchBoardData } from "../../model/services/fetchBoardData"
import { ManagerBoardHeader } from "../ManagerBoardHeader/ManagerBoardHeader"
import { Container } from "@mui/material"
import { getIntervalsById, getManagerBoardData } from "../../model/selectors/managerBoardSelectors"
import s from "./ManagerBoard.module.scss"
import { ManagerBoardContent } from "../ManagerBoardContent/ManagerBoardContent"

const reducers: ReducersList = {
    managerBoardSchema: managerReducer
}

interface ManagerBoardProps {
    serviceId?: string
}

const ManagerBoard: FC<ManagerBoardProps> = ({ serviceId }) => {
    const dispatch = useAppDispatch()
    const userId = useSelector(getUserId)
    const boardData = useSelector(getManagerBoardData)

    useEffect(() => {
        dispatch(fetchBoardData({ userId }))
    }, [])

    const intervals = getIntervalsById(boardData, serviceId)

    return(
        <DynamicModuleLoader reducers={reducers}>
            <Container className={s.container}>
                <ManagerBoardHeader />
                <ManagerBoardContent serviceId={serviceId} intervals={intervals} />
            </Container>
        </DynamicModuleLoader>
    )
}

export default ManagerBoard
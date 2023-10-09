import { DynamicModuleLoader, ReducersList } from "Shared/lib/components/DynamicModuleLoader"
import { FC, useEffect } from "react"
import { useAppDispatch } from "Shared"
import { useSelector } from "react-redux"
import { getUserId } from "Entities/User"
import { fetchBoardData } from "../../model/services/fetchBoardData"

import { Container } from "@mui/material"
import { getIntervalsById, getSharedBoardData } from "../../model/selectors/sharedBoardSelectors"
import s from "./SharedBoard.module.scss"
import { SharedBoardContent } from "../SharedBoardContent/SharedBoardContent"
import { sharedReducer } from "../../model/slice/sharedBoardSlice"
import { SharedBoardHeader } from "../SharedBoardHeader/SharedBoardHeader"

const reducers: ReducersList = {
    sharedBoardSchema: sharedReducer
}

interface SharedBoardProps {
    userId: string
    serviceId?: string
}

const SharedBoard: FC<SharedBoardProps> = ({ serviceId, userId }) => {
    const dispatch = useAppDispatch()
    const boardData = useSelector(getSharedBoardData)

    useEffect(() => {
        dispatch(fetchBoardData({ userId: Number(userId) }))
    }, [])

    const intervals = getIntervalsById(boardData, serviceId)

    return(
        <DynamicModuleLoader reducers={reducers}>
            <Container className={s.container}>
                <SharedBoardHeader userId={userId} />
                <SharedBoardContent userId={userId} intervals={intervals} serviceId={serviceId} />
            </Container>
        </DynamicModuleLoader>
    )
}

export default SharedBoard
import { SharedBoard } from "Widgets/SharedBoard"
import { FC } from "react"
import { useParams } from "react-router-dom"

const SharedBoardByIdPage: FC = () => {
    const { userId, id } = useParams()

    return (
        <SharedBoard userId={userId} serviceId={id} />
    )
}

export default SharedBoardByIdPage
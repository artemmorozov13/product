import { FC } from "react"
import { useParams } from "react-router-dom"

const SharedBoardByIdPage: FC = () => {
    const { userId, id } = useParams()

    return (
        <>Общая доска</>
    )
}

export default SharedBoardByIdPage
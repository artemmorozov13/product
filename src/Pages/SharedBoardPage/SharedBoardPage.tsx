import { FC } from "react";
import { useParams } from "react-router-dom";

import styles from "./SharedBoard.module.scss"

const SharedBoardPage: FC = () => {
    const { userId } = useParams()

    return (
        <>общая доска</>
    )
}

export default SharedBoardPage
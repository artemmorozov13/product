import { SharedBoard } from "Widgets/SharedBoard";

import { FC } from "react";
import { useParams } from "react-router-dom";

import s from "./SharedBoard.module.scss"

const SharedBoardPage: FC = () => {
    const { userId } = useParams()

    return (
        <>
            <h1 className={s.title}>Онлайн запись для пидарасов</h1>
            <SharedBoard userId={userId} />
        </>
    )
}

export default SharedBoardPage
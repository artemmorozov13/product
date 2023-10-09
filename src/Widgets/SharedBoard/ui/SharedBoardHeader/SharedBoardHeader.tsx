import { FC } from "react";
import { useSelector } from "react-redux";
import { AppLink, AppLinkEnumTypes } from "Shared/ui/AppLink";
import { RoutesPath } from "Shared/config/RouterConfig/AppRoutes";

import s from "./SharedBoardHeader.module.scss"
import { getSharedBoardData } from "../../model/selectors/sharedBoardSelectors";

interface SharedBoardHeaderProps {
    userId: string
}

export const SharedBoardHeader: FC<SharedBoardHeaderProps> = (props) => {
    const { userId } = props

    const boardData = useSelector(getSharedBoardData)

    return (
        <div className={s.container}>
            {boardData?.map(item => (
                <AppLink
                    href={`${RoutesPath.sharedBoardById}${userId}/service/${item.id}`}
                    variant={AppLinkEnumTypes.Fulfilled}
                >{item.date}</AppLink>
            ))}
        </div>
    )
}
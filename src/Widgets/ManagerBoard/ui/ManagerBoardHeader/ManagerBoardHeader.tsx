import { FC } from "react";
import { useSelector } from "react-redux";
import { getManagerBoardData } from "../../model/selectors/managerBoardSelectors";
import { AppLink, AppLinkEnumTypes } from "Shared/ui/AppLink";
import { RoutesPath } from "Shared/config/RouterConfig/AppRoutes";

import s from "./ManagerBoardHeader.module.scss"

export const ManagerBoardHeader: FC = () => {
    const boardData = useSelector(getManagerBoardData)

    return (
        <div className={s.container}>
            {boardData?.map(item => (
                <AppLink
                    href={`${RoutesPath.boardById}${item.id}`}
                    variant={AppLinkEnumTypes.Fulfilled}
                >{item.date}</AppLink>
            ))}
        </div>
    )
}
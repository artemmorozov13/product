import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import cn from "classnames"

import s from "./AppLink.module.scss"

export enum AppLinkEnumTypes {
    Default = "default",
    Fulfilled = "fulfilled"
}

interface AppLinkProps {
    href: string
    children: ReactNode
    variant?: AppLinkEnumTypes
    className?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children,
        href,
        variant = AppLinkEnumTypes.Default,
        className
    } = props

    const mods: Record<string, boolean> = {
        [s.link__fulfilled]: variant === AppLinkEnumTypes.Fulfilled,
        [s.link__default]: variant === AppLinkEnumTypes.Default
    }

    return (
        <Link
            to={href}
            className={cn(s.link, className, mods)}
        >{children}</Link>
    )
}
import { ButtonHTMLAttributes, memo, ReactNode } from 'react'
import cn from 'classnames'

import s from './Button.module.scss'

export enum ButtonTypeEnum {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonTypeEnum
  disabled?: boolean
  children: ReactNode
}

const Button = memo((props: IButton) => {
  const { children, className, disabled, variant = ButtonTypeEnum.Primary, ...otherProps } = props

  const mods: Record<string, boolean> = {
    [s.disabled]: disabled,
    [s.primary]: variant === ButtonTypeEnum.Primary,
    [s.secondary]: variant === ButtonTypeEnum.Secondary
  }

  return (
      <button
          disabled={disabled}
          className={cn(s.button, mods, className)}
          {...otherProps}
    >{children}</button>
  )
})

export default Button

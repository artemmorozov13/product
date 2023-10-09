import { memo } from 'react'
import cn from 'classnames'

import s from './Text.module.scss'

interface IText {
  children: string
  className?: string
  variant?: 'title' | 'text'
  type?: 'error' | 'success'
  uppercase?: boolean
}

export const Text = memo((props: IText) => {
  const { children, variant = 'text', uppercase = false, className, type } = props

  const mods = {
    [s.uppercase]: uppercase,
    [s.error]: type === 'error',
    [s.success]: type === 'success'
  }

  if (variant === 'title') {
    return (
        <h3 className={cn(s.title, mods, className)}>{children}</h3>
    )
  }

  if (variant === 'text') {
    return (
        <p className={cn(s.text, mods, className)}>{children}</p>
    )
  }
})

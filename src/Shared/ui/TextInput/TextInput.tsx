import { ChangeEvent, HTMLAttributes, memo } from 'react'
import cn from 'classnames'

import s from './TextInput.module.scss'

interface ITextInput extends Omit<HTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'> {
  value: string
  onChange: (value: string, e?: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: 'text' | 'password' | 'email' | 'date' | 'time'
}

export const TextInput = memo((props: ITextInput) => {
  const {
    value,
    onChange,
    placeholder,
    type = 'text',
    className,
    ...otherProps
  } = props

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value, e)
  }

  return (
      <input
          type={type}
          className={cn(s.input, className)}
          value={value}
          onChange={changeEventHandler}
          placeholder={placeholder}
          {...otherProps}
    />
  )
})

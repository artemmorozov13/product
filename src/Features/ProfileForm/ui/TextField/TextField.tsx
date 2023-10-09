import { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { TextInput } from 'Shared'

import s from './TextField.module.scss'

interface ITextField {
  name: string
  placeholder: string
  label?: string
  className?: string
  disabled?: boolean
};

export const TextField: FC<ITextField> = (props) => {
  const { name, placeholder, label, className, disabled = false } = props

  const { control } = useFormContext()
  const { t } = useTranslation('profileForm')

  return (
      <Controller
          name={name}
          control={control}
          render={({ field }) => disabled
            ? (
                <div className={s.readOnly}>
                    {label && <span className={s.label}>{label}</span>}
                    <span className={s.value}>{field.value || t(placeholder)}</span>
                </div>
              )
            : (
                <div className={s.readOnly}>
                    {label && <span className={s.label}>{label}</span>}
                    <TextInput
                        onChange={field.onChange}
                        value={field.value}
                        placeholder={placeholder}
                        className={className}
                  />
                </div>
              )}
        />
  )
}

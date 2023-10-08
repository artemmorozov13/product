import { FC } from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt'

import s from './Avatar.module.scss'

interface IAvatar {
  username?: string
  src?: string
};

export const Avatar: FC<IAvatar> = (props) => {
  const { username, src } = props

  return (
      <div className={s.avatar}>
          {src
            ? (
                <img
                    width={100}
                    height={100}
                    className={s.avatar__image}
                    src={src}
            />
              )
            : username
              ? (
                  <span className={s.avatar__userSymbol}>{username[0]}</span>
                )
              : (
                  <CameraAltIcon />
                )}
      </div>
  )
}

import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

import { AuthorizationModal, RegistrationModal } from 'Features'
import { Button, Container, ToggleLanguegeButton, ToggleThemeButton, useAppDispatch, useTypedTranslation } from 'Shared'

import { UserActions } from 'Entities/User'
import { useAuth } from 'Shared/lib/hooks/useAuth'
import { RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'

import s from './Header.module.scss'

export const Header: FC = () => {
  const { t } = useTypedTranslation()
  const [isOpenLoginModal, setOpenLoginModal] = useState(false)
  const [isOpenSignUpModal, setOpenSignUpModal] = useState(false)
  const dispatch = useAppDispatch()

  const isAuth = useAuth()

  if (isAuth) {
    return (
        <header className={s.header}>
            <MenuIcon className={s.menuIcon} />
            <Container className={s.container}>
                <div className={s.links}>
                    <Link className={s.link} to={RoutesPath.main}>
                        Dashboard
                    </Link>
                </div>
                <div className={s.controls}>
                    <Button
                        onClick={() => dispatch(UserActions.logoutUser())}
                    >{t('widget_header_logout_button')}</Button>
                    <ToggleLanguegeButton>{t('widget_header_languege_switcher')}</ToggleLanguegeButton>
                    <ToggleThemeButton className={s.button}>{t('widget_header_theme_switcher')}</ToggleThemeButton>
                </div>
            </Container>
        </header>
    )
  }

  return (
      <>
          <header className={s.header}>
              <Container className={s.container}>
                  <div className={s.links}>
                      <Link className={s.link} to={RoutesPath.main}>
                          Dashboard
                      </Link>
                      <span className={s.link} onClick={() => setOpenLoginModal(true)}>{t('widget_header_login_modal')}</span>
                      <span className={s.link} onClick={() => setOpenSignUpModal(true)}>{t('widget_header_signup_modal')}</span>
                  </div>
                  <div className={s.controls}>
                      <ToggleLanguegeButton>{t('widget_header_languege_switcher')}</ToggleLanguegeButton>
                      <ToggleThemeButton className={s.button}>{t('widget_header_theme_switcher')}</ToggleThemeButton>
                  </div>
              </Container>
          </header>
          <AuthorizationModal
              open={isOpenLoginModal}
              onClose={() => setOpenLoginModal(false)}
            />
          <RegistrationModal
              open={isOpenSignUpModal}
              onClose={() => setOpenSignUpModal(false)}
        />
      </>
  )
}

import { FC, memo, useEffect, useMemo } from 'react'
import { Avatar } from 'Shared/ui/Avatar'

import { FormProvider, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Button, useAppDispatch } from 'Shared'
import { useTranslation } from 'react-i18next'
import { TextField } from '../TextField/TextField'
import { DynamicModuleLoader } from 'Shared/lib/components/DynamicModuleLoader'
import { ReducersList } from 'Shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfileFormActions, ProfileFormReducer } from '../../model/slice/ProfileFormSlice'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { patchProfileData } from '../../model/services/patchProfileData/patchProfileData'
import { ProfileType } from '../../model/types/ProfileStateSchema'

import s from './ProfileForm.module.scss'
import { getUserId } from 'Entities/User'
import { getProfileAvatar, getProfileData, getProfileIsEdit } from '../../model/selectors/profileSelectors'

const initialReducers: ReducersList = {
  profileFormSchema: ProfileFormReducer
}

const ProfileForm: FC = () => {
  const { t } = useTranslation('profileForm')

  const dispatch = useAppDispatch()
  const isReadOnly = !useSelector(getProfileIsEdit)
  const profileData = useSelector(getProfileData)
  const profileAvatar = useSelector(getProfileAvatar)
  const userId = useSelector(getUserId)

  const methods = useForm({
    mode: 'onChange',
    defaultValues: useMemo(() => profileData, [profileData])
  })
  const { handleSubmit, reset } = methods

  useEffect(() => {
    dispatch(fetchProfileData(userId))
  }, [dispatch])

  useEffect(() => {
    reset(profileData)
  }, [profileData, reset])

  const handleOnEdit = () => {
    dispatch(ProfileFormActions.setEditableMode())
  }

  const handleOnSave = (data: ProfileType) => {
    dispatch(patchProfileData({ profileId: profileData.id, data }))
  }

  return (
      <DynamicModuleLoader reducers={initialReducers}>
          <div className={s.form}>
              <FormProvider {...methods}>
                  <Avatar src={profileAvatar} />
                  <div className={s.wrapper}>
                      <div className={s.fields}>
                          <TextField
                              name='username'
                              placeholder={t('fields.usernamePlaceholder')}
                              className={s.field}
                              disabled={isReadOnly}
                              label={t('fields.usernameLabel')}
                        />
                          <TextField
                              name='email'
                              placeholder={t('fields.emailPlaceholder')}
                              className={s.field}
                              disabled={isReadOnly}
                              label={t('fields.emailLabel')}
                        />
                          <TextField
                              name='firstName'
                              placeholder={t('fields.firstNamePlaceholder')}
                              className={s.field}
                              disabled={isReadOnly}
                              label={t('fields.firstNameLabel')}
                            />
                          <TextField
                              name='lastName'
                              placeholder={t('fields.lastNamePlaceholder')}
                              className={s.field}
                              disabled={isReadOnly}
                              label={t('fields.lastNameLabel')}
                            />
                          <TextField
                              name='avatar'
                              placeholder={t('fields.avatarPlaceholder')}
                              className={s.field}
                              disabled={isReadOnly}
                              label={t('fields.avatarLabel')}
                            />
                      </div>
                      <div className={s.actions}>
                          {isReadOnly
                            ? (
                                <Button
                                    onClick={handleOnEdit}
                                >{t('buttonEdit')}</Button>
                              )
                            : (
                                <Button
                                    onClick={handleSubmit(handleOnSave)}
                                >{t('buttonSave')}</Button>
                              )}
                      </div>
                  </div>
              </FormProvider>
          </div>
      </DynamicModuleLoader>
  )
}

export default memo(ProfileForm)

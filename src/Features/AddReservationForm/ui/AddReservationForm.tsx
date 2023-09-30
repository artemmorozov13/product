import { DynamicModuleLoader, ReducersList } from 'Shared/lib/components/DynamicModuleLoader'
import { FC, useEffect } from 'react'
import { addReservationActions, addReservationReducer } from '../model/slice/AddReservationSlice'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { Button, Container, MenuItem, Select, TextField } from '@mui/material'

import s from './AddReservationForm.module.scss'
import { useSelector } from 'react-redux'
import { getTimeReserve } from '../model/selectors/getTimeReserve'
import { fetchTimeIntervals } from '../model/services/fetchTimeIntervals'
import { getUserId } from 'Entities/User'
import { useAppDispatch } from 'Shared'

interface AddReservationFormProps {

}

const reducers: ReducersList = {
  addReservationSchema: addReservationReducer
}

const AddReservationForm: FC<AddReservationFormProps> = (props) => {
  const { } = props

  const dispatch = useAppDispatch()
  const timeReservation = useSelector(getTimeReserve.selectAll)
  const userId = useSelector(getUserId)

  const methods = useForm()
  const { control } = methods

  const handleAddTimeInterval = () => {

  }

  useEffect(() => {
    dispatch(fetchTimeIntervals(userId))
  }, [])

  return (
      <DynamicModuleLoader reducers={reducers}>
          <Container className={s.container}>
              <FormProvider {...methods}>
                  <h1 className={s.title}>Форма добавления доступных записей</h1>
                  <div className={s.fields}>
                      <Controller
                          name="type"
                          control={control}
                          render={({ field: { value, onChange } }) => (
                              <Select
                                  label="Диапозон события"
                                  value={value}
                                  onChange={onChange}
                                  fullWidth
                                >
                                  <MenuItem value="hourDiaposon">По часовой</MenuItem>
                                  <MenuItem value="dayDiaposon">Несколько дней</MenuItem>
                              </Select>
                          )}
                        />
                      <Controller
                          name="date"
                          control={control}
                          render={({ field: { value, onChange } }) => (
                              <TextField
                                  type="date"
                                  value={value}
                                  onChange={onChange}
                                  fullWidth
                                />
                          )}
                        />

                      <div className={s.addTimeRange}>
                          <h3>Добавить временные интервалы</h3>
                          <Controller
                              name="timeIntervalStart"
                              control={control}
                              render={({ field: { value, onChange } }) => (
                                  <TextField
                                      type="time"
                                      value={value}
                                      onChange={onChange}
                                      fullWidth
                                    />
                              )}
                            />
                          <Controller
                              name="timeIntervalEnd"
                              control={control}
                              render={({ field: { value, onChange } }) => (
                                  <TextField
                                      type="time"
                                      value={value}
                                      onChange={onChange}
                                      fullWidth
                                    />
                              )}
                            />
                          <Button
                              variant="contained"
                              onClick={handleAddTimeInterval}
                            >Добавить интервал</Button>
                      </div>

                      <Button
                          variant="contained"
                          onClick={handleAddTimeInterval}
                        >Добавить еще один день</Button>
                      <Button
                          variant="contained"
                          onClick={handleAddTimeInterval}
                        >Сохранить</Button>
                  </div>
              </FormProvider>
          </Container>
      </DynamicModuleLoader>
  )
}

export default AddReservationForm

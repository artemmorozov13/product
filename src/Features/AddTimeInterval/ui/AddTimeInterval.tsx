import { FC } from 'react'
import s from './AddTimeInterval.module.scss'
import { Button, TextInput, useAppDispatch } from 'Shared'
import { TimeIntervalsFormSchema } from '../types/timeIntervalsSchema'
import { addTimeIntervalsActions, addTimeIntervalsReducer } from '../model/slice/addTimeIntervalSlice'
import { DynamicModuleLoader, ReducersList } from 'Shared/lib/components/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { getUserId } from 'Entities/User'
import { ButtonTypeEnum } from 'Shared/ui/Button'
import { getTimeIntervals, getTimeIntervalsDate } from '../model/selectors/getTimeReserve'
import { PostTimeIntervalsOptions, postTimeIntervals } from '../model/services/postTimeIntervals'
import { Controller, useForm } from 'react-hook-form'
import { Text } from 'Shared/ui/Text'

const reducers: ReducersList = {
  timeIntervalsSchema: addTimeIntervalsReducer
}

const AddTimeInterval: FC = () => {
  const dispatch = useAppDispatch()
  const userId = useSelector(getUserId)
  const intervalsDate = useSelector(getTimeIntervalsDate)
  const timeIntervals = useSelector(getTimeIntervals.selectAll)

  const { control, handleSubmit, trigger, formState: { errors } } = useForm()

  const handleAddTimeInterval = async () => {
    const isValid = await trigger()

    if (isValid) {
      dispatch(addTimeIntervalsActions.setReservationTime({
        id: new Date().getTime().toString(),
        start: '',
        end: ''
      }))
    }
  }

  const handleSave = (data: TimeIntervalsFormSchema) => {
    const payload: PostTimeIntervalsOptions = {
      userId,
      data
    }
    dispatch(postTimeIntervals(payload))
  }

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={s.fields}>
              <div className={s.dateContainer}>
                  <h1 className={s.title}>Форма добавления доступных записей на дату</h1>
                  <Controller
                      name="date"
                      control={control}
                      defaultValue={intervalsDate}
                      rules={{ required: { value: true, message: 'Поле дата обязательно для заполнения' } }}
                      render={({ field: { value, onChange } }) => (
                          <TextInput
                              type="date"
                              value={value}
                              onChange={onChange}
                              className={s.dateInput}
                />
                      )}
            />
                  {errors.date && (
                  <Text type="error">{errors.date.message.toString()}</Text>
                  )}
              </div>
              <div className={s.container}>
                  <h3>Добавить временные интервалы</h3>
                  {timeIntervals.map(({ id, start, end }, index) => (
                      <div key={id} className={s.card}>
                          <span>Достуаная запись № {index + 1}</span>
                          <Controller
                              name={`intervals[${index}].start`}
                              control={control}
                              defaultValue={start}
                              rules={{ required: { value: true, message: 'Поле обязательно для заполнения' } }}
                              render={({ field: { value, onChange } }) => (
                                  <TextInput
                                      type='time'
                                      value={value}
                                      onChange={onChange}
                                      data-id={id}
                    />
                              )}
                />
                          {(errors?.intervals as any)?.at(index)?.start && (
                          <Text type="error">{(errors?.intervals as any)?.at(index).start.message}</Text>
                          )}
                          <Controller
                              name={`intervals[${index}].end`}
                              control={control}
                              defaultValue={end}
                              rules={{ required: { value: true, message: 'Поле обязательно для заполнения' } }}
                              render={({ field: { value, onChange } }) => (
                                  <TextInput
                                      type='time'
                                      value={value}
                                      onChange={onChange}
                                      data-id={id}
                    />
                              )}
                />
                          {(errors?.intervals as any)?.at(index)?.end && (
                          <Text type="error">{(errors?.intervals as any)?.at(index).end.message}</Text>
                          )}
                      </div>
                  ))}
                  <Button
                      variant={ButtonTypeEnum.Secondary}
                      onClick={handleAddTimeInterval}
            >Добавить интервал</Button>
                  <Button
                      className={s.saveButton}
                      variant={ButtonTypeEnum.Primary}
                      onClick={handleSubmit(handleSave)}
            >Сохранить</Button>
              </div>
          </div>
      </DynamicModuleLoader>
  )
}

export default AddTimeInterval

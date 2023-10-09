import { FC, useEffect } from "react";
import { Controller, Form, useForm } from "react-hook-form";
import { TimeIntervalsType } from "Features/AddTimeInterval";
import { Button, TextInput, useAppDispatch } from "Shared";
import { EditCardFormType } from "../../types/editCardTypes";
import s from "./EditManagerCardForm.module.scss"
import { ButtonTypeEnum } from "Shared/ui/Button";
import { Text } from "Shared/ui/Text";
import { UpdateIntervalOptions, updateInterval } from "../../model/services/updateIntervalData";
import { useSelector } from "react-redux";
import { getIntervalsById, getManagerBoardData } from "../../model/selectors/managerBoardSelectors";
import { getUserId } from "Entities/User";

interface EditManagerCardFormProps {
    serviceId: string
    interval: TimeIntervalsType
    onClose: () => void
}

export const EditManagerCardForm: FC<EditManagerCardFormProps> = (props) => {
    const { serviceId, interval, onClose } = props

    const dispatch = useAppDispatch()
    const userId = useSelector(getUserId)
    const boardData = useSelector(getManagerBoardData)
    const intervals = getIntervalsById(boardData, serviceId)
    const date = boardData?.find(item => item.id === Number(serviceId))?.date

    const methods = useForm<EditCardFormType>()
    const { control, handleSubmit, reset } = methods

    const handleCancelEdits = () => {
        onClose()
    }

    const onSubmit = (data: EditCardFormType) => {
        const options: UpdateIntervalOptions = {
            userId,
            serviceId: serviceId,
            body: {
                id: Number(serviceId),
                userId,
                date,
                intervals: intervals.map(item => (
                    item.id === interval.id ? ({
                        id: interval.id,
                        start: data.start,
                        end: data.end,
                        isAvailable: true
                    }) : item
                ))
            },
            onClose
        }
        dispatch(updateInterval(options))
    }

    useEffect(() => {
        if (interval) {
            reset({
                start: interval.start,
                end: interval.end
            })
        }
    }, [interval])

    return (
        <Form {...methods}>
            <div className={s.wrapper}>
                <Text>Форма редактирования досьупной записи</Text>
                <Controller
                    name="start"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <TextInput
                            type="time"
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                <Controller
                    name="end"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <TextInput
                            type="time"
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                <div className={s.actions}>
                    <Button onClick={handleSubmit(onSubmit)}>Сохранить</Button>
                    <Button onClick={handleCancelEdits} variant={ButtonTypeEnum.Secondary}>Отмена</Button>
                </div>
            </div>
        </Form>
    )
}
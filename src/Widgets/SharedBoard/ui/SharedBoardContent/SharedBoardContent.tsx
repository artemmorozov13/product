import { FC, MouseEvent, useRef, useState } from "react"
import s from "./SharedBoardContent.module.scss"
import { Text } from "Shared/ui/Text"
import { TimeIntervalsType } from "Features/AddTimeInterval/types/timeIntervalsSchema"
import { Button, Modal, TextInput } from "Shared"
import { Controller, Form, useForm } from "react-hook-form"
import { ReserveTimeIntervalOptions, reserveTimeInterval } from "../../model/services/reserveTimeInterval"
import { useSelector } from "react-redux"
import { getUserId } from "Entities/User"
import { getIntervalsById, getSharedBoardData } from "../../model/selectors/sharedBoardSelectors"

interface SharedBoardContentProps {
    userId: string
    intervals: TimeIntervalsType[]
    serviceId: string
}

export const SharedBoardContent: FC<SharedBoardContentProps> = (props) => {
    const { intervals, serviceId, userId } = props

    const boardData = useSelector(getSharedBoardData)
    const date = boardData?.find(item => item.id === Number(serviceId))?.date
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const selectedInterval = useRef<TimeIntervalsType | null>(null)
    const selectedIntervalId = useRef<string | null>(null)

    const methods = useForm()
    const { control, handleSubmit } = methods

    const handleReserve = (e: MouseEvent<HTMLButtonElement>) => {
        const intervalId = e.currentTarget.dataset.id
        const interval = intervals.find(item => item.id === intervalId)
        selectedInterval.current = interval
        selectedIntervalId.current = intervalId
        setIsOpen(true)
    }

    const onSubmit = (data: any) => {
        const options: ReserveTimeIntervalOptions = {
            serviceId,
            data: {
                id: serviceId,
                userId,
                date,
                intervals: intervals.map(item => (
                    item.id === selectedInterval.current.id ? ({
                        id: selectedInterval.current.id,
                        start: item.start,
                        end: item.end,
                        isAvailable: true,
                        reserverPhone: data.phone
                    }) : item
                ))
            }
        }
        reserveTimeInterval(options)
        setIsOpen(false)
    }

    return (
        <>
            {intervals?.length ? (
                <div className={s.cardWrapper}>
                    {intervals.map((item, index) => (
                        <div key={item.id} className={s.card}>
                            <div className={s.card__header}>
                                <Text>{`Карточка ${index + 1}`}</Text>
                            </div>
                            <div className={s.card__info}>
                                <Text>{`Время начала ${item.start}`}</Text>
                                <Text>{`Время окончания ${item.end}`}</Text>
                                <Button
                                    onClick={handleReserve}
                                    data-id={item.id}
                                >Записаться</Button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={s.wrapper}>
                    <Text>Выбирете дату для просмотра записей</Text>
                </div>
            )}
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <Form {...methods} className={s.form}>
                    <Text variant="title" className={s.form__title}>Записаться</Text>
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                value={value}
                                onChange={onChange}
                                placeholder="Номер телефона"
                            />
                        )}
                    />
                    <Button onClick={handleSubmit(onSubmit)}>Записаться</Button>
                </Form>
            </Modal>
        </>
    )
}
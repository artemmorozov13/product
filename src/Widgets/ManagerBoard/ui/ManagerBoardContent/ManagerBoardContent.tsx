import { FC, MouseEvent, useRef, useState } from "react"
import s from "./ManagerBoardContent.module.scss"
import { Text } from "Shared/ui/Text"
import { TimeIntervalsType } from "Features/AddTimeInterval/types/timeIntervalsSchema"
import EditIcon from '@mui/icons-material/Edit';
import { AppLink } from "Shared/ui/AppLink";
import { Modal } from "Shared";
import { EditManagerCardForm } from "../EditManagerCardForm/EditManagerCardForm";

interface ManagerBoardContentProps {
    serviceId: string
    intervals: TimeIntervalsType[]
}

export const ManagerBoardContent: FC<ManagerBoardContentProps> = (props) => {
    const { serviceId, intervals } = props

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const selectedInterval = useRef<TimeIntervalsType | null>(null)
    const selectedIntervalId = useRef<string | null>(null)

    const handleClickInterval = (e: MouseEvent<SVGSVGElement>) => {
        const intervalId = e.currentTarget.dataset.id
        const interval = intervals.find(item => item.id === intervalId)
        selectedInterval.current = interval
        selectedIntervalId.current = intervalId
        setIsOpen(true)
    }

    const handleCloseModal = () => {
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
                                <EditIcon
                                    className={s.card__editIcon}
                                    onClick={handleClickInterval}
                                    data-id={item.id}
                                />
                            </div>
                            <div className={s.card__info}>
                                <Text>{`Время начала ${item.start}`}</Text>
                                <Text>{`Время окончания ${item.end}`}</Text>
                                <Text type="success">Запись открыта</Text>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={s.wrapper}>
                    <Text>Выбирете дату для просмотра записей</Text>
                </div>
            )}
            <Modal open={isOpen} onClose={handleCloseModal}>
                <EditManagerCardForm
                    serviceId={serviceId}
                    interval={selectedInterval.current}
                    onClose={handleCloseModal}
                />
            </Modal>
        </>
    )
}
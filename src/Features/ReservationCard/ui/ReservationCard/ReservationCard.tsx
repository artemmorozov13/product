import { Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import { localeTimeString } from "Shared/lib/helpers";
import { FC, useState } from "react";
import cn from "classnames"
import { SingleCardType } from "../../types/cardTypes";
import s from "./ReservationCard.module.scss"
import { useAuth } from "Shared/lib/hooks/useAuth";
import { DeleteReservationModal } from "../DeleteReservationModal/DeleteReservationModal";
import { EditReservationModal } from "../EditReservationModal/EditReservationModal";
import { MakeReservationModal } from "../MakeReservationModal/MakeReservationModal";

interface ReservationCardProps {
    card: SingleCardType
    setData?: (state: SingleCardType[]) => void
}

export const ReservationCard: FC<ReservationCardProps> = (props) => {
    const { card, setData } = props
    const { startTime, endTime } = card

    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
    const [isMakeReservationModalOpen, setIsMakeReservationModalOpen] = useState<boolean>(false)

    const isAuth = useAuth()

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true)
    }

    const openEditModal = () => {
        setIsEditModalOpen(true)
    }

    const openReserveModal = () => {
        setIsMakeReservationModalOpen(true)
    }

    return (
        <Card variant="outlined" className={s.card}>
            <DeleteReservationModal
                timeId={card.id}
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
            />
            <EditReservationModal
                card={card}
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
            />
            <MakeReservationModal
                card={card}
                isOpen={isMakeReservationModalOpen}
                onClose={() => setIsMakeReservationModalOpen(false)}
                setData={setData}
            />
            <CardContent>
                <Typography variant="h6" className={s.card__title}>
                    Карточка записи
                </Typography>
                <Divider />
                <div className={s.card__wrapper}>
                    <div className={s.card__reservation}>
                        <Typography variant="body1">
                            Начало:
                        </Typography>
                        <Typography variant="body2">{localeTimeString(startTime)}</Typography>
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <div className={s.card__reservation}>
                        <Typography variant="body1">
                            Конец:
                        </Typography>
                        <Typography variant="body2">{localeTimeString(endTime)}</Typography>
                    </div>
                </div>
            </CardContent>
            <Divider />
            <CardActions className={cn(s.card__actions, { [s.card__actions_single]: !isAuth })}>
                {isAuth ? (
                    <>
                        <Button
                            size="small"
                            onClick={openDeleteModal}
                        >Удалить</Button>
                        <Button
                            size="small"
                            variant="contained"
                            onClick={openEditModal}
                        >Изменить</Button>
                    </>
                ) : (
                    <Button
                        size="small"
                        variant="contained"
                        onClick={openReserveModal}
                    >Записаться</Button>
                )}
            </CardActions>
        </Card>
    )
}
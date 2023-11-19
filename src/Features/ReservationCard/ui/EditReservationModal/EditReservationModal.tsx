import { Button, Divider, Modal, Paper, TextField, Typography } from "@mui/material";
import { FC } from "react";
import s from "./EditReservationModal.module.scss"
import { SingleCardType } from "../../types/cardTypes";
import { localeTimeString } from "Shared/lib/helpers";
import { TimePicker } from "@mui/x-date-pickers";

interface EditReservationModalProps {
    card: SingleCardType 
    isOpen: boolean
    onClose: () => void
}

export const EditReservationModal: FC<EditReservationModalProps> = (props) => {
    const { card, isOpen, onClose } = props

    const handleSaveTime = () => {
        onClose()
    }

    return (
        <Modal open={isOpen} onClose={onClose} className={s.modal}>
            <Paper className={s.modal__paper}>
                <Divider />
                <div className={s.modal__body}>
                    <TimePicker
                        defaultValue={new Date(card.startTime)}
                        ampmInClock={false}
                        ampm={false}
                    />
                    <TimePicker
                        defaultValue={new Date(card.endTime)}
                        ampmInClock={false}
                        ampm={false}
                    />
                </div>
                <Divider />
                <div className={s.modal__actions}>
                    <Button onClick={onClose}>Отмена</Button>
                    <Button variant="contained" onClick={handleSaveTime}>Сохранить</Button>
                </div>
            </Paper>
        </Modal>
    )
}
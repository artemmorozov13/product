import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import { FC } from "react";
import s from "./DeleteReservationModal.module.scss"

interface DeleteReservationModalProps {
    timeId: number
    isOpen: boolean
    onClose: () => void
}

export const DeleteReservationModal: FC<DeleteReservationModalProps> = (props) => {
    const { isOpen, onClose } = props

    const handleRemoveTime = () => {
        onClose()
    }

    return (
        <Modal open={isOpen} onClose={onClose} className={s.modal}>
            <Paper className={s.modal__paper}>
                <Typography variant="body1" className={s.modal__title}>Вы действительно хотите удалить запись?</Typography>
                <div className={s.modal__actions}>
                    <Button onClick={onClose}>Отмена</Button>
                    <Button variant="contained" onClick={handleRemoveTime}>Удалить</Button>
                </div>
            </Paper>
        </Modal>
    )
}
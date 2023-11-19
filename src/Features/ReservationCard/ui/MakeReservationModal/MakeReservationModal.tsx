import { Button, Modal, Paper, TextField, Typography } from "@mui/material";
import { FC } from "react";
import s from "./MakeReservationModal.module.scss"
import { SingleCardType } from "../../types/cardTypes";
import { API } from "Shared/api/api";
import { localeTimeString } from "Shared/lib/helpers";
import { Controller, Form, useForm } from "react-hook-form";

interface MakeReservationModalProps {
    card: SingleCardType
    isOpen: boolean
    onClose: () => void
    setData: (state: SingleCardType[]) => void
}

export const MakeReservationModal: FC<MakeReservationModalProps> = (props) => {
    const { isOpen, card, onClose } = props

    const { control, handleSubmit } = useForm({ mode: "all" })

    const handleMakeReservation = async (data: any) => {
        await API.put(
            `http://localhost:1488/times/${card.id}`,
            {
                isReserved: true,
                ...data
            }
        )
        onClose()
    }

    return (
        <Modal open={isOpen} onClose={onClose} className={s.modal}>
            <Paper className={s.modal__paper}>
                <Typography variant="body1" className={s.modal__title}>
                    Записаться на время с {localeTimeString(card.startTime)} до {localeTimeString(card.endTime)}
                </Typography>
                <div>
                    <Form
                        control={control}
                        className={s.modal__form}
                    >
                        <Controller
                            name="firstName"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <TextField
                                    value={value}
                                    onChange={onChange}
                                    label="Ваше имя"
                                />
                            )}
                        />
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <TextField
                                    type="phone"
                                    value={value}
                                    onChange={onChange}
                                    label="Номер телефона (для связи)"
                                />
                            )}
                        />
                        <Button
                            variant="contained"
                            onClick={handleSubmit(handleMakeReservation)}
                        >Да записаться на это время</Button>
                    </Form>
                </div>
            </Paper>
        </Modal>
    )
}
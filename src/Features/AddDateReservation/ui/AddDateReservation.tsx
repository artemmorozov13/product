import { FC, useState } from 'react';
import { Badge, Box, Button, Chip, Paper, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from "./AddDateReservation.module.scss"
import { PostSelectedDataOptions, postSelectedData } from '../api/postSelectedData';
import { useSelector } from 'react-redux';
import { getUserId } from 'Entities/User';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from 'Shared/config/RouterConfig/AppRoutes';

interface AddDateReservationProps {
  className?: string
}

interface SelectedTimeType {
  id: string
  startTime: Date
  endTime: Date
}

export interface SelectedDate {
  id: string;
  date: Date;
  times: SelectedTimeType[]
}

export const AddDateReservation: FC<AddDateReservationProps> = (props) => {
  const { className } = props

  const navigate = useNavigate()

  const [selectedDates, setSelectedDates] = useState<SelectedDate[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedStartTime, setSelectedStartTime] = useState<Date | null>(null)
  const [selectedEndTime, setSelectedEndTime] = useState<Date | null>(null)

  const userId = useSelector(getUserId)

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleAddDate = () => {
    if (selectedDate) {
      const newDate: SelectedDate = {
        id: Date.now().toString(),
        date: selectedDate,
        times: []
      };
      setSelectedDates([...selectedDates, newDate]);
      setSelectedDate(null);
    }
  };

  const handleRemoveDate = (id: string) => {
    const updatedDates = selectedDates.filter(date => date.id !== id);
    setSelectedDates(updatedDates);
  };

  const handleStartTimeChange = (time: Date | null) => {
    setSelectedStartTime(time)
  }

  const handleEndTimeChange = (time: Date | null) => {
    setSelectedEndTime(time)
  }

  const handleAddTime = () => {
    if (selectedStartTime) {
      let currentTimeId = Date.now()

      const updatedDates = selectedDates.map((date): SelectedDate => {
        const newTime: SelectedTimeType = {
          id: currentTimeId.toString(),
          startTime: selectedStartTime,
          endTime: selectedEndTime
        }
        currentTimeId++
        return {
          id: date.id,
          date: date.date,
          times: [...date.times, newTime]
        }
      })
      setSelectedDates(updatedDates)
      setSelectedStartTime(null)
      setSelectedEndTime(null)
    }
  }

  const handleRemoveTime = (dateId: string, timeId: string) => {
    const updatedDates = selectedDates.map((date): SelectedDate => {
      if (date.id === dateId) {
        return {
          id: date.id,
          date: date.date,
          times: date.times.filter(time => time.id !== timeId)
        }
      }
      return date
    })
    setSelectedDates(updatedDates)
  }

  const handleOnSave = () => {
    const options: PostSelectedDataOptions = {
      userId,
      data: selectedDates
    }

    postSelectedData(options)
      .then(() => navigate(RoutesPath.reservations))
  }

  return (
    <div className={className}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Paper>
          <Typography variant='h3' className={styles.title}>Добавление даты записи</Typography>
          <div className={styles.datePicker}>
            <DatePicker
              label="Выберите дату"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <Button variant="contained" onClick={handleAddDate}>Добавить</Button>
          </div>
        </Paper>
        <div className={styles.container}>
          {selectedDates.map(date => (
            <div key={date.id} className={styles.card}>
              <Paper className={styles.headerDate}>
                <p>{date.date.toLocaleDateString()}</p>
                <IconButton onClick={() => handleRemoveDate(date.id)}>
                  <DeleteIcon />
                </IconButton>
              </Paper>
              <Paper className={styles.chips}>
                {date.times.length > 0 ? (
                  date.times.map(time => (
                    <Chip
                      key={time.id}
                      color="info"
                      className={styles.chip}
                      onDelete={() => handleRemoveTime(date.id, time.id)}
                      label={
                        time?.startTime && time?.endTime ? (
                          `${time.startTime.toLocaleTimeString()} - ${time.endTime.toLocaleTimeString()}`
                        ): null
                      }
                    />
                  ))
                ) : (
                  <Typography className={styles.chipMessage}>Здесь будет отображаться врмя записи</Typography>
                )}
              </Paper>
            </div>
          ))}
        </div>
        {selectedDates.length > 0 && (
          <Paper>
            <Typography variant='h4' className={styles.title}>Добавление доступного времени записи</Typography>
            <div className={styles.timePickerWrapper}>
              <div className={styles.timePicker}>
                <TimePicker
                  label="Начало"
                  value={selectedStartTime}
                  onChange={handleStartTimeChange}
                  ampmInClock={false}
                  ampm={false}
                />
                <TimePicker
                  label="Конец"
                  value={selectedEndTime}
                  onChange={handleEndTimeChange}
                  ampmInClock={false}
                  ampm={false}
                />
                <Button variant="contained" onClick={handleAddTime}>Добавить</Button>
              </div>
              <div>
                <Button
                  variant='contained'
                  className={styles.saveButton}
                  onClick={handleOnSave}
                >Сохранить</Button>
              </div>
            </div>
          </Paper>
        )}
      </LocalizationProvider>
    </div>
  );
};

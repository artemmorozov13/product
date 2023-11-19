import { Button, Paper, Typography } from '@mui/material'
import { getUserId } from 'Entities/User'
import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { API } from 'Shared/api/api'
import { RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'
import { Layout } from 'Widgets'
import s from "./SharedBoard.module.scss"

const SharedBoardPage: FC = () => {
    const { userId } = useParams()

  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await API.get(`http://localhost:1488/dates/user/${userId}`)

        if (!response.data) {
          throw new Error("Произошла ошибка при запросе дат")
        }

        setData(response.data)
      } catch (error) {
        setError(error.message)
      }
    })()
  }, [])

  return (
    <Paper className={s.paper}>
      <Typography variant='h3' className={s.title}>Доступные даты записи</Typography>
      <div className={s.wrapper}>
        {data.map(date => (
            <Link to={`${RoutesPath.sharedBoardById}${userId}/date/${date.id}`}>
              <Button variant='contained'>
                {new Date(date.date).toLocaleDateString("ru-RU")}
              </Button>
            </Link>
        ))}
      </div>
    </Paper>
  )
}

export default SharedBoardPage

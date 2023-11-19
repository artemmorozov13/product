import { Button, Paper, TextField, Typography } from '@mui/material'
import { getUserId } from 'Entities/User'
import { FC, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { API } from 'Shared/api/api'
import { RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'
import { Layout } from 'Widgets'
import s from "./BoardPage.module.scss"

const BoardPage: FC = () => {
  const userId = useSelector(getUserId)

  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const textFieldRef = useRef<HTMLInputElement>(null)

  const handleCopySharedLink = async () => {
    const link = `localhost:3000/shared/${userId}`;
    await navigator.clipboard.writeText(link)
  };

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
      <Layout>
          <Paper className={s.paper}>
            <div className={s.paper__header}>
              <Typography variant='h3' className={s.paper__title}>Доступные даты записи</Typography>
              <div className={s.paper__copy}>
                <Button
                  variant='outlined'
                  onClick={handleCopySharedLink}
                >Копировать ссылку на доску</Button>
              </div>
            </div>
            <div className={s.wrapper}>
              {data.map(date => (
                  <Link to={`${RoutesPath.boardById}${date.id}`}>
                    <Button variant='contained'>
                      {new Date(date.date).toLocaleDateString("ru-RU")}
                    </Button>
                  </Link>
              ))}
            </div>
          </Paper>
      </Layout>
  )
}

export default BoardPage

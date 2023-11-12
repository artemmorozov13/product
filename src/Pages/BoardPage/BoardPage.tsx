import { Button, Paper } from '@mui/material'
import { getUserId } from 'Entities/User'
import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { API } from 'Shared/api/api'
import { RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'
import { Layout } from 'Widgets'

const BoardPage: FC = () => {
  const userId = useSelector(getUserId)

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
      <Layout>
          <Paper sx={{ padding: 3, marginTop: 3, display: "flex", flexWrap: "wrap", gap: 3 }}>
            {data.map(date => (
                <Link to={`${RoutesPath.boardById}${date.id}`}>
                  <Button variant='contained'>
                    {new Date(date.date).toLocaleDateString("ru-RU")}
                  </Button>
                </Link>
            ))}
          </Paper>
      </Layout>
  )
}

export default BoardPage

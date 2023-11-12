import { Box, Button, Card, Paper, Typography } from "@mui/material"
import { getUserId } from "Entities/User"
import { API } from "Shared/api/api"
import { RoutesPath } from "Shared/config/RouterConfig/AppRoutes"
import { Layout } from "Widgets"
import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

const BoardByIdPage: FC = () => {
    const { id: dateId } = useParams()

    const userId = useSelector(getUserId)

    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
        try {
            const response = await API.get(`http://localhost:1488/times/date/${dateId}`)

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
                {data.map(time => (
                    <Card sx={{padding: 3}}>
                        <Typography variant="body1">Запись</Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Typography variant="body1">{new Date(time.startTime).toLocaleTimeString("ru-RU")}</Typography>
                            ===
                            <Typography variant="body1">{new Date(time.endTime).toLocaleTimeString("ru-RU")}</Typography>
                        </Box>
                    </Card>
                ))}
          </Paper>
        </Layout>
    )
}

export default BoardByIdPage
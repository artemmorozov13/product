import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Paper, Typography } from "@mui/material"
import { ReservationCard } from "Features/ReservationCard"
import { API } from "Shared/api/api"
import { localeTimeString } from "Shared/lib/helpers"
import { Layout, PageLoader } from "Widgets"
import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const BoardByIdPage: FC = () => {
    const { id: dateId } = useParams()

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

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
        } finally {
            setIsLoading(false)
        }
        })()
    }, [])

    if (isLoading) {
        <PageLoader />
    }

    return (
        <Layout>
            <Container sx={{ display: "flex", flexDirection: "column", marginTop: 3 }}>
                <Typography variant="h1" sx={{ fontSize: 24 }}>Доступные карточки для записи</Typography>
                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", marginTop: 3 }}>
                    {data.map(time => (
                        <ReservationCard key={time.id} card={time} />
                    ))}
                </Box>
            </Container>
        </Layout>
    )
}

export default BoardByIdPage
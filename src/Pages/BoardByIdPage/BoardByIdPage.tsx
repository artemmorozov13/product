import { API } from "Shared/api/api"
import { Layout } from "Widgets"
import { ManagerBoard } from "Widgets/ManagerBoard"
import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const BoardByIdPage: FC = () => {
    const { id } = useParams()

    return (
        <Layout>
            <ManagerBoard serviceId={id} />
        </Layout>
    )
}

export default BoardByIdPage
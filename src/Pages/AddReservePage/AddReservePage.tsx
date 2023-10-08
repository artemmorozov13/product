import { Layout } from 'Widgets'
import { FC } from 'react'
import { Container } from '@mui/material'
import { AddTimeInterval } from 'Features/AddTimeInterval'
import s from './AddReservePage.module.scss'

const AddReservePage: FC = () => {
  return (
      <Layout>
          <Container className={s.wrapper}>
              <AddTimeInterval />
          </Container>
      </Layout>
  )
}

export default AddReservePage

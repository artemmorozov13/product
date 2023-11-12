import { Layout } from 'Widgets'
import { FC } from 'react'
import { AddDateReservation } from 'Features/AddDateReservation'
import styles from './AddReservePage.module.scss'

const AddReservePage: FC = () => {
  return (
      <Layout>
          <AddDateReservation className={styles.dateForm} />
      </Layout>
  )
}

export default AddReservePage

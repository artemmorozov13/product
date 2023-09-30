import { Suspense, FC } from 'react'
import { Loader, Modal } from 'Shared'
import { RegistrationForm } from '../RegistrationForm'

import s from './RegistrationModal.module.scss'

interface IRegistrationModal {
  open: boolean
  onClose: () => void
}

const RegistrationModal: FC<IRegistrationModal> = (props) => {
  const { open, onClose } = props

  return (
      <Modal open={open} onClose={onClose} lazy>
          <Suspense fallback={<Loader className={s.loader}/>}>
              <RegistrationForm onClose={onClose} />
          </Suspense>
      </Modal>
  )
}

export default RegistrationModal

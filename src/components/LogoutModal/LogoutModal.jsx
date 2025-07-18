import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './LogoutModal.css'

export default function LogoutModal({ onClose, isOpen, onLogout }) {
  const handleSubmit = e => {
    e.preventDefault()

    onLogout()
    onClose()
  }

  return (
    <ModalWithForm
      title='Log out?'
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText='Log out'
    >
      <p className='modal__subtitle'>Are you sure you want to log out?</p>
    </ModalWithForm>
  )
}

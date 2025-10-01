import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './WakingUpModal.css'
import spinner from '../../assets/surfing-poodle-loading.json'
import Lottie from 'lottie-react'

function WakingUpModal({ isOpen, onClose, title, subtitle }) {
  return (
    <ModalWithForm
      activeModal='waking-up'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Close'
      className='waking-up'
    >
      <div className='modal__content'>
        <Lottie animationData={spinner} />
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </ModalWithForm>
  )
}

export default WakingUpModal

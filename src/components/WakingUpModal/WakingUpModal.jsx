import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './WakingUpModal.css'
import spinner from '../../assets/surfing-poodle-loading.json'
import Lottie from 'lottie-react'

function WakingUpModal({ isOpen, onClose }) {
  return (
    <ModalWithForm
      activeModal='waking-up'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Close'
      className='waking-up'
    >
      <div className='modal__content--spinner'>
        <Lottie animationData={spinner} />
        <p>🐾 Servers are fetching… Otto’s still paddling.</p>
        <p>Grab a towel — we’ll be ready in just a moment.</p>
      </div>
    </ModalWithForm>
  )
}

export default WakingUpModal

import { useEffect } from 'react'
import './ModalWithForm.css'

export default function ModalWithForm({
  children,
  title,
  onClose,
  onSubmit,
  isOpen,
  buttonText,
  className = ''
}) {
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <div className={`modal ${isOpen ? 'modal_opened' : ''} ${className}`}>
      <div className='modal__content'>
        <h2 className='modal__title'>{title}</h2>
        <button onClick={onClose} className='modal__close' />
        <form onSubmit={onSubmit} className='modal__form'>
          {children}
          <button type='submit' className='modal__submit'>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}

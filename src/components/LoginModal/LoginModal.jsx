import { useState } from 'react'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './LoginModal.css'

function LoginModal({ onClose, onLogin, isOpen, handleRegisterClick }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    onLogin({ email, password })
      .then(() => {
        setEmail('')
        setPassword('')
        onClose()
      })
      .catch(err => {
        console.error('Error logging in user:', err)
        alert('Could not login!')
      })
  }

  return (
    <ModalWithForm
      title='Log In'
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText='Log In'
    >
      <label htmlFor='email' className='modal__label'>
        Email*{' '}
        <input
          type='email'
          className='modal__input'
          id='login-email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor='password' className='modal__label'>
        Password*{' '}
        <input
          type='password'
          className='modal__input'
          id='login-password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <div className='modal__secondary-button'>
        <p>or</p>
        <button
          type='button'
          className='modal__login'
          onClick={handleRegisterClick}
        >
          Sign Up
        </button>
      </div>
    </ModalWithForm>
  )
}

export default LoginModal

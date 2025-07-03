import { useState } from 'react'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './RegisterModal.css'

function RegisterModal({ onClose, onRegister, isOpen, handleLoginClick }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onRegister({ name, email, password })
      .then(() => {
        setName('')
        setEmail('')
        setPassword('')
        onClose()
      })
      .catch(err => {
        console.error('Error registering user:', err)
        alert('Could not register!')
      })
  }

  return (
    <ModalWithForm
      title='Sign Up'
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText='Sign up'
    >
      <label htmlFor='name' className='modal__label'>
        Name*{' '}
        <input
          type='text'
          className='modal__input'
          id='register-name'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label htmlFor='email' className='modal__label'>
        Email*{' '}
        <input
          type='email'
          className='modal__input'
          id='register-email'
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
          id='register-password'
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
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>
    </ModalWithForm>
  )
}

export default RegisterModal

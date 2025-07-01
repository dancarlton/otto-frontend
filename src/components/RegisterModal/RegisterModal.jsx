import { useState } from 'react'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './RegisterModal.css'
import { registerUser } from '../../utils/api'

function RegisterModal({ onClose, onRegister, isOpen, handleLoginClick }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleNameChange = e => setName(e.target.value)
  const handleEmailChange = e => setEmail(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    const formData = {
      name,
      email,
      password,
    }

    registerUser(formData)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token)
          console.log('Registered successfully:', res.user)
          onRegister(res.user)

          setName('')
          setEmail('')
          setPassword('')

          onClose()
        } else {
          throw new Error('No token returned from server.')
        }
      })
      .catch(err => {
        console.error('Error registering user:', err)
        alert('Could not add user!')
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
          id='name'
          placeholder='Name'
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor='email' className='modal__label'>
        Email*{' '}
        <input
          type='email'
          className='modal__input'
          id='email'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor='password' className='modal__label'>
        Password*{' '}
        <input
          type='text'
          className='modal__input'
          id='passwrod'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
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

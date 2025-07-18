import { useNavigate } from 'react-router-dom'
import { getUser, updateUser } from '../../utils/api'
import '../Onboarding/Onboarding.css'
import { useContext } from 'react'
import CurrentUserContext from '../../contexts/CurrentUserContexts'

export default function Step6({ formData, prev }) {
  const { setUserData } = useContext(CurrentUserContext)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const token = localStorage.getItem('jwt')

    try {
      await updateUser(token, { preferences: formData })

      const updatedUser = await getUser(token)
      setUserData(updatedUser)

      console.log('Updated user:', updatedUser.name)
      console.log('With preferences:', formData)

      navigate('/')
    } catch (error) {
      console.error('Failed to submit preferences:', error.message)
      alert('Failed to submit preferences, please try again later')
      navigate('/marketing')
    }
  }

  return (
    <div className='onboarding__step'>
      <h2 className='onboarding__title'>You&rsquo;re all set!</h2>
      <p className='onboarding__subtext'>
        Otto will now track your surf preferences.
      </p>

      {/* Navigation Buttons */}
      <div className='onboarding__nav-wrapper'>
        <button
          className='onboarding__nav-button onboarding__nav-button--left'
          onClick={prev}
        >
          ←
        </button>
      </div>

      {/* Submit Button Below Arrows */}
      <div className='onboarding__submit-container'>
        <button className='onboarding__submit-button' onClick={handleSubmit}>
          Finish
        </button>
      </div>
    </div>
  )
}

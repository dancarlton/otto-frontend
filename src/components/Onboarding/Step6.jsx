import { useNavigate } from 'react-router-dom'
import { updateUser } from '../../utils/api'
import '../Onboarding/Onboarding.css'

export default function Step6({ formData, prev }) {
  const navigate = useNavigate()
  // const handleSubmit = () => {
  //   console.log('Finished onboarding:', formData)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')

    try {
      await updateUser(token, formData)
      navigate('/')
    } catch (error) {
      console.error('Failed to submit preferences:', error.message)
      alert('Failed to submit preferences, please try again later')
      navigate('/')
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
        <button className='onboarding__nav-button onboarding__nav-button--left' onClick={prev}>
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

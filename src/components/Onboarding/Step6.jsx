import '../Onboarding/Onboarding.css'

export default function Step6({ formData, prev }) {
  const handleSubmit = () => {
    console.log('Finished onboarding:', formData)
  }

  //   const handleSubmit = async () => {
  //     try {
  //       const response = await fetch('/api/onboarding', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(formData),
  //       })

  //       if (response.ok) {
  //         alert("You're all set! Welcome to Otto 🏄‍♂️")
  //         // Redirect or finish onboarding here
  //       } else {
  //         alert('Something went wrong. Try again.')
  //       }
  //     } catch (error) {
  //       console.error('Submit error:', error)
  //       alert('Error submitting data.')
  //     }
  //   }

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

import '../Onboarding/Onboarding.css'

export default function Step5({ formData, prev }) {
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
    <div className='onboarding-step'>
      <h2 className='onboarding-title'>You're all set!</h2>
      <p className='onboarding-subtext'>
        Otto will now track your surf preferences.
      </p>

      {/* Navigation Buttons */}
      <div className='nav-wrapper'>
        <button className='nav-button nav-left' onClick={prev}>
          ←
        </button>
      </div>

      {/* Submit Button Below Arrows */}
      <div className='submit-container'>
        <button className='submit-button' onClick={handleSubmit}>
          Finish
        </button>
      </div>
    </div>
  )
}

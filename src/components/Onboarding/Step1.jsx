import { useEffect, useState } from 'react'
import '../Onboarding/Onboarding.css'

export default function Step1({ formData, updateForm, next }) {
  const levels = ['Beginner', 'Intermediate', 'Advanced', 'Grom mentality']
  const [selected, setSelected] = useState(formData.shredderLevel?.[0] || '')
// shredderLevel?.[0] is whats called Optional Chaining, which means its safely grabbing the first item in the array([0]), but only if formData.shredderLevel exists. if it doesn't exist (as in no level has been selected yet), it returnes undefined instead of breaking the app

  const [canContinue, setCanContinue] = useState(false)

  const handleSelect = level => {
    const updated = selected === level ? '' : level
    setSelected(updated)
    updateForm({ shredderLevel: updated ? [updated] : [] })
  }

  useEffect(() => {
    setCanContinue(!!selected)
  }, [selected])

  return (
    <div className='onboarding__step'>
      <h1 className="onboarding__welcome">Fill out the following so Otto can scout waves just for you!</h1>
      <h2 className='onboarding__title'>What level of shredder are you?</h2>
      <div className='onboarding__checkbox-group'>
        {levels.map(level => (
          <label key={level} className='onboarding__checkbox-label'>
            <input
              type='checkbox'
              checked={formData.shredderLevel?.includes(level)}
              onChange={() => handleSelect(level)}
            />
            {level}
          </label>
        ))}
      </div>
      <div className='onboarding__nav-wrapper'>
        <button
          className='onboarding__nav-button onboarding__nav-button--right'
          onClick={next}
          disabled={!canContinue}
        >
          →
        </button>
      </div>
    </div>
  )
}

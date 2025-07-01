import { useEffect, useState } from 'react'
import '../Onboarding/Onboarding.css'

export default function Step5({ formData, updateForm, next, prev }) {
  const notifications = ['Yes', 'No', 'Maybe so']
  const [selected, setSelected] = useState(formData.notifications?.[0] || '')
  const [canContinue, setContinue] = useState(false)

  const handleSelect = value => {
    const updated = selected === value ? '' : value
    setSelected(updated)
    updateForm({ notifications: updated ? [updated] : [] })
  }

  useEffect(() => {
    setContinue(selected !== '')
  }, [selected])

  return (
    <div className='onboarding__step'>
      <h3 className='onboarding__title'>Notifications</h3>
      <p className='onboarding__subtext'>Get notified when conditions match?</p>
      <div className='onboarding__checkbox-group'>
        {notifications.map(option => (
          <label className='onboarding__checkbox-label' key={option}>
            <input
              type='checkbox'
              checked={selected === option}
              onChange={() => handleSelect(option)}
            />
            {option}
          </label>
        ))}
      </div>

      <div className='onboarding__nav-wrapper'>
        <button className='onboarding__nav-button onboarding__nav-button--left' onClick={prev}>
          ←
        </button>
        <button className='onboarding__nav-button onboarding__nav-button--right' onClick={next} disabled={!canContinue}>
          →
        </button>
      </div>
    </div>
  )
}

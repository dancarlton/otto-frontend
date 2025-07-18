import { useEffect, useState } from 'react'
import '../Onboarding/Onboarding.css'

export default function Step5({ formData, updateForm, next, prev }) {
  const [selectedNotifications, setSelectedNotifications] = useState(
    formData.notifications?.[0] || ''
  )
  const [selectedDistances, setSelectedDistances] = useState(
    formData.travelDistance || []
  )
  const [canContinue, setContinue] = useState(false)

  const notifications = ['Yes', 'No', 'Maybe so']
  const travelDistance = ['1-5 miles', '5-10 miles', '10-15 miles', '20+']

  const sortDistance = arr => {
    const order = {
      '1-5 miles': 0,
      '5-10 miles': 1,
      '10-15 miles': 2,
      '20+': 3,
    }
    return [...arr].sort((a, b) => order[a] - order[b])
  }

  const handleNotificationSelect = value => {
    const updated = selectedNotifications === value ? '' : value
    setSelectedNotifications(updated)
    updateForm({ notifications: updated ? [updated] : [] })
  }

  const handleDistanceToggle = value => {
    const updated = selectedDistances.includes(value)
      ? selectedDistances.filter(v => v !== value)
      : sortDistance([...selectedDistances, value])
    setSelectedDistances(updated)
    updateForm({ travelDistance: updated })
  }

  useEffect(() => {
    setContinue(selectedNotifications !== '' && selectedDistances.length > 0)
  }, [selectedNotifications, selectedDistances])

  return (
    <div className='onboarding__step'>
      {/* Notifications */}
      <h3 className='onboarding__title'>Notifications</h3>
      <p className='onboarding__subtext'>Get notified when conditions match?</p>
      <div className='onboarding__checkbox-group'>
        {notifications.map(option => (
          <label className='onboarding__checkbox-label' key={option}>
            <input
              type='checkbox'
              checked={selectedNotifications === option}
              onChange={() => handleNotificationSelect(option)}
            />
            {option}
          </label>
        ))}
      </div>

      {/* Travel Distance */}
      <h3 className='onboarding__title'>Distance willing to travel?</h3>
      <p className='onboarding__subtext'>Check all that apply:</p>
      <div className='onboarding__checkbox-group'>
        {travelDistance.map(option => (
          <label className='onboarding__checkbox-label' key={option}>
            <input
              type='checkbox'
              checked={selectedDistances.includes(option)}
              onChange={() => handleDistanceToggle(option)}
            />
            {option}
          </label>
        ))}
      </div>

      <div className='onboarding__nav-wrapper'>
        <button
          className='onboarding__nav-button onboarding__nav-button--left'
          onClick={prev}
        >
          ←
        </button>
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

import '../Onboarding/Onboarding.css'

export default function Step1({ formData, updateForm, next }) {
  const levels = ['Beginner', 'Intermediate', 'Advanced', 'Grom mentality']

  const toggle = level => {
    const updated = formData.shredderLevel?.includes(level)
      ? formData.shredderLevel.filter(l => l !== level)
      : [...(formData.shredderLevel || []), level]
    updateForm({ shredderLevel: updated })
  }

  return (
    <div className='onboarding-step'>
      <h2 className='onboarding-title'>What level of shredder are you?</h2>
      <div className='checkbox-group'>
        {levels.map(level => (
          <label key={level} className='checkbox-label'>
            <input
              type='checkbox'
              checked={formData.shredderLevel?.includes(level)}
              onChange={() => toggle(level)}
            />
            {level}
          </label>
        ))}
      </div>
      <div className='nav-wrapper'>

        <button className='nav-button nav-right' onClick={next}>
          →
        </button>
      </div>
    </div>
  )
}

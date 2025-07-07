import { useState, useEffect } from 'react'
import '../Onboarding/Onboarding.css'

export default function Step3({ formData, updateForm, next, prev }) {
  const [selectedBoards, setSelectedBoards] = useState(
    formData.gear.boards || []
  )
  const [selectedWetsuits, setSelectedWetsuits] = useState(
    formData.gear.wetsuits || []
  )
  const [selectedFins, setSelectedFins] = useState(formData.gear.fins || [])
  const [canContinue, setCanContinue] = useState(false)

  const boards = [
    'Shortboard',
    'Longboard',
    'Fish',
    'Funboard',
    'My body ofcourse',
  ]
  const wetsuits = [
    'Just my skin suit',
    'Spring Suit',
    'Full Suit (3/2mm)',
    'Full Suit (4/3mm+)',
    'Boardies & Bikinis',
  ]
  const fins = [
    'Single Fin',
    'Twin Fin',
    'Thruster (3 fins)',
    'Quad (4 fins)',
    'The ones for my feet',
  ]

  const toggle = (type, value, setFn, current) => {
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value]
    setFn(updated)
    updateForm({
      gear: {
        ...formData.gear,
        [type]: updated,
      },
    })
  }

  useEffect(() => {
    const isComplete =
      selectedBoards.length > 0 &&
      selectedWetsuits.length > 0 &&
      selectedFins.length > 0
    setCanContinue(isComplete)
  }, [selectedBoards, selectedWetsuits, selectedFins])

  return (
    <div className='onboarding__step'>
      <h2 className='onboarding__title'>Surf Gear</h2>
      <p className='onboarding__subtext'>Check all that apply:</p>

      <div className='onboarding__checkbox-group'>
        <p>What type of board do you use?</p>
        {boards.map(type => (
          <label key={type} className='onboarding__checkbox-label'>
            <input
              type='checkbox'
              checked={selectedBoards.includes(type)}
              onChange={() =>
                toggle('boards', type, setSelectedBoards, selectedBoards)
              }
            />
            {type}
          </label>
        ))}
      </div>

      <div className='onboarding__checkbox-group'>
        <p>What type of wetsuit do you own?</p>
        {wetsuits.map(type => (
          <label key={type} className='onboarding__checkbox-label'>
            <input
              type='checkbox'
              checked={selectedWetsuits.includes(type)}
              onChange={() =>
                toggle('wetsuits', type, setSelectedWetsuits, selectedWetsuits)
              }
            />
            {type}
          </label>
        ))}
      </div>

      <div className='onboarding__checkbox-group'>
        <p>What kind of fins do you have?</p>
        {fins.map(type => (
          <label key={type} className='onboarding__checkbox-label'>
            <input
              type='checkbox'
              checked={selectedFins.includes(type)}
              onChange={() =>
                toggle('fins', type, setSelectedFins, selectedFins)
              }
            />
            {type}
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

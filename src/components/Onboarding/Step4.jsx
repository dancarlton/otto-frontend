import "../Onboarding/Onboarding.css";

export default function Step4({ formData, updateForm, next, prev }) {
  const surfSpots = ["Malibu (USA)", "Gold Coast (Australia)", "Uluwatu (Bali)", "Trestles (CA)"];

  const toggle = (key, value) => {
    const current = formData[key] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    updateForm({ [key]: updated });
  };

  return (
    <div className="onboarding__step">
      <h2 className="onboarding__title">Favorite Surf Spots</h2>
      <p className="onboarding__subtext">Search or select your favorites:</p>
      <div className="onboarding__checkbox-group">
        {surfSpots.map((spot) => (
          <label className="onboarding__checkbox-label" key={spot}>
            <input
              type="checkbox"
              checked={formData.spots?.includes(spot)}
              onChange={() => toggle("spots", spot)}
            />
            {spot}
          </label>
        ))}
      </div>


      <div className='onboarding__nav-wrapper'>
        <button className='onboarding__nav-button onboarding__nav-button--left' onClick={prev}>
          ←
        </button>
        <button className='onboarding__nav-button onboarding__nav-button--right' onClick={next}>
          →
        </button>
      </div>
    </div>
  );
}

import "../Onboarding/Onboarding.css";

export default function Step4({ formData, updateForm, next, prev }) {
  const surfSpots = ["Malibu (USA)", "Gold Coast (Australia)", "Uluwatu (Bali)", "Trestles (CA)"];
  const notifications = ["Yes", "No", "Maybe so"];

  const toggle = (key, value) => {
    const current = formData[key] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    updateForm({ [key]: updated });
  };

  return (
    <div className="onboarding-step">
      <h2 className="onboarding-title">Favorite Surf Spots</h2>
      <p className="onboarding-subtext">Search or select your favorites:</p>
      <div className="checkbox-group">
        {surfSpots.map((spot) => (
          <label key={spot}>
            <input
              type="checkbox"
              checked={formData.spots?.includes(spot)}
              onChange={() => toggle("spots", spot)}
            />
            {spot}
          </label>
        ))}
      </div>

      <h3 className="onboarding-title">Notifications</h3>
      <p className="onboarding-subtext">Get notified when conditions match?</p>
      <div className="checkbox-group">
        {notifications.map((opt) => (
          <label key={opt}>
            <input
              type="checkbox"
              checked={formData.notifications?.includes(opt)}
              onChange={() => toggle("notifications", opt)}
            />
            {opt}
          </label>
        ))}
      </div>

      <div className='nav-wrapper'>
        <button className='nav-button nav-left' onClick={prev}>
          ←
        </button>
        <button className='nav-button nav-right' onClick={next}>
          →
        </button>
      </div>
    </div>
  );
}

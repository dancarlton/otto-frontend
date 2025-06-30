import "../Onboarding/Onboarding.css";

export default function Step3({ formData, updateForm, next, prev }) {
  const boardTypes = ["Shortboard", "Longboard", "Fish", "Funboard", "Just my body"];
  const wetsuits = ["Nope", "Spring Suit", "Full Suit (3/2mm)", "Full Suit (4/3mm +)", "Literally no clue"];
  const fins = ["Thruster (3 fins)", "Quad (4 fins)", "Single Fin", "Just the ones for my feet"];

  const toggle = (key, value) => {
    const current = formData[key] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    updateForm({ [key]: updated });
  };

  return (
    <div className="onboarding-step">
      <h2 className="onboarding-title">Surf Gear<br /><small>(check all that apply)</small></h2>

      <div className="checkbox-group">
        <p>What type of board do you use?</p>
        {boardTypes.map((type) => (
          <label key={type} className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.boardTypes?.includes(type)}
              onChange={() => toggle("boardTypes", type)}
            />
            {type}
          </label>
        ))}
      </div>

      <div className="checkbox-group">
        <p>What type of wetsuit do you own?</p>
        {wetsuits.map((type) => (
          <label key={type} className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.wetsuits?.includes(type)}
              onChange={() => toggle("wetsuits", type)}
            />
            {type}
          </label>
        ))}
      </div>

      <div className="checkbox-group">
        <p>What kind of fins do you have?</p>
        {fins.map((type) => (
          <label key={type} className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.fins?.includes(type)}
              onChange={() => toggle("fins", type)}
            />
            {type}
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

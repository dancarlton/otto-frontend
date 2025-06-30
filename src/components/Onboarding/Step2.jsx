import React, { useState, useEffect } from "react";

export default function Step2({ formData, updateForm, next, back }) {
  const [selected, setSelected] = useState(formData.waveHeight || []);
  const [canContinue, setCanContinue] = useState(false);

  const handleCheckboxChange = (value) => {
    const updated = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];

    setSelected(updated);
    updateForm({ waveHeight: updated });
  };

  useEffect(() => {
    setCanContinue(selected.length > 0);
  }, [selected]);

  return (
    <div className="onboarding-step">
      <h2 className="onboarding-title">What wave height do you prefer?</h2>
      <p className="onboarding-subtext">Check all that apply:</p>

      <div className="checkbox-group">
        {["0-2 ft", "2-4 ft", "4-6 ft", "Overhead"].map((option) => (
          <label key={option} className="checkbox-label">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="nav-wrapper">
        <button className="nav-button nav-left" onClick={back}>
          ←
        </button>
        <button
          className="nav-button nav-right"
          onClick={next}
          disabled={!canContinue}
        >
          →
        </button>
      </div>
    </div>
  );
}

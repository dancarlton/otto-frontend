import React, { useState, useEffect } from "react";

export default function Step2({ formData, updateForm, next, prev }) {
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
    <div className="onboarding__step">
      <h2 className="onboarding__title">What wave height do you prefer?</h2>
      <p className="onboarding__subtext">Check all that apply:</p>

      <div className="onboarding__checkbox-group">
        {["1-2 ft", "2-4 ft", "4-6 ft", "6+"].map((option) => (
          <label key={option} className="onboarding__checkbox-label">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="onboarding__nav-wrapper">
        <button className="onboarding__nav-button onboarding__nav-button--left" onClick={prev}>
          ←
        </button>
        <button
          className="onboarding__nav-button onboarding__nav-button--right"
          onClick={next}
          disabled={!canContinue}
        >
          →
        </button>
      </div>
    </div>
  );
}

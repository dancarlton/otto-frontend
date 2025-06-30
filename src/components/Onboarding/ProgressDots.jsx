import React from "react";
import "./Onboarding.css";

export default function ProgressDots({ step, totalSteps }) {
  return (
    <div className="progress-dots">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <span
          key={i}
          className={`dot ${i === step ? "active" : ""}`}
        ></span>
      ))}
    </div>
  );
}

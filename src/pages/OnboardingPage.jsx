import React, { useState } from "react";
import Step1 from "../components/Onboarding/Step1";
import Step2 from "../components/Onboarding/Step2";
import Step3 from "../components/Onboarding/Step3";
import Step4 from "../components/Onboarding/Step4";
import Step5 from "../components/Onboarding/Step5";
import ProgressDots from "../components/Onboarding/ProgressDots";

const steps = [Step1, Step2, Step3, Step4, Step5];

export default function OnboardingPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({
    shredderLevel: [],
    waveHeight: [],
    windDirection: [],
    tide: [],
    gear: [],
  });

  const CurrentStep = steps[stepIndex];

  const next = () => setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  const prev = () => setStepIndex((i) => Math.max(i - 1, 0));

  const updateForm = (newData) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <div className="onboarding-page">
      <CurrentStep
        formData={formData}
        updateForm={updateForm}
        next={next}
        prev={prev}
        isLastStep={stepIndex === steps.length - 1}
      />
      <ProgressDots step={stepIndex} totalSteps={steps.length} />
    </div>
  );
};

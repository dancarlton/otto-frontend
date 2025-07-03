import CTABanner from "../components/CtaBanner/CtaBanner";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Main from "../components/Hero/Hero";

export default function MarketingPage({ onRegisterClick }) {
  return (
    <div>
      <Main />
      <HowItWorks onRegisterClick={onRegisterClick} />
      <CTABanner onRegisterClick={onRegisterClick} />
    </div>
  );
}

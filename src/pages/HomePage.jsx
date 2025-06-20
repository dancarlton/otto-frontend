import CTABanner from "../components/CtaBanner/CtaBanner";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Main from "../components/Main/Main";

export default function HomePage({ onRegisterClick }) {
  return (
    <div>
      <Main />
      <HowItWorks onRegisterClick={onRegisterClick} />
      <CTABanner onRegisterClick={onRegisterClick} />
    </div>
  );
}

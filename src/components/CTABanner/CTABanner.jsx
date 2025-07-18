import "./CTABanner.css";
import waveBanner from "/src/assets/images/wave-banner.jpg"; // replace with your actual path

export default function CTABanner({onRegisterClick}) {
  return (
    <section className="cta">
      <img src={waveBanner} alt="Waves from above" className="cta__image" />
      <div className="cta__content">
        <div className="cta__text">
          <h2>
            LET&apos;S FIND THAT <br />
            <em>PERFECT WAVE</em>
          </h2>
        </div>
        <div className="cta__arrow-wrap">
          <div className="cta__arrow"></div>
        </div>
        <button onClick={onRegisterClick} className="cta__button">Sign up</button>
      </div>
    </section>
  );
}


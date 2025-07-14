import "./HowItWorks.css";
import step1Img from "/src/assets/images/howitworks-step1.jpg";
import step2Img from "/src/assets/images/howitworks-step2.jpg";
import step3Img from "/src/assets/images/howitworks-step3.jpg";

export default function HowItWorks({onRegisterClick}) {
  return (
    <section className="how">
      <h2 className="how__title">How it Works</h2>
      <p className="how__subtitle">You can use Otto in just 3 simple steps.</p>

      <div className="how__steps">
        <div className="how__step how__step--reverse">
          <img
            src={step1Img}
            alt="Set Surf Preferences"
            className="how__image"
          />
          <div className="how__text">
            <h3>Set Surf Preferences</h3>
            <p>
              Tell Otto what kind of waves you like and what kind of surf gear
              you own.
            </p>
            <div className="how__buttons">
              <button onClick={onRegisterClick} className="primary">Try now</button>
              <button onClick={onRegisterClick} className="secondary">Learn more</button>
            </div>
          </div>
        </div>

        <div className="how__step">
          <img src={step2Img} alt="Track Conditions" className="how__image" />
          <div className="how__text">
            <h3>Let Otto Track Conditions</h3>
            <p>
              Otto monitors real-time swell, wind, and tides to match your
              preferences.
            </p>
            <div className="how__buttons">
              <button onClick={onRegisterClick}  className="primary">Try now</button>
              <button onClick={onRegisterClick} className="secondary">Learn more</button>
            </div>
          </div>
        </div>

        <div className="how__step how__step--reverse">
          <img src={step3Img} alt="Get Surf Alerts" className="how__image" />
          <div className="how__text">
            <h3>Get Surf Alerts &amp; Go!</h3>
            <p>
              When conditions are perfect, Otto sends you a surf alert with the
              best spot and time to paddle out.
            </p>
            <div className="how__buttons">
              <button onClick={onRegisterClick}  className="primary">Try now</button>
              <button onClick={onRegisterClick} className="secondary">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

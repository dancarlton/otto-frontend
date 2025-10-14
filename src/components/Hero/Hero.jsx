import "./Hero.css";
import heroImage from "/src/assets/images/hero__image.png";
import heroImageAccent from "/src/assets/images/hero__image-accent2.png";

export default function Main() {
  return (
    <>
      <main className="hero">
        <p className="hero__chat">Start chatting today ^^^ </p>
        <h1 className="hero__title">Meet Otto – your personal surf scout!</h1>

        <div className="hero__content">
          <div className="hero__image-wrapper">
            <img
              className="hero__image"
              src={heroImage}
              alt="Hero Section Image"
            />
            <img src={heroImageAccent} alt="" className="hero__image-accent" />
            <span className="hero__image-accent-text">
              Otto finds your perfect wave based on real-time data and your surf
              style.
            </span>

            <img
              src={heroImageAccent}
              alt=""
              className="hero__image-accent-rotated"
            />
            <span className="hero__image-accent-text-rotated">
              Just tell Otto what you like — we’ll take it from there.
            </span>
          </div>
        </div>
      </main>
    </>
  );
}

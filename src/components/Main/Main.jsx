import "./Main.css";
import mainImage from "/src/assets/images/main__image.png";
import mainImageAccent from "/src/assets/images/main__image-accent2.png";

export default function Main() {
  return (
    <>
      <main className="main">
        <h1 className="main__title">Meet Otto – your personal surf scout!</h1>

        <div className="main__content">
          <div className="main__image-wrapper">
            <img
              className="main__image"
              src={mainImage}
              alt="Hero Section Image"
            />
            <img src={mainImageAccent} alt="" className="main__image-accent" />
            <span className="main__image-accent-text">
              Otto finds your perfect wave based on real-time data and your surf
              style.
            </span>

            <img
              src={mainImageAccent}
              alt=""
              className="main__image-accent-rotated"
            />
            <span className="main__image-accent-text-rotated">
              Just tell Otto what you like — we’ll take it from there.
            </span>
          </div>
        </div>
      </main>
    </>
  );
}

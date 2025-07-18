import "./Footer.css";
import logo from '/src/assets/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
          <img src={logo} alt="Otto logo" />
          <span>OTTO</span>
      </div>

      <div className="footer__bottom">
        <div className="footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
        {/* <div className="footer__social">
          <span>Connect:</span>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
        </div> */}
      </div>
    </footer>
  );
}
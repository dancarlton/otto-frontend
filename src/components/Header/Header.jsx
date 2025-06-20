import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import logo from "/src/assets/logo.png";

export default function Header({ onLoginClick, onRegisterClick }) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Otto logo" />
          <span>OTTO</span>
        </div>

        <SearchBar />

        <div className="header__auth">
          <button onClick={onLoginClick} className="button-outline">
            Log in
          </button>
          <button onClick={onRegisterClick} className="button-filled">
            Create an account
          </button>
        </div>
      </div>
    </header>
  );
}

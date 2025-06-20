import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <form className="searchbar">
      <input
        type="text"
        className="searchbar__input"
        placeholder="Where should I surf tomorrow morning?"
      />
      <button type="submit" className="searchbar__button">
        <FiSearch size={20} />
      </button>
    </form>
  );
}

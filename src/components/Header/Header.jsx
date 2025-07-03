import { useContext } from 'react'
import CurrentUserContext from '../../contexts/CurrentUserContexts'
import SearchBar from '../SearchBar/SearchBar'
import './Header.css'
import logo from '/src/assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header({ onLoginClick, onRegisterClick }) {
  const { userData, isLoggedIn, isOnboarded } = useContext(CurrentUserContext)

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo'>

          <Link to={isLoggedIn ? '/' : '/marketing' }>
            <img src={logo} alt='Otto logo' />
            <span>OTTO</span>
          </Link>
        </div>
        <div className='header__search'>
          <SearchBar />
        </div>

        {!isLoggedIn || !isOnboarded ? (
          <div className='header__auth'>
            <button onClick={onLoginClick} className='button-outline'>
              Log in
            </button>
            <button onClick={onRegisterClick} className='button-filled'>
              Create an account
            </button>
          </div>
        ) : (
          <div className='header__profile'>
            <span className='header__username'>Hi, {userData?.name}</span>
            {/* <Link to='/profile' className='button-outline'>
              Profile
            </Link>
            <button onClick={onLogout} className='button-text'>
              Log out
            </button> */}
          </div>
        )}
      </div>
    </header>
  )
}

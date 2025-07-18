import { useContext, useState } from 'react'
import CurrentUserContext from '../../contexts/CurrentUserContexts'
import SearchBar from '../SearchBar/SearchBar'
import './Header.css'
import logo from '/src/assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header({
  onLoginClick,
  onRegisterClick,
  onLogoutClick,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { userData, isLoggedIn, isOnboarded } = useContext(CurrentUserContext)

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__top'>
          <div className='header__logo'>
            <Link to={isLoggedIn ? '/' : '/marketing'}>
              <img src={logo} alt='Otto logo' />
              <span>OTTO</span>
            </Link>
          </div>

          <button
            className='header__hamburger'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            <span className='header__hamburger-line'></span>
            <span className='header__hamburger-line'></span>
            <span className='header__hamburger-line'></span>
          </button>
        </div>

        <div className='header__search'>
          <SearchBar />
        </div>

        <div
          className={`header__menu ${isMenuOpen ? 'header__menu--open' : ''}`}
        >
          {!isLoggedIn || !isOnboarded ? (
            <div className='header__auth'>
              <button onClick={onLoginClick} className='button button--outline'>
                Log in
              </button>
              <button
                onClick={onRegisterClick}
                className='button button--filled'
              >
                Create an account
              </button>
            </div>
          ) : (
            <div className='header__profile'>
              <span className='header__username'>
                Hi{' '}
                {userData?.name?.charAt(0).toUpperCase() +
                  userData?.name?.slice(1)}
                !
              </span>
              <button
                className='button button--outline'
                onClick={onLogoutClick}
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

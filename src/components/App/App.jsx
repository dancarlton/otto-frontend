// App.jsx
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom'
import { useEffect, useState } from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import MarketingPage from '../../pages/MarketingPage'
import OnboardingPage from '../../pages/OnboardingPage'
import CurrentUserContext from '../../contexts/CurrentUserContexts'
import Preloader from '../Preloader/Preloader'

import { getUser, healthCheck, loginUser, registerUser } from '../../utils/api'
import HomePage from '../../pages/HomePage'
import LogoutModal from '../LogoutModal/LogoutModal'
import WakingUpModal from '../WakingUpModal/WakingUpModal'

export default function App() {
  const [activeModal, setActiveModal] = useState('')
  const [userData, setUserData] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)
  const [isWakingUp, setIsWakingUp] = useState(true)

  const location = useLocation()
  const navigate = useNavigate()

  const openLoginModal = () => setActiveModal('login')
  const openRegisterModal = () => setActiveModal('register')
  const openLogoutModal = () => setActiveModal('logout')
  const closeActiveModal = () => setActiveModal('')

  const isOnboarding = location.pathname === '/onboarding'

  const handleLogin = async ({ email, password }) => {
    try {
      const { user, token } = await loginUser(email, password)
      localStorage.setItem('jwt', token)
      console.log('Successfully logged in user:', user)
      setUserData(user)
      setIsLoggedIn(true)
      navigate('/')
    } catch (err) {
      console.error('Login failed:', err)
      alert('Login failed. Please try again.')
    }
  }

  const handleRegister = async ({ name, email, password }) => {
    try {
      const { user, token } = await registerUser(name, email, password)
      localStorage.setItem('jwt', token)
      setUserData(user)
      setIsLoggedIn(true)
      navigate('/onboarding')
    } catch (err) {
      console.error('Registration failed:', err)
      alert(err.message)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt')
    setIsLoggedIn(false)
    setUserData(null)
    navigate('/marketing')
  }

  // coercing the values into a strict boolean to use for CurrentUserContext
  const isOnboarded =
    !!userData?.preferences?.waveHeight?.length &&
    !!userData?.preferences?.shredderLevel?.length &&
    !!userData?.preferences?.gear?.boards?.length &&
    !!userData?.preferences?.gear?.wetsuits?.length &&
    !!userData?.preferences?.gear?.fins?.length &&
    !!userData?.preferences?.travelDistance?.length &&
    !!userData?.preferences?.notifications?.length

  // check for JWT once on page load
  // fetch user
  // redirect to homepage if needed
  // (stay on homepage when browser is refreshed)
  useEffect(() => {
    const token = localStorage.getItem('jwt')

    if (token) {
      getUser(token)
        .then(user => {
          setUserData(user)
          setIsLoggedIn(true)
          if (
            location.pathname === '/marketing' ||
            location.pathname === '/onboarding'
          ) {
            navigate('/')
          }
        })
        .catch(err => {
          console.error('Invalid token, logging out:', err)
          localStorage.removeItem('jwt')
          setIsLoggedIn(false)
          setUserData(null)
        })
        .finally(() => setCheckingAuth(false))
    } else {
      setCheckingAuth(false)
    }
  }, [])

  // wake up Render servers
  useEffect(() => {
    const wakeUp = async () => {
      setIsWakingUp(true)
      try {
        await healthCheck()
        console.log('✅ Backend is awake!')
      } catch (err) {
        console.error('❌ Wake-up failed:', err)
      } finally {
        setIsWakingUp(false)
      }
    }

    wakeUp()
  }, [])

  if (checkingAuth) return <Preloader />

  return (
    <CurrentUserContext.Provider
      value={{ userData, setUserData, isLoggedIn, isOnboarded, setActiveModal }}
    >
      <div className='page'>
        {!isOnboarding && (
          <Header
            onLoginClick={openLoginModal}
            onRegisterClick={openRegisterModal}
            onLogoutClick={openLogoutModal}
            onClose={closeActiveModal}
          />
        )}

        <div className='page_content'>
          <Routes>
            {/* authenticated + onboarded users go to homepage */}
            <Route
              path='/'
              element={
                isLoggedIn && isOnboarded ? (
                  <HomePage userData={userData} />
                ) : isLoggedIn && !isOnboarded ? (
                  <Navigate to='/onboarding' replace />
                ) : (
                  <Navigate to='/marketing' replace />
                )
              }
            />

            {/* marketing page */}
            <Route
              path='/marketing'
              element={
                <MarketingPage
                  onLoginClick={openLoginModal}
                  onRegisterClick={openRegisterModal}
                  onClose={closeActiveModal}
                />
              }
            />

            {/* onboarding page */}
            <Route
              path='/onboarding'
              element={
                isLoggedIn ? (
                  <OnboardingPage />
                ) : (
                  <Navigate to='/marketing' replace />
                )
              }
            />

            {/* fallback for unknown routes */}
            <Route
              path='*'
              element={
                isLoggedIn && isOnboarded ? (
                  <Navigate to='/' replace />
                ) : (
                  <Navigate to='/marketing' replace />
                )
              }
            />
          </Routes>
        </div>

        {!isOnboarding && <Footer />}
        {isWakingUp && (
          <WakingUpModal isOpen={isWakingUp} onClose={closeActiveModal} />
        )}
        <LoginModal
          isOpen={activeModal === 'login'}
          onClose={closeActiveModal}
          onLogin={handleLogin}
          handleRegisterClick={openRegisterModal}
        />
        <RegisterModal
          isOpen={activeModal === 'register'}
          onClose={closeActiveModal}
          onRegister={handleRegister}
          handleLoginClick={openLoginModal}
        />
        <LogoutModal
          isOpen={activeModal === 'logout'}
          onClose={closeActiveModal}
          onLogout={handleLogout}
        />
      </div>
    </CurrentUserContext.Provider>
  )
}

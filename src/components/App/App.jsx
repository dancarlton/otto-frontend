// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom'
import { useState } from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import MarketingPage from '../../pages/MarketingPage'
import OnboardingPage from '../../pages/OnboardingPage'
import CurrentUserContext from '../../contexts/CurrentUserContexts'

import { loginUser, registerUser } from '../../utils/api'
import HomePage from '../../pages/HomePage'

export default function App() {
  const [activeModal, setActiveModal] = useState('')
  const [userData, setUserData] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const openLoginModal = () => setActiveModal('login')
  const openRegisterModal = () => setActiveModal('register')
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
      alert('Registration failed. Please try again.')
    }
  }

  // coercing the values into a strict boolean to use for CurrentUserContext
  const isOnboarded =
    !!userData?.preferences?.waveHeight?.length &&
    !!userData?.preferences?.shredderLevel?.length &&
    !!userData?.preferences?.gear?.boards?.length &&
    !!userData?.preferences?.gear?.wetsuits?.length &&
    !!userData?.preferences?.gear?.fins?.length &&
    !!userData?.preferences?.notifications?.length

  return (
    <CurrentUserContext.Provider value={{ userData, isLoggedIn, isOnboarded }}>
      <div className='page'>
        {!isOnboarding && (
          <Header
            onLoginClick={openLoginModal}
            onRegisterClick={openRegisterModal}
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

        <LoginModal
          isOpen={activeModal === 'login'}
          onClose={closeActiveModal}
          onLogin={handleLogin}
        />
        <RegisterModal
          isOpen={activeModal === 'register'}
          onClose={closeActiveModal}
          onRegister={handleRegister}
        />
      </div>
    </CurrentUserContext.Provider>
  )
}

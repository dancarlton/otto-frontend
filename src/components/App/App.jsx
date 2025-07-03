// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import HomePage from '../../pages/HomePage'
import { useState } from 'react'
import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import OnboardingPage from '../../pages/OnboardingPage'
import CurrentUserContext from '../../contexts/CurrentUserContexts'
import { loginUser, registerUser } from '../../utils/api'

export default function App() {
  const [activeModal, setActiveModal] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)

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

  return (
    <CurrentUserContext.Provider value={{ userData, isLoggedIn }}>
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
            <Route
              path='/'
              element={
                <HomePage
                  onLoginClick={openLoginModal}
                  onRegisterClick={openRegisterModal}
                  onClose={closeActiveModal}
                />
              }
            />
            <Route path='/onboarding' element={<OnboardingPage />} />
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

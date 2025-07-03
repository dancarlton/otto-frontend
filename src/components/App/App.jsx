// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import HomePage from '../../pages/HomePage'
import { useState } from 'react'
import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import OnboardingPage from "../../pages/OnboardingPage";

export default function App() {
  const [activeModal, setActiveModal] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const openLoginModal = () => setActiveModal('login')
  const openRegisterModal = () => setActiveModal('register')
  const closeActiveModal = () => setActiveModal('')

  const isOnboarding = location.pathname === '/onboarding'

  return (
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
            path="/"
            element={
              <HomePage
                onLoginClick={openLoginModal}
                onRegisterClick={openRegisterModal}
                onClose={closeActiveModal}
              />
            }
          />
          <Route path="/onboarding" element={<OnboardingPage />} />
        </Routes>
      </div>

      {!isOnboarding && <Footer />}

      <LoginModal isOpen={activeModal === 'login'} onClose={closeActiveModal} />
      <RegisterModal
        isOpen={activeModal === 'register'}
        onClose={closeActiveModal}
        onRegister={(user) => {
          console.log('New user registered:', user)
          navigate('/onboarding')
        }}
      />
    </div>
  )
}

import { useState } from 'react'
import Auth from './Auth'

export default function Header() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')

  return (
    <header>
      <nav>
        <button onClick={() => {
          setAuthMode('signup')
          setShowAuthModal(true)
        }}>Sign Up</button>
        <button onClick={() => {
          setAuthMode('signin')
          setShowAuthModal(true)
        }}>Sign In</button>
      </nav>
      {showAuthModal && <Auth 
        onClose={() => setShowAuthModal(false)} 
        mode={authMode}
      />}
    </header>
  )
}
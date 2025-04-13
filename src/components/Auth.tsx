import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

interface AuthProps {
  onClose: () => void;
  mode: 'signin' | 'signup';
}

export default function Auth({ onClose, mode }: AuthProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignUp = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      onClose()
      alert('Check your email for the confirmation link!')
    } catch (error) {
      setError(error.message || 'An unexpected error occurred')
      setTimeout(() => setError(null), 5000)
    } finally {
      setLoading(false)
    }
  }

  const handleSignIn = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      onClose()
    } catch (error) {
      setError(error.message || 'An unexpected error occurred')
      setTimeout(() => setError(null), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <h2>Authentication</h2>
      {error && <div className="error-message">{error}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {mode === 'signup' ? (
        <button onClick={handleSignUp} disabled={loading}>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      ) : (
        <button onClick={handleSignIn} disabled={loading}>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      )}
    </div>
  )
}
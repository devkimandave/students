import { useState } from 'react'

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const styles = {
    loginPage: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#1e293b' },
    loginForm: { background: 'white', padding: '2rem', borderRadius: '8px', maxWidth: '400px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' },
    heading: { textAlign: 'center', color: '#2563eb', margin: '0 0 1rem 0' },
    input: { padding: '10px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '14px' },
    inputError: { padding: '10px', border: '2px solid #ef4444', borderRadius: '4px', fontSize: '14px' },
    errorText: { color: '#ef4444', fontSize: '12px' },
    button: { background: '#2563eb', color: 'white', border: 'none', padding: '12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
    buttonDisabled: { background: '#94a3b8', color: 'white', border: 'none', padding: '12px', borderRadius: '4px', cursor: 'not-allowed' },
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.username.trim()) newErrors.username = 'Username टाक भाऊ'
    else if (formData.username.length < 3) newErrors.username = 'Username कमीत कमी 3 अक्षरं हवं'
    if (!formData.password) newErrors.password = 'Password टाक'
    else if (formData.password.length < 5) newErrors.password = 'Password कमीत कमी 5 अक्षरं हवं'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsLoading(true)
    setTimeout(() => {
      if (formData.username === 'admin' && formData.password === 'admin123') {
        alert('Login Successful! ✅')
      } else {
        setErrors({ general: 'Username किंवा Password चुकलं' })
      }
      setIsLoading(false)
    }, 800)
  }

  return (
    <div style={styles.loginPage}>
      <form onSubmit={handleSubmit} style={styles.loginForm}>
        <h2 style={styles.heading}>College Management Login</h2>
        {errors.general && <div style={{background:'#fee2e2',color:'#dc2626',padding:'10px',borderRadius:'4px',textAlign:'center'}}>{errors.general}</div>}
        <div>
          <input type="text" placeholder="Username" value={formData.username} 
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            style={errors.username? styles.inputError : styles.input} />
          {errors.username && <span style={styles.errorText}>{errors.username}</span>}
        </div>
        <div>
          <input type="password" placeholder="Password" value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            style={errors.password? styles.inputError : styles.input} />
          {errors.password && <span style={styles.errorText}>{errors.password}</span>}
        </div>
        <button type="submit" disabled={isLoading} style={isLoading? styles.buttonDisabled : styles.button}>
          {isLoading? 'Logging in...' : 'Login'}
        </button>
        <p style={styles.hint}>Demo: admin / admin123</p>
      </form>
    </div>
  )
}

export default Login
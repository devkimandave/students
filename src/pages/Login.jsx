import { useState } from 'react'

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const styles = {
    loginPage: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#1e293b',
      fontFamily: 'Arial, sans-serif'
    },
    loginForm: {
      background: 'white',
      padding: '2rem',
      borderRadius: '8px',
      maxWidth: '400px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    heading: {
      textAlign: 'center',
      color: '#2563eb',
      margin: '0 0 1rem 0'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    input: {
      padding: '10px',
      border: '1px solid #cbd5e1',
      borderRadius: '4px',
      fontSize: '14px',
      outline: 'none'
    },
    inputError: {
      padding: '10px',
      border: '2px solid #ef4444',
      borderRadius: '4px',
      fontSize: '14px',
      outline: 'none'
    },
    errorText: {
      color: '#ef4444',
      fontSize: '12px',
      marginTop: '2px'
    },
    errorBanner: {
      background: '#fee2e2',
      color: '#dc2626',
      padding: '10px',
      borderRadius: '4px',
      fontSize: '14px',
      textAlign: 'center',
      border: '1px solid #fecaca'
    },
    button: {
      background: '#2563eb',
      color: 'white',
      border: 'none',
      padding: '12px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '14px'
    },
    buttonDisabled: {
      background: '#94a3b8',
      color: 'white',
      border: 'none',
      padding: '12px',
      borderRadius: '4px',
      cursor: 'not-allowed',
      fontWeight: 'bold',
      fontSize: '14px'
    },
    hint: {
      textAlign: 'center',
      fontSize: '12px',
      color: '#64748b',
      margin: '8px 0 0 0'
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.username.trim()) {
      newErrors.username = 'Username टाक भाऊ'
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username कमीत कमी 3 अक्षरं हवं'
    }

    if (!formData.password) {
      newErrors.password = 'Password '
    } else if (formData.password.length < 5) {
      newErrors.password = 'Password '
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value })
    if (errors[name]) {
      setErrors({...errors, [name]: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    setTimeout(() => {
      if (formData.username === 'admin' && formData.password === 'admin234') {
        alert('Login Successful! ✅')
        onLogin()
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

        {errors.general && (
          <div style={styles.errorBanner}>{errors.general}</div>
        )}

        <div style={styles.formGroup}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            style={errors.username? styles.inputError : styles.input}
          />
          {errors.username && <span style={styles.errorText}>{errors.username}</span>}
        </div>

        <div style={styles.formGroup}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={errors.password? styles.inputError : styles.input}
          />
          {errors.password && <span style={styles.errorText}>{errors.password}</span>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={isLoading? styles.buttonDisabled : styles.button}
        >
          {isLoading? 'Logging in...' : 'Login'}
        </button>

        <p style={styles.hint}>Demo: admin / admin234</p>
      </form>
    </div>
  )
}

export default Login
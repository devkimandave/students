import { useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom' 

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  
  const navigate = useNavigate() 
  const location = useLocation() 

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(email === 'admin@gmail.com' && password === '1234'){
      
      navigate('/', { replace: true }) // 
    } else {
      
      navigate('/login')
    }
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
      <form onSubmit={handleSubmit}>
        <h2>Login - Current Path: {location.pathname}</h2>
        
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        /><br/><br/>
        
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        /><br/><br/>
        
        <button type="submit">Login</button>
        
        <p>
          
          <Link to="/">Home </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
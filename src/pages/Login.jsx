import { useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom' // react-router-dom मधून हे 3 import केले

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  // हे 2 react-router-dom चे hooks आहेत
  const navigate = useNavigate() // Page बदलायला
  const location = useLocation() // Current URL बघायला

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(email === 'admin@gmail.com' && password === '1234'){
      // navigate() हा react-router-dom चा function आहे
      navigate('/', { replace: true }) // Home ला पाठव आणि back button ने login ला येऊ देऊ नको
    } else {
      // Error आला तर login page वरच ठेव
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
          {/* Link हा पण react-router-dom चा component आहे */}
          <Link to="/">Home ला जा</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
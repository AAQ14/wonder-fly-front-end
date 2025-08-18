
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

function LoginForm({ onLogin }) {
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/auth/login', {
        email,
        password
      })
      localStorage.setItem('token', res.data.token)
      onLogin(res.data.token)
      navigate('/flights')
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="Emai">Email</label>
      <input 
       type="email"
        value={email}
        onChange={event => setemail(event.target.value)}
        required
      />
      <label htmlFor="Emai">Password</label>
      <input 
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        required
      />
      
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
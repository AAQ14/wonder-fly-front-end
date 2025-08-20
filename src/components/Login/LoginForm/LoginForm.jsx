
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import '../../../style/login.css'
import { Mail } from 'lucide-react';

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
    <div className='containerS'>
    <form onSubmit={handleSubmit}>
      <div className='second'>
      <h1 className='title'>Login</h1>
      <br /><br />
      <label htmlFor="Emai">Email</label>
      <br />
      <input 
       type="email"
        value={email}
        onChange={event => setemail(event.target.value)}
        required
      />
      <br />
      <label htmlFor="Emai">Password</label>
      <br />
      <input 
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        required
      />
      <br /><br />
      
      <button className='Btn' type="submit">Login</button>
  
    </div>
    </form>
    </div>
  )
}

export default LoginForm
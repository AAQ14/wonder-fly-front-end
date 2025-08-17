import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

function SignUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:3000/auth/signup', {
         firstName,
        lastName,
        email,
        password
      })
      alert('User registered, please login')
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      navigate('/login')
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
      placeholder='First Name'
      value={firstName}
      onChange={event=>setFirstName(event.target.value)}
      required
      />
      
  <input
      placeholder='Last Name'
      value={lastName}
      onChange={event=>setLastName(event.target.value)}
      required
      />

      <input 
        placeholder="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        required
      />
      <input 
        placeholder="Password"
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}
export default  SignUp
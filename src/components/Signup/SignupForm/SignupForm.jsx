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
      await axios.post('https://wonder-fly-back-end.onrender/auth/signup', {
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
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
       <div className='container'>
        <div className='second'>
      <h1>Sign Up</h1>
      <label htmlFor="FirstName">First Name</label>
      <input
      value={firstName}
      onChange={event=>setFirstName(event.target.value)}
      required
      />
      <br />

      <label htmlFor="LastName">Last Name</label>
  <input
      value={lastName}
      onChange={event=>setLastName(event.target.value)}
      required
      />
      <br />

<label htmlFor="Emai">Email</label>
      <input 
      type='email'
        value={email}
        onChange={event => setEmail(event.target.value)}
        required
      />
      <br />

      <label htmlFor="Password">Password</label>
      <input 
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        required
      />
      <br />
      <button className='Btn' type="submit">Sign Up</button>
    </div>
    </div>
    </form>
  )
}
export default  SignUp

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [loginError, setLoginError] = useState('')
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => {
    const storedUsers = JSON.parse(localStorage.getItem('userData')) || []

    const user = storedUsers.find((user) => user.email === data.email)

    if (user) {
      if (user.password === data.password) {
        localStorage.setItem('currentUser', JSON.stringify(user))
        setLoginError('')
        navigate('/profile') 
      } else {
        setLoginError('Password is incorrect. Please try again.')
      }
    } else {
      setLoginError('No account found with this email. Please create one first.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white border border-gray-200 shadow-lg rounded-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign in to your PopX account</h2>
        <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="relative w-full">
            <label htmlFor="email" className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              {...register('email', { required: true })}
              className={`block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500 ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
          </div>

          <div className="relative w-full">
            <label htmlFor="password" className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              {...register('password', { required: true })}
              className={`block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500 ${
                errors.password ? 'border-red-500' : ''
              }`}
            />
          </div>

          {loginError && <p className="text-red-500 text-sm">{loginError}</p>}

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-3 font-medium rounded-md transition ${
              isValid
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
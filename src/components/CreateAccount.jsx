import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function CreateAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { agency: 'no' } })

  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log("Form submitted:", data)

    const existingUsers = JSON.parse(localStorage.getItem('userData')) || []    
    existingUsers.push(data)
    localStorage.setItem('userData', JSON.stringify(existingUsers))

    alert('Account created successfully!')
    navigate('/signin') 
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white border border-gray-200 shadow-lg rounded-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Create your PopX account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="relative w-full">
            <label
              htmlFor="fullName"
              className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Marry Doe"
              {...register('fullName', { required: 'Full Name is required.' })}
              className={
                `block w-full border border-gray-300 rounded-md px-3 py-2
                 focus:outline-none focus:ring-1 focus:ring-purple-500` +
                (errors.fullName ? ' border-red-500' : '')
              } 
            />
            {errors.fullName && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label
              htmlFor="phone"
              className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="1234567890"
              inputMode="numeric"
              maxLength={10}
              {...register('phone', {
                required: 'Phone number is required.',
                pattern: {
                  value: /^[0-9]{10}$/,  
                  message: 'Must be exactly 10 digits.',
                },
              })}
              onInput={e => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/\D/g, '')
                  .slice(0, 10)
              }}
              className={
                `block w-full border border-gray-300 rounded-md px-3 py-2
                 focus:outline-none focus:ring-1 focus:ring-purple-500` +
                (errors.phone ? ' border-red-500' : '')
              }
            />
            {errors.phone && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label
              htmlFor="email"
              className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600"
            >
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register('email', {
                required: 'Email is required.',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Enter a valid email.',
                },
              })}
              className={
                `block w-full border border-gray-300 rounded-md px-3 py-2
                 focus:outline-none focus:ring-1 focus:ring-purple-500` +
                (errors.email ? ' border-red-500' : '')
              } 
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label
              htmlFor="password"
              className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register('password', {
                required: 'Password is required.',
                minLength: { value: 6, message: 'Min 6 characters.' },
              })}
              className={
                `block w-full border border-gray-300 rounded-md px-3 py-2
                 focus:outline-none focus:ring-1 focus:ring-purple-500` +
                (errors.password ? ' border-red-500' : '')
              }
            />
            {errors.password && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label
              htmlFor="company"
              className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600"
            >
              Company name
            </label>
            <input
              id="company"
              type="text"
              placeholder="Acme Inc."
              {...register('company')}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <div>
            <span className="block text-sm font-medium text-purple-600 mb-1">
              Are you an Agency? <span className="text-red-500">*</span>
            </span>
            <div className="flex items-center space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="yes"
                  {...register('agency', { required: 'Please select one.' })}
                  className="text-purple-600 focus:ring-purple-500"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="no"
                  {...register('agency', { required: 'Please select one.' })}
                  className="text-purple-600 focus:ring-purple-500"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
            {errors.agency && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.agency.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition cursor-pointer" disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  )
}
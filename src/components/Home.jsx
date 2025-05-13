import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white border border-gray-200 shadow-lg rounded-xl w-full max-w-sm p-6 flex flex-col justify-between h-fit">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Welcome to PopX
          </h2>
          <p className="text-gray-500 mb-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <button
            onClick={() => navigate('/create-account')}
            className="w-full py-2 bg-[#6C25FF] hover:bg-purple-600 text-white rounded-md transition"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate('/signin')}
            className="w-full py-2 bg-purple-200 hover:bg-purple-300 text-purple-800 rounded-md transition"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home

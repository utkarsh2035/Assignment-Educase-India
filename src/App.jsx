// App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CreateAccount from './components/CreateAccount'
import SignIn from './components/SignIn'
import UserProfile from './components/UserProfile'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  )
}

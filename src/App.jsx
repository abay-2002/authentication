import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './app/login'
import RegisterPage from './app/register'

import RootPage from './app/index'
import Dashboard from './app/dashboard'

function App() {
  return (
    <>
      <Router>
        <div className='pt-0 px-4 py-2'>
          <Routes>
            <Route path='/' element={<RootPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

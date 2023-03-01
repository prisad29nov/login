import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Login from './Components/Login'

import Signup from './Components/Signup'
import ForgotPassword from './Components/ForgotPassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/forgot' element={<ForgotPassword/>} />
      </Routes>
    
    </div>
  )
}

export default App

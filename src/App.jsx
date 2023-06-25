import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from '/src/pages/Home'
import Login from '/src/pages/Login'
// import './App.css'
import {Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home/>}> </Route>
        <Route path="/Login" exact element={<Login/>}> </Route>
      </Routes>
    </>
  )
}

export default App

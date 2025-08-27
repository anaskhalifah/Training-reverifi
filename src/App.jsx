import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Profile from './Profile/Profile'
import Achievements from './Achievements/Achievements'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Profile></Profile>
    <Achievements></Achievements>

    </>
  )
}

export default App

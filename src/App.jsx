import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Profile from './Profile/Profile'
import Achievements from './Achievements/Achievements'
import Footer from './Footer/Footer'
import Listing from './Listing/Listing'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Profile/>
    <Achievements/>
    <Listing></Listing>
    <Footer/>

    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Home } from './Components/Home'
import { Dashboard } from './Components/Dashboard'

function App() {
  const [isClicked, setIsClicked] = useState(false)

  const toggle = ()=> setIsClicked(!isClicked)

  return (
    <>
    {isClicked? <Dashboard/> :<Home toggle ={toggle}/>}
    </>
  )
}

export default App

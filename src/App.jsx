import { useState } from 'react'
import reactLogo from './assets/react.svg'
import pizza from './pizza.png'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Count'
import Users from './Users'
import Friends from './Friends'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
     <Count></Count>
      
      
      
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar/>
    </>
  )
}

export default App

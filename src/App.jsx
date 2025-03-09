import { useState } from 'react'
import Insert from './components/Insert/Insert'
import Code from './components/Code/Code'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Insert/>
      <Code />
    </>
  )
}

export default App

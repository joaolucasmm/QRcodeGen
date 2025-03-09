import { useState } from 'react'
import Insert from './components/Insert/Insert'
import Code from './components/Code/Code'
import './App.css'

function App() {
  const [content, setContent] = useState("https://joaolucasmm.github.io/portfolio");

  return (
    <div className='app'>
      <Insert setContent={setContent}/>
      <Code genImage={content}/>
    </div>
  )
}

export default App

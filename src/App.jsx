import { useState } from 'react'
import Insert from './components/Insert/Insert'
import Code from './components/Code/Code'
import './App.css'

function App() {
  const portfolio = "https://joaolucasmm.github.io/portfolio"

  const [content, setContent] = useState(portfolio);

  return (
    <div className='app'>
      <Insert setContent={setContent} />
      <Code genImage={content} />
      <article className='footer'>made by <a href={portfolio}>João Lucas</a>. 2025</article>
    </div>
  )
}

export default App

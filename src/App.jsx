import { useState } from 'react'
import Insert from './components/Insert/Insert'
import Code from './components/Code/Code'

function App() {
  const [content, setContent] = useState("https://joaolucasmm.github.io/portfolio");

  return (
    <>
      <Insert setContent={setContent}/>
      <Code genImage={content}/>
    </>
  )
}

export default App

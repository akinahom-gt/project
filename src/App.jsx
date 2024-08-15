import { useState } from 'react'
import About from './components/About'
import Projects from './components/Projects'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <About/>
        <Projects/>
      </div>
    </>
  )
}

export default App

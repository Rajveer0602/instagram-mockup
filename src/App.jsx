import { useState } from 'react'
import InstagramMobileMockup from './components/InstagramMobileMockup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InstagramMobileMockup />
    </>
  )
}

export default App

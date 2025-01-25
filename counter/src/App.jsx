import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Button from './components/Button'
import './App.css'

function App() {
  const [count,setCount] = useState(0);

  return (
    <>
    <Button count={count} setCount={setCount} />
    {count}
    </>
  )
}

export default App

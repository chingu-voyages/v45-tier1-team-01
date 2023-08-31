import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchComponent from './components/SearchComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <SearchComponent />
  )
}

export default App

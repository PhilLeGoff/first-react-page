// src/App.tsx
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import './index.css'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />

      <Hero />

      <Footer />
    </div>
  )
}

export default App

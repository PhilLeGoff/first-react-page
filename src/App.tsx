// src/App.tsx
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <h1>Welcome to Our Website</h1>
        <p className="tagline">Vite + React</p>
        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App

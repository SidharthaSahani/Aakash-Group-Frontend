import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Heropage from './components/Heropage'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

const Home = () => (
  <main>
    <Heropage />
    <ProductList />
  </main>
)

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

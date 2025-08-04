import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import BlogPage from './pages/Blog-page'
import CareerPage from './pages/Career'
import BlogDetailPage from './pages/Blog-detail-page'


function App() {
  return (
    <Router>
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogDetailPage />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

export default App

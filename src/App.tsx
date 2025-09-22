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
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import PrivateRoute from './components/PrivateRoute'
import NotFound from './pages/NotFound'
import CreateBlog from './pages/CreateBlog'
import MyEditor from './pages/Test'
import Editor from './pages/Test'
import CreateBlogWrapper from './pages/CreateBlogWrapper'
import CreateStockitBlog from './pages/CreateStockitBlog'
import CreateStockitBlogWrapper from './pages/CreateStockitBlogWrapper'


function App() {
  return (
    <Router>
      <ToastContainer />
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/test' element={<Editor />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/create-blog"
            element={
              <PrivateRoute>
                <CreateBlog />
              </PrivateRoute>
            }
          />
          <Route
            path="/create-stockit-blog"
            element={
              <PrivateRoute>
                <CreateStockitBlog />
              </PrivateRoute>
            }
          />
          <Route
            path="/update-blog/:id"
            element={
              <PrivateRoute>
                <CreateBlogWrapper />
              </PrivateRoute>
            }
          />
          <Route
            path="/update-stockit-blog/:id"
            element={
              <PrivateRoute>
                <CreateStockitBlogWrapper />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profiles from './pages/Profiles'
import Blogs from './pages/Blogs'
import History from './pages/History'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/history" element={<History />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

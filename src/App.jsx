import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import PageTransition from './components/layout/PageTransition.jsx'
import MobileStickyBar from './components/layout/MobileStickyBar.jsx'
import MagneticCursor from './components/shared/MagneticCursor.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Review from './pages/Review.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-base">
      <MagneticCursor />
      <Navbar />
      <ScrollToTop />
      <main className="min-w-0 flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/review" element={<PageTransition><Review /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  )
}

export default App

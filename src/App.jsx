import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppWidget from './components/WhatsAppWidget'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <WhatsAppWidget />
    </BrowserRouter>
  )
}

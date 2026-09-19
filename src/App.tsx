import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Stub from './pages/Stub';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <CartProvider>
          <ScrollToTop />
          <a href="#main" className="skip-link">Skip to content</a>
          <Header />
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/organic" element={<Stub eyebrow="Collection" title={['Organic', 'Olive Oil']} />} />
              <Route path="/extra-virgin" element={<Stub eyebrow="Collection" title={['Extra Virgin', 'Olive Oil']} />} />
              <Route path="/oil-jamon" element={<Stub eyebrow="Collection" title={['Oil & Jamón']} />} />
              <Route path="/story" element={<Stub eyebrow="Our story" title={['Our story']} />} />
              <Route path="/health" element={<Stub eyebrow="Health" title={['Good by', 'nature.']} />} />
              <Route path="/contact" element={<Stub eyebrow="Contact" title={['Let’s talk.']} />} />
              <Route path="/checkout" element={<Stub eyebrow="Checkout" title={['Checkout']} />} />
              <Route path="*" element={<Stub eyebrow="404" title={['Page not', 'found.']} />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </BrowserRouter>
    </MotionConfig>
  );
}

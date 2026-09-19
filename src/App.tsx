import { useEffect, type ReactNode } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { MotionConfig, motion } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductPage from './pages/ProductPage';
import Story from './pages/Story';
import Health from './pages/Health';
import OilJamon from './pages/OilJamon';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function PageFade({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <motion.main id="main" key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
      {children}
    </motion.main>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <CartProvider>
          <ScrollToTop />
          <a href="#main" className="skip-link">Skip to content</a>
          <Header />
          <PageFade>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/organic" element={<Collection kind="eco" />} />
                <Route path="/extra-virgin" element={<Collection kind="ext" />} />
                <Route path="/oil-jamon" element={<OilJamon />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/story" element={<Story />} />
                <Route path="/health" element={<Health />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
          </PageFade>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </BrowserRouter>
    </MotionConfig>
  );
}

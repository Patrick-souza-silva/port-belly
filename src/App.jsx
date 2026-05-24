import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import ModelsPage from './pages/ModelsPage';

function App() {


  return (
    <BrowserRouter>
      <div className="app-root-container">
        {/* Helper to reset scroll behavior on path navigation */}
        <ScrollToTop />

        {/* Global Premium sticky navigation header */}
        <Header />

        {/* Client side page routing switch */}
        <main className="main-content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/modelos" element={<ModelsPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Global Footer Details */}
        <Footer />

        <style>{`
          .app-root-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            width: 100%;
            background-color: var(--bg-light);
          }

          .main-content-area {
            flex-grow: 1;
            width: 100%;
          }
        `}</style>
      </div>
    </BrowserRouter>
  );
}

export default App;

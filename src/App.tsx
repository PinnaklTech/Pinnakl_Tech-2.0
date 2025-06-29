import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import ProductDevelopmentPage from './pages/services/ProductDevelopmentPage';
import OdooERPPage from './pages/services/OdooERPPage';
import FailureAnalysisPage from './pages/services/FailureAnalysisPage';
import TechnicalSpecsPage from './pages/services/TechnicalSpecsPage';
import ManufacturingPage from './pages/services/ManufacturingPage';
import SupplyChainPage from './pages/services/SupplyChainPage';
import AllProjectsPage from './pages/AllProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { useLoading } from './hooks/useLoading';

function App() {
  const { isLoading } = useLoading({
    initialLoadDuration: 1500,
    routeTransitionDuration: 1000,
    minLoadingTime: 800
  });

  return (
    <div className="font-inter overflow-x-hidden">
      {/* Global Loading Screen */}
      <AnimatePresence mode="wait">
        <LoadingScreen isVisible={isLoading} />
      </AnimatePresence>

      {/* Main Application */}
      <AnimatePresence mode="wait">
        {!isLoading && (
          <>
            <Header />
            <main className="overflow-x-hidden">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services/product-development" element={<ProductDevelopmentPage />} />
                <Route path="/services/odoo-erp" element={<OdooERPPage />} />
                <Route path="/services/failure-analysis" element={<FailureAnalysisPage />} />
                <Route path="/services/technical-specifications" element={<TechnicalSpecsPage />} />
                <Route path="/services/manufacturing" element={<ManufacturingPage />} />
                <Route path="/services/supply-chain" element={<SupplyChainPage />} />
                <Route path="/projects" element={<AllProjectsPage />} />
                <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
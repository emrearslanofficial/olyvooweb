import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Preview from "./components/Preview";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import DeleteAccount from "./pages/DeleteAccount";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* 🌍 Main Landing Page */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <div className="bg-darkBg text-white min-h-screen font-inter">
                <Navbar />
                <Hero />
                <Features />
                <Preview />
                <CTA />
                <Footer />
              </div>
            </PageWrapper>
          }
        />

        {/* 🔒 Delete Account Page */}
        <Route
          path="/delete-account"
          element={
            <PageWrapper>
              <DeleteAccount />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { AuthProvider } from "./context/AuthContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import CommunicationHub from "./components/CommunicationHub";
import Layout from "./components/Layout";

// Lazy Load Pages for Performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Certificate = lazy(() => import("./pages/Certificate"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Login = lazy(() => import("./pages/Login"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const LocationLanding = lazy(() => import("./pages/LocationLanding"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ComparisonHub = lazy(() => import("./pages/ComparisonHub"));
const ProgrammaticGate = lazy(() => import("./pages/ProgrammaticGate"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-midnight">
    <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

import MagneticCursor from "./components/MagneticCursor";
import AudioPlayer from "./components/AudioPlayer";
import ContactPopup from "./components/ContactPopup";
import GEOKnowledgeGraph from "./components/GEOKnowledgeGraph";

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin') || location.pathname === '/login';

  return (
    <div className="min-h-screen selection:bg-white selection:text-black bg-obsidian">
      {!isAdminPage && (
        <header>
          <Navbar />
        </header>
      )}
      <AudioPlayer />
      <GEOKnowledgeGraph />
      {!isAdminPage && <ContactPopup />}
      <CommunicationHub />
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />} key={location.pathname}>
          <Routes location={location}>
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/posts" element={<Blog />} />
            <Route path="/posts/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/top-digital-marketing-agencies-kerala" element={<ComparisonHub />} />
            <Route path="/:slug" element={<ProgrammaticGate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <MagneticCursor />
          <AppContent />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

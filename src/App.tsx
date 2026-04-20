import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-midnight">
    <div className="w-12 h-12 border-2 border-vibrant-indigo/20 border-t-vibrant-indigo rounded-full animate-spin" />
  </div>
);

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin') || location.pathname === '/login';

  return (
    <Layout>
      <div className="min-h-screen selection:bg-vibrant-indigo selection:text-white">
        {!isAdminPage && (
          <header>
            <Navbar />
          </header>
        )}
        <CommunicationHub />
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
        {!isAdminPage && <Footer />}
      </div>
    </Layout>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <CustomCursor />
          <AppContent />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

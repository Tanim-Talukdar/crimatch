import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from './Nav';
import Auth from './components/Auth';
import Home from './components/Home/Homepage';
import Listing from './components/ListingPage';
import { AuthProvider } from './context/authcontext';
import Show from './components/Show';
import Footer from './Footer';
import NewListing from './components/NewListing';
import { ListingsProvider } from './context/listingContext';
import Contact from './components/Contact';
import NotFound from './NotFound';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function AppContent() {
  const location = useLocation();

  // Initialize AOS inside useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // paths where you want to hide the footer
  const hideFooterPaths = ["/auth"];

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/listings" element={<Listing />} />
        <Route path="/listings/:id" element={<Show />} />
        <Route path="/newlisting" element={<NewListing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ListingsProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ListingsProvider>
    </BrowserRouter>
  );
}


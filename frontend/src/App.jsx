import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from './Nav';
import Auth from './components/Auth';
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
import CartPage from './components/Cart/CartPage';
import EditListing from './components/EditListing';
import { CartProvider } from './context/cartcontext';
import Merge from './components/HomeTrial/Merge'
import Chatbox from './chatbot';


function AppContent() {
  const location = useLocation();


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const hideFooterPaths = ["/auth"];

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Merge />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/listings" element={<Listing />} />
        <Route path="/listings/:id" element={<Show />} />
        <Route path="/edit/:id" element={<EditListing />} />
        <Route path="/newlisting" element={<NewListing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Chatbox/>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ListingsProvider>
        <AuthProvider>
          <CartProvider>
            <AppContent />
          </CartProvider>
        </AuthProvider>
      </ListingsProvider>
    </BrowserRouter>
  );
}


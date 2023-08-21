import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/home';
import Footer from './components/footer';
import Meals from './components/menu';
import RestaurantPlan from './components/Restaurant';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider
          mode="checkout-session"
          stripe={process.env.REACT_APP_STRIPE_API_KEY}
        >
          <BrowserRouter>
            <div>
              <Toaster />
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Meals />} />
                <Route path="/restaurant" element={<RestaurantPlan />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

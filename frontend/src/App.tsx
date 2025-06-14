// import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/layout/Header';

// import { useEffect } from 'react';

// function App() {
//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/api/test')
//       .then(res => res.json())
//       .then(data => console.log('✅ Réponse API :', data))
//       .catch(err => console.error('❌ Erreur CORS/API :', err));
//   }, []);


//   return <h1>Test API Laravel depuis React</h1>;
// }



/*--- Wrapper pour accéder à useLocation() ---*/
function AppLayout() {
  const { pathname } = useLocation();

  // routes sans Header/Footer
  const noLayoutRoutes = ['/login', '/register'];
  const hideLayout = noLayoutRoutes.includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <AppLayout />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useGlobalContext } from './components/Context/Context';
import {
  AuthProvider,
  useAuth,
} from './components/Context/AuthContext';
import LoginForm from './components/auth/LoginForm';
import HomePage from './components/home';
import ShopIndex from './components/shop';
import CartContainer from './components/cart/CartContainer';
import ProductDetails from './components/single-product/ProductDetails';
import CheckOut from './components/CheckOut/index.jsx';
import Contact from './components/contact/index.jsx';
import PropTypes from 'prop-types';
import SignUp from './components/auth/SignUp.jsx';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/auth/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

// Main Routes of the application
function AppRoutes() {
  const { cart } = useGlobalContext();
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Route for login */}
      <Route
        path="/auth/login"
        element={
          isAuthenticated ? <Navigate to="/" /> : <LoginForm />
        }
      />

      {/* Redirect to login if not authenticated */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/shop/all-products"
        element={
          <ProtectedRoute>
            <ShopIndex />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartContainer cartContainer={cart} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/:id"
        element={
          <ProtectedRoute>
            <ProductDetails cart={cart} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <CheckOut cart={cart} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact-us"
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }
      />

      <Route path="/auth/register" element={<SignUp />} />

      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;

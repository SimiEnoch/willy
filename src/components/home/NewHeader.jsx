import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Logo from '../images/Meubel House_Logos-05.png';
import { useGlobalContext } from '../Context/Context';

const NewHeader = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useGlobalContext();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <header className="fixed top-0 left-0  right-0 z-50 bg-white shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name - Left */}
          <div className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Logo"
              className="w-8 h-8 transform scale-y-[-1]"
            />
            <h1 className="text-lg font-bold tracking-wide font-sans">
              Willy.
            </h1>
          </div>

          {/* Navigation Links - Centered */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-10 text-sm font-semibold">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/all-products"
                  className="hover:text-blue-600 transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right side icons and buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cart.length}
              </span>
            </Link>

            {/* Login/Logout Button */}
            <div className="hidden md:block">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/auth/login"
                  className="text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/shop/all-products"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/contact-us"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              Contact
            </Link>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="block px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-md"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default NewHeader;

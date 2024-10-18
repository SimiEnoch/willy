import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (values) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:8000/api/auth',
        {
          email: values.email,
          password: values.password,
        }
      );

      const token = response.data; // Assuming the backend returns just the token

      if (token) {
        toast.success('Login successful!');
        login(token); // Store the token using the login function from AuthContext
        navigate('/'); // Redirect to home
      } else {
        throw new Error('Login failed. No token received.');
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          'An error occurred. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-brown-800 font-[Calibri]">
            Welcome! Please Sign In
          </h1>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brown-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="mt-1 block w-full px-3 py-2 bg-amber-50 border border-brown-300 rounded-md text-sm shadow-sm placeholder-brown-400
                           focus:outline-none focus:border-brown-500 focus:ring-2 focus:ring-brown-500"
                placeholder="you@example.com"
              />
              {errors.email && (
                <span className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-brown-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                className="mt-1 block w-full px-3 py-2 bg-amber-50 border border-brown-300 rounded-md text-sm shadow-sm placeholder-brown-400
                           focus:outline-none focus:border-brown-500 focus:ring-2 focus:ring-brown-500"
                placeholder="••••••••"
              />
              {errors.password && (
                <span className="text-red-600 text-sm mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black 
                          ${
                            isLoading
                              ? 'bg-gray-400'
                              : 'bg-gradient-to-r from-brown-600 to-amber-700 hover:from-brown-700 hover:to-amber-800'
                          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500`}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        </div>
        <div className="px-8 py-4 bg-brown-100 border-t border-brown-200 flex flex-col sm:flex-row justify-between items-center">
          <Link
            to="/auth/register"
            className="mt-3 sm:mt-0 text-sm text-brown-600 hover:text-brown-800"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

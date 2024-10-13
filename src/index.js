import React from 'react';
import './index.css';
import App from './App';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout';
import ProductPage from './ProductPage';
import ProductDetail from './ProductDetail';
import { CartProvider } from './CartContext';
import Cart from './Cart';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import ProtectedRoute from './Components/ProtectedRoute'; // Import the ProtectedRoute
import { AuthProvider } from './AuthContext';
import Upcoming from './Upcoming';
import GarmentPlanning from './GarmentPlanning';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductPage />
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        )
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        )
      },
      {
        path: "/confirmation",
        element: (
          <ProtectedRoute>
            <Confirmation />
          </ProtectedRoute>
        )
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signUp",
        element: <SignUp />
      },
      {
        path: "/upcomming",
        element: <Upcoming />
      },
      {
        path:"/GarmentPlanning",
        element:<GarmentPlanning/>
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </CartProvider>
  </React.StrictMode>
);

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<ProductPage />    
      } ,
      {
        path:"/product/:productId" ,
         element:<ProductDetail />
      },
      {
        path:"/cart" ,
         element:<Cart />
      },
      {
        path:"/about" ,
         element:<AboutUs />
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:"/checkout" , 
        element:<Checkout /> 
      },
      {
        path:"/confirmation" ,
         element:<Confirmation />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
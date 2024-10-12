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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
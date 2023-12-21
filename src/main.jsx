import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/router.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <AuthProvider>
    <Toaster/>
   <div className='md:max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
   </AuthProvider>
   </HelmetProvider>
  </React.StrictMode>,
)

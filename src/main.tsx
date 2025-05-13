import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './pages/Login.tsx'
import SignUp from './pages/SignUp.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signin", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "*", element: <NotFoundPage /> },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)

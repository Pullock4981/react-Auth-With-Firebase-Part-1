import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './Layout/Main';
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/", 
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react'
import './layout.scss'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className='layout'>
        <Navbar />
        <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
      ]
    }

  ]);


  return (
    // <div className='layout'>

    //   <Navbar />
    //   <div className='content'>
    //     <Home />
    //   </div>
    // </div>
    <RouterProvider router={router} />
  )
}

export default App

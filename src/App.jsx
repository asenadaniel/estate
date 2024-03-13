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
import ListPage from './pages/ListPage/ListPage';
import Login from './pages/Login/Login';
import SinglePage from './pages/SinglePage/SinglePage';

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
        {
          path: '/list',
          element: <ListPage />,
        },
        {
          path: '/:id',
          element: <SinglePage />,
        },
        {
          path: '/login',
          element: <Login />,
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

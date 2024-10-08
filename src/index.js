import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./Home/Home";
import MyBookings from './Mybookings/MyBookings';
import Search from './Search/Search';


//Here we haveto use createBrowserRouter to define different routes
const approuter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path:"/",
        element:<Home/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={approuter}/>
  </React.StrictMode>
);

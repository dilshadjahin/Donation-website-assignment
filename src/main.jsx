import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Description from './Components/Description/Description';
import Donate from './Components/Donate/Donate';
import Statistics from './Components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>},
        
          {
            path: '/donation',
            element: <Donate></Donate>

        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
      {path: '/donate',
      element: <Donate/>,
      loader: ()=> fetch('/catagory.json')

      },
      {
        path: '/Catagory/:id',
        element: <Description></Description>,
        loader: () => fetch('/catagory.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home";
import About from "../Components/About";
import Register from "../Components/Register";
import CategoryNews from "../Components/CategoryNews";
import AuthLayout from "../Components/AuthLayout";
import Login from "../Components/Login";
import PrivateRoute from "../Contexts/PrivateRoute";
import NewsDetails from "../Components/NewsDetails";
    
 export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children:[
        {
            index:true,
            Component: Home
        },
        {
            path:"/about",
            Component: About
        },
        {
          path:"/category/:id",
          Component: CategoryNews,
          loader: () => fetch("/news.json"),
          hydrateFallbackElement:<span className='loading loading-infinity loading-xl'></span>

        
      },

      ]
    },
    {
      path:"/auth",
      Component:AuthLayout,
      children:[
        {
          path:"/auth/login",
          Component:Login
        },
        {
          path:"/auth/register",
          Component:Register
        }
      ]
    },
    {
      path: "/news-details/:id",
      element: (
        <PrivateRoute>
          <NewsDetails></NewsDetails>
        </PrivateRoute>
      ),
      loader: () => fetch("/news.json"),
      hydrateFallbackElement:<span className='loading loading-infinity loading-xl'></span>
    },
    {
        path: "/*",
        element: <h2>Error404</h2>,
    }
  ]);
  

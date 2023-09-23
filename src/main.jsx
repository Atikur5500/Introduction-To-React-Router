import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import Meals from './components/Meals/Meals';
import MealsDetails from './components/MealsDetails/MealsDetails';
import PageError from './components/PageError/PageError';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <PageError></PageError>,
    children: [
      {
        path: '/navbar',
        element: <Navbar></Navbar>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/users/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },
      {
        path: '/meals',
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Meals></Meals>,
      },
      {
        path: '/meal/:mealId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.mealId}`),
        element: <MealsDetails></MealsDetails>
      },

      {
        path: '/footer',
        element: <Footer></Footer>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

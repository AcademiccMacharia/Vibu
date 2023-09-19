import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Landing from './components/Landing/Landing';



const router = createBrowserRouter([
    {
        path: '/vibu',
        element: <Homepage />
    },
    {
        path: '/landing',
        element: <Landing />
    },
    {
        path: "/login",
        element: <Login />
    }
])


export default router;
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    }
])


export default router;
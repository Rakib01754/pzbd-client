import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <ErrorPage></ErrorPage>,
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;
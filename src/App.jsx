import React from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const App = () => {
  const myRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/react-login-signup-pages" element={<Login />} />
        <Route path="/react-login-signup-pages/sign-up" element={<SignUp />} />
      </Route>
  ))

  return <RouterProvider router={myRoutes}/>
}

export default App;


// const App = () => {
//   const myRouter = createBrowserRouter([
//     {
//       path: "/react-login-signup-pages",
//       element: <Login />
//     },
//     {
//       path: "/react-login-signup-pages/sign-up",
//       element: <SignUp />
//     }
//   ])
//   return <RouterProvider router={myRouter} />
// }
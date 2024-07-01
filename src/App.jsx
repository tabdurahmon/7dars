import { createBrowserRouter } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";
import { ErrorPage, Login, Register } from "./page";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      errorElement: <ErrorPage />,
      element: <Register />,
    },
  ]);
}

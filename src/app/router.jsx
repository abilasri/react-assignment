import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Facilities from "../pages/Facilities/Facilities";
import BlogDetails from "../pages/Blogs/BlogDetails";
import Contact from "../pages/Contact/Contact";
import ServicePage from "../pages/Service/ServicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // 👈 IMPORTANT
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "facilities",
        element: <Facilities />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/contact us",
        element: <Contact />,
      },
      {
        path:"/services/:slug", 
        element:<ServicePage /> 
      }
    ],
  },
]);
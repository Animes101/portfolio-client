import App from "../App";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import NotFound404 from "../Pages/NotFound404";
import About from "../Pages/About";
import Skill from "../Pages/Skill";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {path:'/about', element:<About />},
      {path:'/skill', element:<Skill />},
      {path:'/services', element:<Services />},
      {path:'/contact', element:<Contact />},

    ],
  },
  {
    path:'*',
    element: <NotFound404 />
  }
]);

export default router;

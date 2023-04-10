import { createBrowserRouter } from "react-router-dom";
import ProtectedRouter from "../Components/ProtectedRouter/ProtectedRouter";
import NotFound from "./NotFound/NotFound";
import AdminLayout from "../Layouts/AdminLayout/AdminlLayout";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "./Home/Home";
import Store from "./Store/Store";
import SignUp from "../Components/SignUp/SignUp";
import Company from "./Company/Company";
import Contact from "./Contact/Contact"
import ColorsTextures from "./ColorsTextures/ColorsTextures"
import LogIn from "../Components/LogIn/LogIn";

export const router = createBrowserRouter([
  {
    path: "/admin",element: <AdminLayout />,
    children: [

    ],
  },
  {
    path: "/",element: <MainLayout />,
    children: [
      {
        path: "/",element: <ProtectedRouter expectedRole="visitor"/>,
        children:[
          {
            path: "/",element: <Home/>,
          },
          {
            path: "/store",
            element: <Store/>,
          },
          {
            path: "/company",
            element: <Company/>,
          }, 
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/colors-textures",
            element: <ColorsTextures />,
          },
          { path: "/signup", element: <SignUp />},
          { path: "/login", element: <LogIn />},
        
        ],
      }, 
      {
        path: "/*",element: <NotFound />,
      },
    ],
  },
]);

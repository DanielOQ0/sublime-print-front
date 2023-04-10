import { createBrowserRouter } from "react-router-dom";
import ProtectedRouter from "../Components/ProtectedRouter/ProtectedRouter";
import NotFound from "./NotFound/NotFound";
import AdminLayout from "../Layouts/AdminLayout/AdminlLayout";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "./Home/Home";
import Store from "./Store/Store";
import Register from "./Register/Register";
import Company from "./Company/Company";


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
            element: <NotFound />,
          },
          {
            path: "/colors-textures",
            element: <NotFound />,
          },
          { path: "/signup", element: <Register />},
        
        ],
      },
      {
        path: "/*",element: <NotFound />,
      },
    ],
  },
]);

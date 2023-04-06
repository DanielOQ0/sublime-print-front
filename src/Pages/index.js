import { createBrowserRouter } from "react-router-dom";
import ProtectedRouter from "../Components/ProtectedRouter/ProtectedRouter";
import NotFound from "./NotFound/NotFound";
import AdminLayout from "../Layouts/AdminLayout/AdminlLayout";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "./Home/Home";
import User from '../Layouts/MainLayoutUser/MainLayout'


export const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [

    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ProtectedRouter expectedRole="visitor"/>,
        children:[
          {
            path: "/",
            element: <Home/>,
          },
        ]
      },
      {
        path: "/*",
        element: <NotFound />,
      },
      {
        path: '/user',
        element: <User />
      }
    ],
  },
]);

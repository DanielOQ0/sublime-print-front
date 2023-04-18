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
import Profile from "./Profile/ProfileUser"
import ProfileEdit from "./Profile/ProfileEdit";
import Design from "./Design/Design";
import AddressForm from "../Components/AddressForm/AddressForm";
import NewProductForm from "../Components/NewProductForm/NewProductForm";
import AdminPanel from "./AdminPanel/AdminPanel";
import DesignShirt from "./DesignShirt/DesignShirt";



export const router = createBrowserRouter([
  {
    path: "/admin",element: <AdminLayout />,
    children: [
      {path: "/admin/panel/stock",element: <AdminPanel />,},
     /*  {path: "/admin/panel/new",element: <p>new product</p>,}, */
    ],
  },
  {
    path: "/",element: <MainLayout />,
    children: [
      {path: "/",element: <Home/>,},
      {path: "/store",element: <Store/>,},
      {path: "/company",element: <Company/>,}, 
      {path: "/contact",element: <Contact />,},
      {path: "/colors-textures",element: <ColorsTextures />,},
      {path: "/signup", element: <SignUp />},
      {path: "/login", element: <LogIn />}, 
      {path: "/profile", element: <Profile/>},
      {path: "/profile-edit", element: <ProfileEdit/>},
      {path: "/design", element: <Design/>},
      {path: "/design/shirt", element: <DesignShirt/>},
      {path: "/address-form", element: <AddressForm/>},
      {path: "/new-product", element: <NewProductForm/> },
      {path: "/*",element: <NotFound />,},
      
    ],
  },
]);

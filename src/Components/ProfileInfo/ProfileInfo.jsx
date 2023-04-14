import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { ArrowLeftOnRectangleIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../../Store/CaptureUser/actions"
import axios from "axios";
import { toast } from "react-hot-toast";

const { captureUser } = userActions

export default function ProfileInfo() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [openPopover, setOpenPopover] = React.useState(false);
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  const token = localStorage.getItem("token");
  const user = useSelector(store=>store.user.user)
  if(user.length===0){
    dispatch(captureUser())
  }
  async function handleLogout(){
    try {
        let headers = { headers: { Authorization: `Bearer ${token}` } };
        let url = "http://localhost:8080/api/users/signout";
        await axios.post(url, "", headers);
        localStorage.setItem("token", "");
        localStorage.setItem("user", "");
        navigate("/")
        toast.success("Logout successful")
      } catch (error) {
        console.log(error);
      }
      dispatch(captureUser())
  }
  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        <Avatar
            size="md"
            variant="circular"
            src={user.photo} alt={user.name}/>
      </PopoverHandler>
      <PopoverContent {...triggers} className="z-10">
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-2 flex flex-col items-center gap-2 font-medium"
        >
          <span>{user.name}</span> 
          <span className="text-sm text-blue-gray-700">
          {user.email}
          </span>
        </Typography>
        <div className="mt-6 flex items-center justify-around gap-8 border-t border-blue-gray-50 pt-4">
          <Typography
            variant="small"
            color="gray"
            className="flex items-center gap-1 text-xs font-normal cursor-pointer hover:text-indigo-700"
          >
            <UserIcon strokeWidth={2} className="-mt-0.5 h-3.5 w-3.5" />
            <Anchor to={"/profile"}>Profile</Anchor>
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="flex items-center gap-1 text-xs font-normal cursor-pointer hover:text-indigo-700"
            onClick={handleLogout}
            >
            <ArrowLeftOnRectangleIcon
              strokeWidth={2}
              className="-mt-0.5 h-3.5 w-3.5"
            />
            Logout
          </Typography>
        </div>
      </PopoverContent>
    </Popover>
  );
}
import React ,{ useEffect , useState} from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router'
import userActions from "../../Store/CaptureUser/actions";

const { captureUser } = userActions;

let role=[];

export default function ProtectedRouter({expectedRole, redirectTo="/"}) {
    let dispatch = useDispatch();

    //let admin=useSelector((store) => store.CaptureUser.user.is_admin);
    let admin=false//aun no se configura el store de lectura de usuario
    const token = localStorage.getItem(`token`);
    const [reload, setReload] = useState(false)

    useEffect(()=>{
        if (!admin&&token) {
            dispatch(captureUser())
            setReload(!reload)
        }
    },[])
    
    if(!token){
        if(!role.includes("visitor")){role.push("visitor")}
    }else if(role.includes("visitor")){role=role.filter(e=>e!="visitor")}
    
    if(token){
        if(!role.includes("reader")){role.push("reader")}
    }else if(role.includes("reader")){role=role.filter(e=>e!="reader")}
    
    if(admin){
        if(!role.includes("admin")){role.push("admin")}
    }else if(role.includes("admin")){role=role.filter(e=>e!="admin")}

    if(admin!=undefined){
        if(role.includes(expectedRole)){
                return <Outlet/>
            }else{
                return <Navigate to={redirectTo}/>
            }
    }else if (expectedRole==="visitor"){
        return <Outlet/>
    }
    
    
}

import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let captureUser =createAsyncThunk("captureUser",
async()=>{
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let url = "http://localhost:8080/api/users/me";
    try {
        if(token){
            let res = await axios.get(url, headers);
            return { user: res.data.user}
        }else{return {user:[]}}
        
    } catch (error) {
        return {user:[]}
    }
    
})

let updateUser = createAsyncThunk("updateUser",
async()=>{
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let url = "http://localhost:8080/api/users/me";
     try {
        if(token){
            let res = await axios.get(url, headers);
            return { user: res.data.user}
        }else{return {user:[]}}
        
    } catch (error) {
        return {user:[]}
    }
}

) 
const actions = { captureUser, updateUser  }

export default actions 
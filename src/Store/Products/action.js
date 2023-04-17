import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let getProducts =createAsyncThunk("getProducts",
async()=>{
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let url = "http://localhost:8080/api/products";
    try {
        if(token){
            let res = await axios.get(url, headers);
            return { products: res.data.products}
        }else{return {products:[]}}
        
    } catch (error) {
        return {products:[]}
    }
    
})


const actions = { getProducts }

export default actions 
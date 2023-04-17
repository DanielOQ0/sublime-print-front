import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


let getCategories = createAsyncThunk(

    'getCategories',
    async () =>{
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let url = 'http://localhost:8080/api/categories'
    
    try {
        if ( token ){
            let res = await axios.get( url, headers)
            return { categories: res.data.Categories}
        }
        else{
            return { categories: []}
        }
    } catch (error) {
        return { categories: []}
    }
        
    }

)

const actions = { getCategories }

export default actions
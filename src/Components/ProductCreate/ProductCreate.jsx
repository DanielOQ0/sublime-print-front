import React from 'react'
import axios from "axios";
import { useRef } from "react";

export default function ProductCreate() {

  let token = localStorage.getItem("token")
	let headers = { headers: { Authorization: `Bearer ${token}` } };

  const name = useRef();
  const description = useRef();
  const price = useRef();
  const stock = useRef();
  const category = useRef();
  /* const image = useRef() */

  const formRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    let url = 'http://localhost:8080/api/products'
    let formData = new FormData(formRef.current);

    let data = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      stock: formData.get("stock"),
      category: formData.get("category"),
      /* image: formData.get("image"), */
    }

    try {
      const response = await axios.post(url, data, headers);
      formRef.current.reset();
    } catch (error) {
      console.error(error);
    }
}

  return (
    <div>
    <form ref={formRef} onSubmit={handleSubmit}>
      <h1>New Product</h1>
      <input ref={name} name="name" type="text" placeholder="Name" required/>
      <input ref={description} name="description" type="text" placeholder="description" required/>
      <input ref={price} name="price" type="text" placeholder="price" required />
      <input ref={stock} name="stock" type="text" placeholder="stock" required/>
      {/* <input ref={category} name="category" type="select" placeholder="category" required/> */}
      {/* <input ref={image} name="iamge" type="file" placeholder="image" required/> */}
      <input type="submit" value="Send" />
    </form>
  </div>
  )
}

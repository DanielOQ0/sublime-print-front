import './stock2.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
//import './stock.css'



   

export default function Stock2() {

  let token = localStorage.getItem("token")
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState({});

  useEffect(() => { 
      axios.get('http://localhost:8080/api/products', headers)
          .then(res => { 
              console.log(res.data.products)
              setProducts(res.data.products);
          });
  }, []); 

  const handleDelete = (id) => {
      axios.delete(`http://localhost:8080/api/products/${id}`, headers)
          .then(res => {
              setProducts(products.filter(product => product._id !== id));
          })
          .catch(error => {
              console.log(error);
          });
  };

  const handleEdit = (event, id) => {
      const newEdit = { ...edit };
      const fieldName = event.target.name;
      newEdit[id] = { ...newEdit[id], [fieldName]: event.target.value };
      setEdit(newEdit);
  };

  const handleUpdate = (id) => {
      const product = edit[id];
      axios.put(`http://localhost:8080/api/products/${id}`, product, headers)
          .then(res => {
              const updatedProduct = res.data.product;
              setProducts(products.map(product => {
                  if (product._id === updatedProduct._id) {
                      return updatedProduct;
                  }
                  return product;
              }));
              const newEdit = { ...edit };
              delete newEdit[id];
              setEdit(newEdit);
          })
          .catch(error => {
              console.log(error);
          });
  };


  return (

    <div>
      <div id="header">
        <div id="logo">
          <h2><a href="#">Admin<span>Panel</span></a></h2>
        </div>
      </div>
     
      <div id="container">
        <div id="sidebar">
          <ul id="nav">
            <li><a class="selected" href="">Dashboard</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Content</a></li>
            <li><a href="">Settings</a></li>
            <li><a href="">Logout</a></li>
          </ul>
        </div>
        <div id="content">
       {/*    <h1>Dashboard</h1>
          <h4>Welcome, Admin.</h4> */}

          <div id="box">
            <div id="box-top">Lorem ipsum</div>
            <div id="box-panel">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>STOCK</th>
                        <th> <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product._id}</td>
                            <td>
                                <input type="text" name="name" value={edit[product._id]?.name || product.name} onChange={(event) => handleEdit(event, product._id)} />
                            </td>
                            <td>
                                <input type="number" name="price" value={edit[product._id]?.price || product.price} onChange={(event) => handleEdit(event, product._id)} />
                            </td>
                            <td>
                                <input type="number" name="stock" value={edit[product._id]?.stock || product.stock} onChange={(event) => handleEdit(event, product._id)} />
                            </td>
                            <td>
                               {/*  <button onClick={() => handleUpdate(product._id)}>Guardar</button> */}
                                <button onClick={() => handleUpdate(product._id)}  type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
                            </td>
                            <td>
                               {/*  <button onClick={() => handleDelete(product._id)}>DELETE</button> */}
                                <button onClick={() => handleDelete(product._id)}  type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            </div>
            <div id="box-footer"></div>
          </div>
        </div>
      </div>

    </div>







  )
}

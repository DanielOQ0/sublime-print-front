import React from 'react'
import './stock4.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Stock4() {
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


<div id="admin-panel" qbus-repos-id="2KS6FD-AD908">
	<div class="top-panel" clear>
		<div class="loading-routes"></div>
		<div class="admin-panel-logo" tabindex="0">
			Kirana Junction
		</div>
		<div class="search">
			<input value="Search..."/>
			<div class="search-btn" tabindex="0"><i class="fas fa-search"></i></div>
		</div>
		<div class="admin-notification" tabindex="0"><i class="far fa-bell"></i></div>
	</div>
	<div class="admin-body" clear>
		<div class="left-panel">
			<div class="left-pannel-inner">
				<div class="admin-panel-menu">
					<ul>
						<li class="active"><a href="/dashboard.php"><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
						<li><a href="/content.php"><i class="fab fa-product-hunt"></i><span>Products content</span></a>
							<ul>
								<li><a href="/product-category.php"><span>Product Category</span></a></li>
								<li><a href="/product-list.php"><span>Product List</span></a></li>
							</ul>
						</li>
									<li><a href="/analytics.php"><i class="fas fa-chart-line"></i><span>Analytics</span></a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="right-panel">
			<h2>ACA VA LA TABLA</h2>
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
	</div>
</div>

    </div>
  )
}

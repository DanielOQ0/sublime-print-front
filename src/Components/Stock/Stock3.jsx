import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './stock3.css'

export default function Stock3() {
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
       
		<nav class="navbar navbar-toggleable navbar-inverse fixed-top bg-inverse">
			<h2 class="navbar-brand"> ADMIN PRODUCTS</h2>
		</nav>
	
		<main class="container-fluid">
			<article class="row">
			 <aside>
					<nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded navbar-inverse sidebar">
							<ul class="nav nav-pills flex-column">
								<li class="nav-item">
								<a class="nav-link " href="./">DASHBOARD</a>
								</li>	
								<li class="nav-item">
								<a class="nav-link active" href="posts.php">PRODUCTS</a>
								</li>
								<li class="nav-item">
									<a class="nav-link " href="media.php">USERS</a>
								</li>
								<li class="nav-item">
								<a class="nav-link active" href="posts.php">PRODUCTS</a>
								</li>
								<li class="nav-item">
									<a class="nav-link " href="media.php">USERS</a>
								</li>	
							</ul>					
					</nav>
				</aside>
				<section class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
					<article class="row">
						<header class="col-xl-10 col-md-10 offset-md-1 col-sm-12">
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><a href="./">Dashboard</a></li>
								<li class="breadcrumb-item active">Posts</li>
							</ol>
						</header>
						<section class="col-xl-10 col-md-10 offset-md-1 col-sm-12 mb-3">
							<div>
								<a class="btn btn-xs btn-info" href="new-post.php">Add New</a>
								<hr />
								<span class="float-right">
									<form class="form-inline">
										<div class="input-group input-group-sm">
											<input type="search" class="form-control" name="q" placeholder="Search Posts"/>
											<button class="input-group-addon" aria-label="Search Posts">
												<i class="fa fa-search" aria-hidden="true"></i>
											</button>
										</div>
									</form>
								</span>
								 <nav>
									<a class="text-muted" href="posts.php">All (7)</a> |
									<a class="text-muted" href="?published=true">Published (4)</a> |
									<a class="text-muted" href="?published=false">Draft (3)</a>
								</nav>
							</div>
							<br />
							<div >
								<table class="table table-striped table-sm comments">
									<thead>
										<tr>
											<th></th>
											<th>Image</th>
											<th>Name</th>
											<th class="hidden-xs-down">Price</th>
											<th class="hidden-xs-down">stock</th>
											<th>ID</th>
										</tr>
									</thead>
									<tbody>
									{products.map((product, index) => (
										<tr key={index}> {/* DATOS DINAMICOS */}
											<td>
											 <div class="form-check">
												<label class="form-check-label">
													<input class="form-check-input" type="checkbox" name="check_list[]" value="1"/>
												</label>
											 </div>
											</td>
											<td>
												<img src={product.image} alt="Hello World"/>
											</td>
											<td>
											<input type="text" name="name" value={edit[product._id]?.name || product.name} onChange={(event) => handleEdit(event, product._id)} />
											</td>
											<td>
											<input type="number" name="price" value={edit[product._id]?.price || product.price} onChange={(event) => handleEdit(event, product._id)} />
											</td>
											<td>
												<input type="number" name="stock" value={edit[product._id]?.stock || product.stock} onChange={(event) => handleEdit(event, product._id)} />
											</td>
											{/* <td>7</td>
											<td>2017-02-23</td> */}
											<td class="td-comments text-right">
											  {product._id}
												{/* <button class="btn btn-xs btn-simple btn-outline-warning">
													BOTON 1
												</button> */}
												<button onClick={() => handleUpdate(product._id)}  type="button"  class="btn btn-xs btn-simple btn-outline-success">
													UpDate
												</button>
												<button onClick={() => handleDelete(product._id)}  type="button" class="btn btn-xs btn-simple btn-outline-danger">
													DELETE
												</button>
											</td>
										</tr>
									))}
									</tbody>
								</table>
							</div>

						</section>
					</article>
				</section>
			</article>
		</main>
	

    </div>
  )
}

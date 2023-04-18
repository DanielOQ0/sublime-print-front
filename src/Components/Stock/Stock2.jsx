import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './stock2.css'
import { Link as Anchor } from "react-router-dom";
import Swal from 'sweetalert2'


export default function Stock() {
	let token = localStorage.getItem("token")
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    const [products, setProducts] = useState([]);
    const [edit, setEdit] = useState({});

    useEffect(() => { 
        axios.get('http://localhost:8080/api/products', headers)
            .then(res => { 
                setProducts(res.data.products);
            });
    }, []); 

	const handleDelete = (id) => {
		try{
			axios.delete(`http://localhost:8080/api/products/${id}`, headers)
            .then(res => {
                setProducts(products.filter(product => product._id !== id));
            })
			Swal.fire({
                icon: 'success',
                title: 'Ok!',
                text: 'Deleted!'
            })
		
		}catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'not updated',
            })
		}	
    };

    const handleEdit = (event, id) => {
        const newEdit = { ...edit };
        const fieldName = event.target.name;
        newEdit[id] = { ...newEdit[id], [fieldName]: event.target.value };
        setEdit(newEdit);
    };


	const handleUpdate = (id) => {
        const product = edit[id];
		try{
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
			Swal.fire({
                icon: 'success',
                title: 'Ok!',
                text: 'Up date!'
            })

		} catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'not updated',
            })
		}	
    };
	
  return (
    <div class="body-stock">
        <div class="page-stock">
        <div class="sidebar">
            <h2>ADMIN</h2>
            <ul class="links">
                
            <li><p class="active"><Anchor to="/#">Products</Anchor></p></li>
            <li><p><Anchor to="/#">Home</Anchor></p></li>
            </ul>
        </div>
        <div class="content">
            <div className='container-stock'>
       
		
	
		<main className="container-fluid">
			<article className="row-stock">
				<section className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
					<article className="row">
						<header className="col-xl-10 col-md-10 offset-md-1 col-sm-12 xx">
							<ol className="breadcrumb xx">
								<li className="breadcrumb-item"><p></p></li>
								<li className="breadcrumb-item active"></li>
							</ol>
						</header>
                       {/*  <Anchor to="/#" className="btn-new">Add New</Anchor> */}
						<section className="col-xl-10 col-md-10 offset-md-1 col-sm-12 mb-3">
							<div>
								{/* <hr /> */}
								<span className="float-right">
                                <Anchor to="/#" className="btn-new">Add New</Anchor>
									<form className="form-inline">
										<div className="input-group input-group-sm">
	
										</div>
									</form>
								</span>
							</div>
                            
							<br />
							<div >
								<table className="table">
									<thead>
										<tr className='table-head'>
											<th className='table-text'></th>
											<th className='table-text'>Image</th>
											<th className='table-text'>Name</th>
											<th className='table-text'>Price</th>
											<th className='table-text'>Stock</th>
											<th className='table-text'></th>
										</tr>
									</thead>
									<tbody>
									{products.map((product, index) => (
										<tr key={index}>
											<td>
											</td>
											<td className='data-product2'>
												<img src={product.image} alt={product.name} className='image-stock'/>
											</td>
											<td className='data-product'>
											<input type="text" name="name" value={edit[product._id]?.name || product.name} onChange={(event) => handleEdit(event, product._id)} className='data-product'/>
											</td>
											<td className='data-product'>
											<input type="number" name="price" value={edit[product._id]?.price || product.price} onChange={(event) => handleEdit(event, product._id)} className='data-product'/>
											</td>
											<td className='data-product'>
												<input type="number" name="stock" value={edit[product._id]?.stock || product.stock} onChange={(event) => handleEdit(event, product._id)} className='data-product'/>
											</td>
											<td className="td-comments text-right data-product" >
												<button onClick={() => handleUpdate(product._id)}  type="button"  className="btn-update">
													UpDate
												</button>
												<button onClick={() => handleDelete(product._id)}  type="button" className="btn-delete">
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
         
            
        </div>
       
        </div>

    </div>
  )
}

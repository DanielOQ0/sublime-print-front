import { useState, useEffect } from 'react';
import axios from 'axios';
import './stock.css'

export default function Stock() {

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
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>STOCK</th>
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
                                <button onClick={() => handleUpdate(product._id)}>Guardar</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(product._id)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
    </div>
  );
}



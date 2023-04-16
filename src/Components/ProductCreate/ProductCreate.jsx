/* import React from 'react'
import axios from 'axios';

export default function ProductCreate() {
    const name = useRef();
    const description = useRef();
    const price = useRef();
    const stock = useRef();
    const sizes = useRef();
    const colors = useRef();
    
    

    useEffect(() => { 
        axios.put('http://localhost:8080/api/products', headers)
            .then(res => { 
                console.log(res.data.products)
            });
    }, []); 

   

  return (
    <div>
        <form >
            <label htmlFor="">
              <input type="text" />
            </label>
            
        </form>
    </div>
  )
}
 */

import React, { useState } from 'react';
import axios from 'axios';

export default function ProductCreate() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      stock: stockRef.current.value,
      price: priceRef.current.value
     
    };

    try {
      await axios.post('http://localhost:8080/api/products', product);
      setStatus('Product created successfully!');
    } catch (error) {
      setStatus('An error occurred while creating the product.');
    }
  };

  const nameRef = React.createRef();
  const descriptionRef = React.createRef();
  const priceRef = React.createRef();
  const stockRef = React.createRef();


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef} />

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" ref={descriptionRef} />

        <label htmlFor="stock">Stock:</label>
        <input type="number" id="stock" ref={stockRef} />
        <label htmlFor="price">Stock:</label>
        <input type="number" id="price" ref={priceRef} />

  

 

        <button type="submit">Create product</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}

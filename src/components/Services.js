import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Button } from '../styles/Button';

const Services = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg"
          >
            <img
              className="w-full h-auto"
              loading="lazy"
              src={product.PImage}
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{product.Pname}</h2>
              <h3 className="text-lg font-medium mb-2">{product.PDescription}</h3>
              <h2 className="text-gray-600 text-sm font-bold mb-2">Price: ₹ {product.Pprice}</h2>
         <a href='product/65f7fa20c0a74529849f8c6e'>    
          <Button  className="bg-white-500 hover:bg-white-600% text-white font-bold py-2 px-10 rounded">
              View Product              
          </Button></a>
            </div>
          </div>
        ))}
      </div>
      
  );
}

export default Services;

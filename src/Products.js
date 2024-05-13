import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Update import statement
import { Button } from './styles/Button';

function Products() {
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
    return <div>Loading...</div>;
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
              <h3 className="text-lg font-medium mb-2">{product.PDescription}</h3>
              <p className="text-gray-600 text-sm mb-2">Price: ₹ {product.Pprice}</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                    <Link to={`/product/${product._id}`}>Buy Now</Link> {/* Navigate to product details page */}
              </Button>
            </div>
          </div>
        ))}
      </div>
  );
}

export default Products;

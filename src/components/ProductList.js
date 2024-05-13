import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '../styles/Button';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

function ProductList() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Error fetching product details. Please try again later.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const addToCart = () => {


    // Retrieve existing cart items from local storage or initialize an empty array
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Check if the product already exists in the cart
    const existingProductIndex = existingCartItems.findIndex(item => item._id === productId);
  
    if (existingProductIndex !== -1) {
      // If the product already exists in the cart, increase its quantity
      existingCartItems[existingProductIndex].quantity += 1;
    } else {
      // If the product does not exist in the cart, add it with a quantity of 1
      existingCartItems.push({ ...product, quantity: 1 }); // Include the product details
    }
  
    // Save the updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

    // Redirect the user to the cart page
    navigate('/cart');
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
      <div className="bg-gray-100 dark:bg-white-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-black-300 dark:bg--700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={product.PImage}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
              
                <div className="w-[250px] px-2">
                  <Button
                    onClick={addToCart} // Add onClick event to call addToCart function
                    className="w-full bg-orange-400 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-white-600 dark:hover:bg-white-700"
                  >
                    Add to Cart
                  </Button>
                </div>

                  <div className="w-[250px] px-2">
                    <Button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-10 rounded-full font-bold hover:bg-white-300 dark:hover:bg-white-600">
                      PROCEED TO CHECKOUT
                    </Button>
                  </div>

              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-white-800 dark:text-Black mb-2">
                {product.Pname}
              </h2>
              <p className="text-Black-600 dark:text-Black-300 text-sm mb-4">
                
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-Black-700 dark:text-Black-300">Price:</span>
                  <span className="text-Black-50px dark:text-Black-300">₹{product.Pprice}</span>
                </div>
                <div>
                  <span className="font-bold text-Black-700 dark:text-Black-300">Availability:</span>
                  <span className="text-Black-600 dark:text-Black-300">InStock</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-Black-700 dark:text-Black-300">Product Description:</span>
                <p className="text-Black-600 dark:text-Black-300 text-sm mt-2">

                </p>
              </div>
              <div>
                <span className="font-bold text-Black-700 dark:text-Black-300">Brand:</span>
                <p className="text-Black-600 dark:text-Black-300 text-sm mt-2">
                 
                </p>
              </div>
              <br />
              <div>
                <span className="font-bold text-Black-700 dark:text-Black-300">DELIVERY</span>
                <p className="text-Black-600 dark:text-Black-300 text-sm mt-2">
                  Usually Delivers in 12 to 48 hours
                </p>
              </div>
              <div>
                <span className="font-bold text-Black-700 dark:text-Black-300">SHIPPING</span>
                <p className="text-Black-600 dark:text-Black-300 text-sm mt-2">
                  Free shipping on all orders* (Subject to order value)
                </p>
              </div>
              <div>
                <span className="font-bold text-Black-700rem dark:text-Black-300rem">EASY PAYMENT OPTIONS</span>
                <p className="text-Black-600rem dark:text-Black-300rem text-sm mt-2">
                  Net banking & Credit/ Debit/ UPI
                  Cash on Delivery
                  Demand Draft / Cheque / Money order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProductList;

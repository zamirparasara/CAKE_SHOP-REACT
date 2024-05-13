import React, { useState, useEffect } from 'react';
import { Button } from './styles/Button';


function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const removeFromCart = (productId) => {
    // Remove item from cart
    const updatedCartItems = cartItems.filter(item => item._id !== productId);
    setCartItems(updatedCartItems);
    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const updateQuantity = (productId, newQuantity) => {
    // Update quantity of item in cart
    const updatedCartItems = cartItems.map(item => {
      if (item._id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.Pprice * item.quantity), 0);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg text-center">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item._id} className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center">
                <img src={item.PImage} alt={item.Pname} className="w-24 h-24 mr-8 rounded-md" />
                <div>
                  <p className="font-semibold">{item.Pname}</p>
                  <p className="text-gray-600">₹{item.Pprice} x {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-[50px] h-[50px] text-center mr-4"
                />
                <button onClick={() => removeFromCart(item._id)} className="text-red-500 font-semibold hover:text-red-700">Remove</button>
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-8">
            <span className="font-bold text-xl mr-4">Total Price:</span>
            <span className="text-20px">₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-end mt-8">
            <Button className="bg-white-500 text-white px-6 py-3 rounded-md hover:bg-white-600 font-semibold">Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

// import React, { useState } from "react";
// import FormatPrice from "../Helpers/FormatPrice";
// import CartAmountToggle from "./CartAmountToggle";
// import { FaTrash } from "react-icons/fa";
// import { useCartContext } from "../context/cart_context";

// const CartItem = ({ _id, Pname, PImage, Pprice, PDescription, amount, color }) => {
//   const { removeItem, setDecrease, setIncrement } = useCartContext();

//   // const setDecrease = () => {
//   //   amount > 1 ? setAmounts(amount - 1) : setAmounts(1);
//   // };

//   // const setIncrease = () => {
//   //   amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
//   // };

//   return (
//     <div className="cart_heading grid grid-five-column">
//       <div className="cart-image--name">
//         <div>
//           <figure>
//             <img src={PImage} alt={_id} />
//           </figure>
//         </div>
//         <div>
//           <p>{Pname}</p>
//           <div className="color-div">
//             <p>color:</p>
//             <div
//               className="color-style"
//               style={{ backgroundColor: color, color: color }}></div>
//           </div>
//         </div>
//       </div>
//       {/* price   */}
//       <div className="cart-hide">
//         <p>
//           <FormatPrice price={Pprice} />
//         </p>
//       </div>

//       {/* Quantity  */}
//       <CartAmountToggle
//         amount={amount}
//         setDecrease={() => setDecrease(_id)}
//         setIncrease={() => setIncrement(_id)}
//       />

//       {/* //Subtotal */}
//       <div className="cart-hide">
//         <p>
//           <FormatPrice price={Pprice * amount} />
//         </p>
//       </div>

//       <div>
//         <FaTrash className="remove_icon" onClick={() => removeItem(_id)} />
//       </div>
//     </div>
//   );
// };

// export default CartItem;
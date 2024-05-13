import React from "react";
import { NavLink } from "react-router-dom";
// import FormatPprice from "../Helpers/FormatPprice";

const Product = (curElem) => {
  const { _id, Pname, PImage, Pprice, PDescription } = curElem;
  return (
    <NavLink to={`/singleproduct/${_id}`}>
      <div classname="card">
        <figure>
          <img src={PImage} alt={Pname} />
          <figcaption classname="caption">{PDescription}</figcaption>
        </figure>

        { <div classname="card-data">
          <div classname="card-data-flex">
            <h3>{Pname}</h3>
            <p classname="card-data--price">{Pprice={Pprice} }</p>
          </div>
        </div> }
      </div>
    </NavLink>
  );
};

export default Product;

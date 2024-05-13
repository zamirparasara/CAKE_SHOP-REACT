import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontex";
import PageNavigation from "./components/PageNavigation";
import MyPImage from "./components/MyImage";
import { Container } from "./styles/Container";
// import Formatprice from "./Helpers/Formatprice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "localhost:3001/productsAdd";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    Pname,
    company,
    Pprice,
    PDescription,
    // category,
    stock,
    stars,
    reviews,
    PImage,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div classPname="page_loading">Loading.....</div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={Pname} />
      <Container classname="container">
        <div classname="grid grid-two-column">
          {/* product PImage  */}
          <div classname="product_images">
            <MyPImage imgs={PImage} />
          </div>

          {/* product dAta  */}
          <div classname="product-data">
            <h2>{Pname}</h2>
            <Star stars={stars} reviews={reviews} />

            {/* <p classPame="product-data-price">
              MRP:
              <del>
                <Formatprice price={Pprice + 250000} />
              </del>
            </p> */}
            {/* <p classname="product-data-Pprice product-data-real-price">
              Deal of the Day: <Formatprice price={Pprice} />
            </p> */}
            <p>{PDescription}</p>
            <div classname="product-data-warranty">
              <div classname="product-warranty-data">
                <TbTruckDelivery classname="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div classname="product-warranty-data">
                <TbReplace classname="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div classname="product-warranty-data">
                <TbTruckDelivery classname="warranty-icon" />
                <p> </p>
              </div>

              <div classname="product-warranty-data">
                <MdSecurity classname="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div classname="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_PImage {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-Pprice {
      font-weight: bold;
    }
    .product-data-real-Pprice {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-PImage {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MyImage = () => {
  const [imgs, setImgs] = useState([]);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    // Fetch images from the provided URL
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => setImgs(data))
      .catch(error => console.error("Error fetching images:", error));
  }, []);

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs.map((curElm, index) => (
          <figure key={index}>
            <img
              src={curElm.PImage}
              alt={curElm.PDescription}
              className="box-image--style"
              onClick={() => setMainImage(curElm)}
            />
          </figure>
        ))}
      </div>
      {/* 2nd column */}
      <div className="main-screen">
        {mainImage && (
          <img src={mainImage.PImage} alt={mainImage.PDescription} />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;

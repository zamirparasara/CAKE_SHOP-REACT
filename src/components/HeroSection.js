import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="hero-section-content">
          <div className="hero-section-data">
            {/* <h1>{name}</h1> */}
            {/* <p>We are a cake counter that helps you keep track of your cakes.</p> */}
            <NavLink to="/order">
              {/* <Button>Order Now</Button> */}
            </NavLink>
          </div>
          <div className="hero-section-image">
            <img src="images/hero-page.jpg" alt="hero-section-photo" className="img-style" />
            <div className="button-container">
              <NavLink to="/order">
                <Button>Order Now</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .hero-section-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative; /* Added position relative */
  }

  .hero-section-image {
    width: 100%; /* Adjust width as needed */
    
  }

  img {
    width: 1450px;
    height: 550px;
    // margin-right: -687px;
    // padding-left: -31px;
    // padding-right: 100px;
    // margin-left: 0px;
  }

  .button-container {
    position: absolute;
    bottom: 100px; /* Adjust bottom position of the button */
    left: 20%; /* Center the button horizontally */
    transform: translateX(-50%); /* Center the button horizontally */
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .hero-section-content {
      flex-direction: column;
    }
  }
`;

export default HeroSection;

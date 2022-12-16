import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <>
      <h2>Kaela's Food Fantasy</h2>
      <br/>
      <h2 class="paddingh2"> WHO IS KAYLA? </h2>
      <br></br>
      <p> 
        I am a freelance cook who captures depth and meaning in a dish.<br/>
        Allowing you to see everyday ingredients from a new perspective.<br/>
        I ensure you with high quality dishes made by using different ingredients to capture the perfect meal.<br/>
        Recipes and Shopping Lists will be made available.<br/>
      </p>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/christmas_pudding_trifle_38724_16x9.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Christmas Pudding</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/chocolate_roulade_79152_16x9.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Yule Log</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/budget_roast_turkey_21396_16x9.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Christmas Roast</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
};   

export default Home;

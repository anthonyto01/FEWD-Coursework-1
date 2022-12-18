import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <>
      <br/>
      <br/>
      <h2 className="Home_text">Kayla's Food Fantasy</h2>
      <br/>
      <h2 className="Home_text"> WHO IS KAYLA? </h2>
      <br/>
      <p className="Home_text"> 
        I am a freelance cook who captures depth and meaning in a dish.<br/>
        Allowing you to see everyday ingredients from a new perspective.<br/>
        I ensure you with high quality dishes made by using different ingredients to capture the perfect meal.<br/>
        Recipes and Shopping Lists will be made available.<br/>
      </p>
      <br/>
      <br/>
      <Carousel>
      <Carousel.Item interval={1500}>
        <img
          width={900} 
          height={500}
          src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/christmas_pudding_trifle_38724_16x9.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="carouselCaption">
          <h3>Christmas Pudding</h3>
          <p>A sweet dried-fruit pudding traditionally served as part of Christmas dinner.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          width={900} 
          height={500}
          src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/chocolate_roulade_79152_16x9.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="carouselCaption">
          <h3>Yule Log</h3>
          <p>A specially selected log burnt on a hearth as a winter tradition in regions of Europe.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval={1500}>
        <img
          width={900} 
          height={500}
          src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/budget_roast_turkey_21396_16x9.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="carouselCaption">
          <h3>Christmas Roast</h3>
          <p>The tradition of the Christian feast day celebration, and form a significant part of gatherings held to celebrate the arrival of Christmastide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
};   

export default Home;

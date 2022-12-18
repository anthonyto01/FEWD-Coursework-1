import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FetchData from "./FetchNutrition";
import Accordion from "react-bootstrap/Accordion";
import MenuContext from "./MenuContext";
import AddtoMenu from "./AddtoMenu";
import ShoppingContext from "./ShoppingContext";
import Shopping from "./Shopping";

const DisplayRecipe = ({ recipes }) => {
  const { itemId } = useParams();
  const currentItem = recipes.filter((item) => {
    return item.name === itemId;
  });
  const ingredients = currentItem[0].ingredients;
  const name = currentItem[0].name;
  const method = currentItem[0].method;

  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [selectedShoppingItems, setSelectedShoppingItems] = useState([]);

  const handleMenuClick = (e, selectedItem) => {
    let newState = [...selectedMenuItems, selectedItem];
    setSelectedMenuItems(newState);
    console.log(selectedMenuItems);
  };
  
  const handleShoppingClick = (e, selectedItem) => {
    let newState = [...selectedShoppingItems, selectedItem];
    setSelectedShoppingItems(newState);
    console.log(selectedShoppingItems);
  };

  return (
    <>
      {/* Adds recipes to Menu when clicked */}
      <div className="addtomenubutton"> 
        <button className="addtomenu" onClick={(e) => handleMenuClick(e, name)}>Add to Menu</button>
      </div>
      <br/>

      {/* An Accordion list of which separate headings which displays their respective data */}
      <Accordion>
      <Accordion.Header>Ingredients</Accordion.Header>
        <Accordion.Body>
          <ul>
            {ingredients.map((ingredients) => (
              <li key={ingredients} onClick={(e) => handleShoppingClick(e, ingredients)}> {ingredients}</li>
            ))}
          </ul>
        </Accordion.Body>
      <Accordion.Header>Method</Accordion.Header>
          <Accordion.Body>
            <ol>
                {method.map((method) => (
                    <li key={method}>{method}</li>
                ))}
            </ol>
        </Accordion.Body>
      <Accordion.Header>Nutritional Information</Accordion.Header>
        <Accordion.Body>
          <FetchData query={name} />
        </Accordion.Body>
      <Accordion.Header>Your Menu</Accordion.Header>
        <Accordion.Body>
          <MenuContext.Provider value={[selectedMenuItems, setSelectedMenuItems]}>
            <AddtoMenu />
          </MenuContext.Provider>
        </Accordion.Body>
      <Accordion.Header>Your Shopping List</Accordion.Header>
      <Accordion.Body>
        <ShoppingContext.Provider value={[selectedShoppingItems, setSelectedShoppingItems]}>
            <Shopping />
        </ShoppingContext.Provider>
      </Accordion.Body>
      </Accordion>
    </>
  );
};

export default DisplayRecipe;
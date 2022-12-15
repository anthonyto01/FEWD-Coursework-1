import React from "react";
import {  useParams } from "react-router-dom";
import FetchData from "./FetchNutrition";
import Accordion from "react-bootstrap/Accordion";

const DisplayRecipe = ({ recipes }) => {
  const { itemId } = useParams();
  const currentItem = recipes.filter((item) => {
    return item.name === itemId;
  });
  const ingredients = currentItem[0].ingredients;
  const name = currentItem[0].name;
  const method = currentItem[0].method;

  return (
    <>
      <Accordion>
      <Accordion.Header>Ingredients</Accordion.Header>
      <Accordion.Body>
        <ul>
          {ingredients.map((ingredients) => (
            <li key={ingredients}> {ingredients}</li>
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
      </Accordion>
    </>
  );
};

export default DisplayRecipe;
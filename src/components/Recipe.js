import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordian from "react-bootstrap/Accordion";
import DisplayIngredients from "./DisplayIngredients";

const Recipe = ({ recipes }) => {
    const { itemId } = useParams();
    const currentItem = recipes.filter((item) => {
      return item.name === itemId;
    });
    const { name, description, rating, method, ingredients} = currentItem[0];

    return (
        <>
    <Accordian>
            <h1>{name}</h1>
            <h3>{rating}</h3>
            <h5>{description}</h5>
        <DisplayIngredients recipes={recipes} />
        <Accordian.Header>Method</Accordian.Header>
        <Accordian.Body>{method}</Accordian.Body>
    </Accordian>
        </>
    );
};

export default Recipe;
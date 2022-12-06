import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordian from "react-bootstrap/Accordion";
import DisplayIngredients from "./DisplayIngredients";
import DisplayNutrition from "./DisplayNutrition";

const Recipe = ({ recipes }) => {
    const { itemId } = useParams();
    const currentItem = recipes.filter((item) => {
      return item.name === itemId;
    });
    const { name, description, rating, method, ingredients, nutrition} = currentItem[0];

    return (
        <>
    <Accordian>
            <h1>{name}</h1>
            <h3>{rating}</h3>
            <h5>{description}</h5>
        <DisplayIngredients recipes={recipes} />
        <Accordian.Header>Method</Accordian.Header>
        <Accordian.Body>
            <ol>
                {method.map((method) => (
                        <li key={method}>{method}</li>
                ))}
            </ol>
        </Accordian.Body>
        <Accordian.Header>Nutritional Information</Accordian.Header>
        <Accordian.Body>
        <DisplayNutrition item={nutrition} />
        </Accordian.Body>
    </Accordian>
        </>
    );
};


export default Recipe;

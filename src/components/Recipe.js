import React from "react";
import {  useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

import DisplayRecipe from "./DisplayRecipe"

const Recipe = ({ recipes }) => {
    const { itemId } = useParams();
    const currentItem = recipes.filter((item) => {
      return item.name === itemId;
    });
    const { name, description, rating, img } = currentItem[0];

    return (
        <>
          <Card style={{width: '50rem'}}>
                <Card.Img variant="top" src={img}/>
                <Card.Body style={{ textAlign: "center"}}>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        {rating}
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Text>
                        <DisplayRecipe recipes={recipes}/>
                    </Card.Text>
                </Card.Body>
        </Card>
        <p></p>
        </>
    );
};


export default Recipe;

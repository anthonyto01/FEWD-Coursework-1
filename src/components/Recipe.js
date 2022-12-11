import React from "react";
import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import DisplayRecipe from "./DisplayRecipe";
import Card from 'react-bootstrap/Card';

export default function Recipe({ recipes }) {
    return recipes.map(recipe => (
            <Card key={recipe.id}>
                <h1>{recipe.name}</h1>
                <h3>{recipe.rating}</h3>
                <h5>{recipe.description}</h5>
            </Card>
        ))
}
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {recipes} from "../data/data";
import Recipe from "./Recipe";

const Home = () => {
  const [searchField, setSearchField] = useState("");

  const filtered = recipes.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase())|| entry.description.toLowerCase().includes(searchField.toLowerCase());
  
   });
 
  return (

    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 submenu main-color">
          <input
             className="form-control"
             type="text"
             placeholder="Search ..."
             onChange={(e) =>  setSearchField(e.target.value)}
           />
            <ul>
              {recipes.map((recipe) => (
                <li key={recipe.id}>
                  <Link to={recipe.name}>{recipe.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6" style={{ margin: "5%" }}>
          <Recipe recipes={filtered} />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default Home;





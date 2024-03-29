import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = ({ recipes }) => {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 submenu main-color">
            <br/>
            {/* Displays the lists of Recipes */}
            <ul class="recipes">
              {recipes.map((recipe) => (
                <li class="recipeNames" key={recipe.id}>
                  <Link to={recipe.name}>{recipe.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6" style={{ margin: "auto" }}>
            <Outlet />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default Menu;



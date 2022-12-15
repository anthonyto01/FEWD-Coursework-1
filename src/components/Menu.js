import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = ({ recipes }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleClick = (e, selectedItem) => {
    let newState = [...selectedItems, selectedItem];
    setSelectedItems(newState);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 submenu main-color">
            <ul class="gradient-list">
              {recipes.map((recipe) => (
                <li key={recipe.id}>
                  <Link to={recipe.name}>{recipe.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6" style={{ margin: "5%" }}>
            <Outlet />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default Menu;



import React, { useContext } from "react";
import MenuContext from "./MenuContext";

export default function AddtoMenu() {
  const [order] = useContext(MenuContext);

  return (
    <div>
      <p>Your Currently added recipes: -</p>
      {/* Displays a list of recipes which have been added to the menu */}
      <ul>
        {order.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

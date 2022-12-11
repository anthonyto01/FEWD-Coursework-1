import React, { useState } from "react";
import { recipes } from "../data/data";
import Recipe from "./Recipe";

function Search() {
  const [searchField, setSearchField] = useState("");

 const filtered = recipes.filter((entry) => {
   return entry.name.toLowerCase().includes(searchField.toLowerCase())|| entry.description.toLowerCase().includes(searchField.toLowerCase());
 
  });

 return (
     <div>
         <div>
           <input
             className="form-control"
             type="text"
             placeholder="Search ..."
             onChange={(e) =>  setSearchField(e.target.value)}
           />
         </div>
         <Recipe recipes={filtered} />
     </div>
 
 );
}

export default Search;
import React, { useState } from "react";
import Menu from "./Menu";

function Search({ details }) {
   const [searchField, setSearchField] = useState("");

  const filtered = details.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase())|| entry.description.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
      <div>
        <br/>
          <div class="searchBar" style={{width:20+'%', margin:"20px"}}>
            <input
              className="form-control"
              type="text"
              placeholder="Search Recipes..."
              onChange={(e) =>  setSearchField(e.target.value)}
            />
          </div>
          <Menu recipes={filtered} />
      </div>
  
  );
}
export default Search;

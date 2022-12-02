import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shopping from "./components/Shopping";
import Navigation from "./components/Navigation";
import Error404 from "./components/Error404";
import { recipes } from "./data/data";

import Menu from "./components/Menu";
import Recipe from "./components/Recipe";

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu recipes={recipes} />}>
          <Route path=":itemId" element={<Recipe recipes={recipes} />} />
          </Route>
          <Route path="shopping" element={<Shopping />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shopping from "./components/Shopping";
import Navigation from "./components/Navigation";
import Error404 from "./components/Error404";
import { recipes } from "./data/data";


import Menu from "./components/Menu";
import Recipe from "./components/Recipe";
import DisplayRecipe from "./components/DisplayRecipe";

function App() {
  return (  
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navigation/>}>
            <Route index element={<Home />}/>
            <Route path="recipe/:itemId" element={<DisplayRecipe recipes={recipes} />} />
            <Route path="menu" element={<Menu />} />
            <Route path="shopping" element={<Shopping />} />
            <Route path="*" element={<Error404 />}/>
        </Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;


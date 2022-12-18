import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { recipes } from "./data/data";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Error404 from "./components/Error404";
import Recipe from "./components/Recipe";
import Search from "./components/Search";

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />}/>
        <Route path="menu" element={<Search details={recipes} />} >
          <Route path=":itemId" element={<Recipe recipes={recipes} />} />
        </Route>
        <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

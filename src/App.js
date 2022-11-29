import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shopping from "./components/Shopping";
import Review from "./components/Review";
import Navigation from "./components/Navigation";import NoPage from "./components/Error404";


function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

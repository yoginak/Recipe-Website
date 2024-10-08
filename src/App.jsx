import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Meal from "./pages/Meal/Meal";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Recipe from "./pages/Recipe/Recipe";
import './styles/_global.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="category/:category" element={<Meal />} />
          <Route path="meal/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

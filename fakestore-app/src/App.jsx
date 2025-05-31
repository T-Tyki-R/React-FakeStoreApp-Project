// Imports
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Products from "./components/Product";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product" element={<Products/>}/>
      </Routes>
    </>
  );
}

export default App;

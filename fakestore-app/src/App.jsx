// Imports
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Products from "./components/Product";
import ProductDetail from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/product" element={<Products/>}/>
        <Route path="/product/:productId" element={<ProductDetail/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
        <Route path="/edit-product/:productId" element={<EditProduct/>}/>
        <Route path="*" element={<h2>Page not found</h2>}/>
      </Routes>
    </>
  );
}

export default App;

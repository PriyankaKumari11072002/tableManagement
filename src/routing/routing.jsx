import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../breadCrumb/home";
import ProductList from "../breadCrumb/productList";
import ProductDetail from "../breadCrumb/productDetail";


function Routing() {

    return (
      <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
   
    <Route path="/productlist" element={<ProductList/>}/>
    <Route path="/productlist/productdetail/:id" element={<ProductDetail/>}/>
   </Routes>
   </BrowserRouter>
      </>
    )
  }
  
  export default Routing;
  
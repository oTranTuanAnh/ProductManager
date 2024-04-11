
import './App.css';
import Navbar from "./component/Navbar";
import ListProducts from "./component/ListProduct";
import {Route, Routes} from "react-router-dom";
import CreateProduct from "./component/CreateProduct";
import EditProduct from "./component/EditProduct";
import Detail from "./component/Detail";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="products" element={<ListProducts/>}></Route>
        <Route path={"/products/create"} element={<CreateProduct/>}></Route>
        <Route path={"/products/edit/:id"} element={<EditProduct/>}></Route>
        <Route path={"/products/detail/:id"} element={<Detail/>}></Route>


      </Routes>
    </div>
  );
}

export default App;

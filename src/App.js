
import './App.css';
import Navbar from "./component/Navbar";
import ListProducts from "./component/ListProduct";
import {Route, Routes} from "react-router-dom";
import CreateProduct from "./component/CreateProduct";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="products" element={<ListProducts/>}></Route>
        <Route path={"/products/create"} element={<CreateProduct/>}></Route>
        {/*<Route path={"/students/edit/:id"} element={<EditStudent/>}></Route>*/}


      </Routes>
    </div>
  );
}

export default App;

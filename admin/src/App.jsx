import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import { Routes, Route } from "react-router-dom";
import Lists from "./pages/Lists";
import Orders from "./pages/Orders";
import Login from "./pages/Login";

function App() {

  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/lists" element={<Lists/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/add" element={<AddProduct/>}/>

        </Routes>
  
    </div>
  );
}

export default App;

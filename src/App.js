import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Navbar from "./components/navbar/Navbar";
import Login  from "./pages/Login";
function App() {
  return (
    <div className="App">
  
      <Navbar />
      <Routes> 
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;






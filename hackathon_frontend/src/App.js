import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Organizer from "./Modules/Organizer";
import Customer from "./components/Customer";
import Login from "./components/LoginComponents/Login"

function App() {
  return (
   
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/organize" element={<Organizer />} />
          <Route path="/trending" element={<Home />} />
          <Route path="/categories" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/organize/status" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

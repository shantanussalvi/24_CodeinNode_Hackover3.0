import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customer from "./components/Customer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organize" element={<Home />} />
          <Route path="/trending" element={<Home />} />
          <Route path="/categories" element={<Home />} />
          <Route path="/customer" element={<Customer/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
